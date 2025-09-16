#!/usr/bin/env node

/**
 * Extract Exact Content for Remaining Pages with AI Content
 * Pages 34 (Cluttering), 36 (Emotional Regulation), 37 (Voice), 38 (Resonance)
 */

const fs = require('fs');
const path = require('path');

class ContentExtractor {
    constructor() {
        this.sourceMarkdown = '/mnt/c/Users/insti/Downloads/SLK Modular Therapy Curriculum (1).md';
        this.outputPath = path.join(__dirname, '../extracted-content/remaining-pages-content.md');
    }

    async extractContent() {
        console.log('📖 Extracting exact content for remaining pages with AI content...');

        const markdownContent = fs.readFileSync(this.sourceMarkdown, 'utf8');
        const extractedContent = [];

        const pagesToExtract = [
            { number: 34, name: 'Cluttering' },
            { number: 36, name: 'Emotional Regulation and Self Advocacy' },
            { number: 37, name: 'Voice' },
            { number: 38, name: 'Resonance' }
        ];

        for (const page of pagesToExtract) {
            extractedContent.push(`# Page ${page.number} - ${page.name}`);
            extractedContent.push('');
            extractedContent.push(this.extractPageContent(markdownContent, page.number));
            extractedContent.push('');
            extractedContent.push('---');
            extractedContent.push('');
        }

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
                if (levelContent.title) {
                    sections.push(`**Title:** ${levelContent.title}`);
                    sections.push('');
                }
                sections.push(`**Description:** ${levelContent.description}`);
                sections.push('');
                sections.push(`**Goal:** ${levelContent.goal}`);
                sections.push('');
                if (levelContent.activities && levelContent.activities.length > 0) {
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

        // Extract title from level header
        const titleMatch = levelSection.match(/#### .+?Level: (.+?)$/m);
        const title = titleMatch ? titleMatch[1].trim() : null;

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

        return { title, description, goal, activities };
    }
}

// Run extraction if called directly
if (require.main === module) {
    const extractor = new ContentExtractor();
    extractor.extractContent().catch(console.error);
}

module.exports = ContentExtractor;