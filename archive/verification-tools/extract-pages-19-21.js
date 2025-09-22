#!/usr/bin/env node

/**
 * Extract Exact Content for Pages 19-21
 * Pages 19 (Phonology), 20 (Motor Speech), 21 (Mumbling)
 */

const fs = require('fs');
const path = require('path');

class ContentExtractor {
    constructor() {
        this.sourceMarkdown = '/mnt/c/Users/insti/Downloads/SLK Modular Therapy Curriculum (1).md';
        this.outputPath = path.join(__dirname, '../extracted-content/pages-19-21-content.md');
    }

    async extractContent() {
        console.log('📖 Extracting exact content for Pages 19-21...');

        const markdownContent = fs.readFileSync(this.sourceMarkdown, 'utf8');
        const extractedContent = [];

        // Extract Page 19 (Phonology)
        extractedContent.push('# Page 19 - Phonology');
        extractedContent.push('');
        extractedContent.push(this.extractPageContent(markdownContent, 19));
        extractedContent.push('');
        extractedContent.push('---');
        extractedContent.push('');

        // Extract Page 20 (Motor Speech)
        extractedContent.push('# Page 20 - Motor Speech');
        extractedContent.push('');
        extractedContent.push(this.extractPageContent(markdownContent, 20));
        extractedContent.push('');
        extractedContent.push('---');
        extractedContent.push('');

        // Extract Page 21 (Mumbling)
        extractedContent.push('# Page 21 - Mumbling');
        extractedContent.push('');
        extractedContent.push(this.extractPageContent(markdownContent, 21));

        // Ensure directory exists
        const outputDir = path.dirname(this.outputPath);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        fs.writeFileSync(this.outputPath, extractedContent.join('\n'));
        console.log(`📁 Content extracted to: ${this.outputPath}`);
    }

    extractPageContent(content, pageNumber) {
        const pageSection = this.extractMarkdownSection(content, `Page ${pageNumber}:`);

        if (!pageSection) {
            return `ERROR: Could not find Page ${pageNumber} content`;
        }

        const sections = [];

        // Extract levels
        const levels = ['Beginner', 'Intermediate', 'Advanced'];

        for (const level of levels) {
            const levelContent = this.extractLevelContent(pageSection, level);
            if (levelContent) {
                sections.push(`## ${level} Level`);
                sections.push('');
                sections.push(`**Description:** ${levelContent.description}`);
                sections.push('');
                sections.push(`**Goal:** ${levelContent.goal}`);
                sections.push('');
                if (levelContent.activities) {
                    sections.push('**Activities:**');
                    levelContent.activities.forEach(activity => {
                        sections.push(`- ${activity}`);
                    });
                    sections.push('');
                }
                sections.push('---');
                sections.push('');
            }
        }

        return sections.join('\n');
    }

    extractMarkdownSection(content, sectionTitle) {
        const lines = content.split('\n');
        const startIndex = lines.findIndex(line => line.includes(sectionTitle));

        if (startIndex === -1) return null;

        const endIndex = lines.findIndex((line, index) =>
            index > startIndex && line.match(/^### Page \d+:/)
        );

        return lines.slice(startIndex, endIndex === -1 ? undefined : endIndex).join('\n');
    }

    extractLevelContent(section, level) {
        const lines = section.split('\n');

        const startIndex = lines.findIndex(line =>
            line.includes(`#### ${level} Level:`)
        );

        if (startIndex === -1) return null;

        const endIndex = lines.findIndex((line, index) =>
            index > startIndex && line.match(/^#### (Beginner|Intermediate|Advanced) Level:/)
        );

        const levelSection = lines.slice(
            startIndex,
            endIndex === -1 ? undefined : endIndex
        ).join('\n');

        // Extract description (first paragraph after level header)
        const descMatch = levelSection.match(/#### .+?Level: .+?\n\n(.+?)\n\n/s);
        const description = descMatch ? descMatch[1].trim() : null;

        // Extract goal
        const goalMatch = levelSection.match(/\*\*Sample Goal:\*\*\s*(.+?)(?=\n\*\*|\n\||\n\n|$)/s);
        const goal = goalMatch ? goalMatch[1].trim() : null;

        // Extract activities
        const activitiesMatch = levelSection.match(/\*\*Therapy Activities:\*\*\s*([\s\S]*?)(?=\n####|\n\*\*|$)/);
        let activities = null;
        if (activitiesMatch) {
            activities = activitiesMatch[1]
                .split('\n')
                .filter(line => line.trim().startsWith('- '))
                .map(line => line.replace(/^- /, '').trim());
        }

        return { description, goal, activities };
    }
}

// Run extraction if called directly
if (require.main === module) {
    const extractor = new ContentExtractor();
    extractor.extractContent().catch(console.error);
}

module.exports = ContentExtractor;