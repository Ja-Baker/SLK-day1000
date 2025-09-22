#!/usr/bin/env node

/**
 * Exact Content Extraction Tool
 * Extracts precise level content from markdown for replacement
 */

const fs = require('fs');
const path = require('path');

class ExactContentExtractor {
    constructor() {
        this.sourceMarkdown = '/mnt/c/Users/insti/Downloads/SLK Modular Therapy Curriculum (1).md';
        this.extractedContent = new Map();
    }

    async extract() {
        console.log('🔍 Extracting exact content from markdown...');

        const markdownContent = fs.readFileSync(this.sourceMarkdown, 'utf8');

        // Focus on high-impact pages first
        const priorityPages = [
            { page: 17, name: 'AAC Curriculum' },
            { page: 18, name: 'Articulation Curriculum' }
        ];

        for (const pageInfo of priorityPages) {
            console.log(`📋 Extracting Page ${pageInfo.page}: ${pageInfo.name}...`);
            this.extractPageContent(markdownContent, pageInfo.page);
        }

        await this.saveExtractions();
        console.log('✅ Content extraction complete!');
    }

    extractPageContent(markdownContent, pageNumber) {
        const pageSection = this.extractMarkdownSection(markdownContent, `Page ${pageNumber}:`);

        if (!pageSection) {
            console.log(`⚠️ No content found for Page ${pageNumber}`);
            return;
        }

        const levels = ['beginner', 'intermediate', 'advanced'];
        const pageContent = {};

        for (const level of levels) {
            const levelContent = this.extractLevelContent(pageSection, level);
            if (levelContent) {
                pageContent[level] = levelContent;
                console.log(`   ✅ ${level} level extracted`);
            } else {
                console.log(`   ⚠️ ${level} level not found`);
            }
        }

        this.extractedContent.set(pageNumber, pageContent);
    }

    extractMarkdownSection(content, sectionTitle) {
        const lines = content.split('\n');
        const startIndex = lines.findIndex(line => line.includes(sectionTitle));

        if (startIndex === -1) return '';

        const endIndex = lines.findIndex((line, index) =>
            index > startIndex && line.match(/^### Page \d+:/)
        );

        return lines.slice(startIndex, endIndex === -1 ? undefined : endIndex).join('\n');
    }

    extractLevelContent(section, level) {
        const levelNames = {
            'beginner': 'Beginner Level',
            'intermediate': 'Intermediate Level',
            'advanced': 'Advanced Level'
        };

        const levelName = levelNames[level];
        const lines = section.split('\n');

        // Find level header with anchor
        const startIndex = lines.findIndex(line =>
            line.includes(`#### ${levelName}:`) && line.includes('{#')
        );

        if (startIndex === -1) return null;

        // Find end of level section
        const endIndex = lines.findIndex((line, index) =>
            index > startIndex && line.match(/^#### (Beginner|Intermediate|Advanced) Level:/)
        );

        const levelSection = lines.slice(startIndex, endIndex === -1 ? undefined : endIndex);

        return {
            title: this.extractLevelTitle(levelSection),
            description: this.extractLevelDescription(levelSection),
            goal: this.extractGoal(levelSection),
            rubric: this.extractRubric(levelSection),
            activities: this.extractActivities(levelSection),
            rawContent: levelSection.join('\n')
        };
    }

    extractLevelTitle(levelSection) {
        // Extract title from header line
        const headerLine = levelSection[0];
        const match = headerLine.match(/^#### (.+?) \{#/);
        return match ? match[1] : null;
    }

    extractLevelDescription(levelSection) {
        // Find first substantial paragraph after header
        for (let i = 1; i < levelSection.length; i++) {
            const line = levelSection[i].trim();

            // Skip empty lines and markdown formatting
            if (!line || line.startsWith('**') || line.startsWith('|') || line.startsWith('Button:')) {
                continue;
            }

            // This should be the description paragraph
            if (line.length > 50) { // Substantial content
                return line;
            }
        }

        return null;
    }

    extractGoal(levelSection) {
        const content = levelSection.join('\n');

        // Extract goal after "**Sample Goal:**"
        const goalMatch = content.match(/\*\*Sample Goal:\*\*\s*\n([^*\n]+(?:\n(?!\*\*)[^*\n]+)*)/);

        if (goalMatch) {
            return goalMatch[1].trim();
        }

        return null;
    }

    extractRubric(levelSection) {
        const content = levelSection.join('\n');

        // Extract rubric table
        const rubricMatch = content.match(/\| Score \| Description \|[\s\S]*?(?=\n\n|\*\*Therapy Activities|\*\*Button:|$)/);

        if (rubricMatch) {
            // Clean up the rubric and convert to array format
            const rubricLines = rubricMatch[0].split('\n').filter(line => line.trim());
            const rubricItems = [];

            for (let i = 2; i < rubricLines.length; i++) { // Skip header and separator
                const line = rubricLines[i].trim();
                if (line.startsWith('|')) {
                    const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell);
                    if (cells.length >= 2) {
                        rubricItems.push({
                            score: cells[0],
                            description: cells[1]
                        });
                    }
                }
            }

            return rubricItems;
        }

        return null;
    }

    extractActivities(levelSection) {
        const content = levelSection.join('\n');

        // Extract therapy activities section
        const activitiesMatch = content.match(/\*\*Therapy Activities:\*\*\s*\n([\s\S]*?)(?=\n#### |$)/);

        if (activitiesMatch) {
            const activitiesText = activitiesMatch[1].trim();

            // Extract button links
            const buttonMatches = activitiesText.match(/Button: \[([^\]]+)\]\(([^)]+)\)/g);

            if (buttonMatches) {
                return buttonMatches.map(match => {
                    const linkMatch = match.match(/Button: \[([^\]]+)\]\(([^)]+)\)/);
                    return {
                        text: linkMatch[1],
                        link: linkMatch[2]
                    };
                });
            }

            return [{ text: activitiesText, link: null }];
        }

        return null;
    }

    async saveExtractions() {
        const outputDir = path.join(__dirname, '../extracted-content');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Convert Map to object for JSON serialization
        const extractedObject = Object.fromEntries(this.extractedContent);

        fs.writeFileSync(
            path.join(outputDir, 'exact-level-content.json'),
            JSON.stringify(extractedObject, null, 2)
        );

        // Create human-readable format
        let readable = '# Extracted Level Content\n\n';

        for (const [pageNum, pageContent] of this.extractedContent) {
            readable += `## Page ${pageNum}\n\n`;

            for (const [level, content] of Object.entries(pageContent)) {
                readable += `### ${level.charAt(0).toUpperCase() + level.slice(1)} Level\n\n`;
                readable += `**Title:** ${content.title}\n\n`;
                readable += `**Description:** ${content.description}\n\n`;

                if (content.goal) {
                    readable += `**Goal:** ${content.goal}\n\n`;
                }

                if (content.rubric) {
                    readable += `**Rubric:**\n`;
                    content.rubric.forEach(item => {
                        readable += `- **${item.score}:** ${item.description}\n`;
                    });
                    readable += '\n';
                }

                if (content.activities) {
                    readable += `**Activities:**\n`;
                    content.activities.forEach(activity => {
                        readable += `- [${activity.text}](${activity.link})\n`;
                    });
                    readable += '\n';
                }

                readable += '---\n\n';
            }
        }

        fs.writeFileSync(
            path.join(outputDir, 'exact-content-readable.md'),
            readable
        );

        console.log(`📁 Extracted content saved to: ${outputDir}`);
    }
}

// Run extraction if called directly
if (require.main === module) {
    const extractor = new ExactContentExtractor();
    extractor.extract().catch(console.error);
}

module.exports = ExactContentExtractor;