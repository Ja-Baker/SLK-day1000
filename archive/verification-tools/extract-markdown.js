#!/usr/bin/env node

/**
 * SLK Curriculum Content Extraction Tool
 * Parses the source markdown document and extracts structured content
 * for verification against the current HTML implementation
 */

const fs = require('fs');
const path = require('path');

// Source file path
const SOURCE_FILE = '/mnt/c/Users/insti/Downloads/SLK Modular Therapy Curriculum (1).md';
const OUTPUT_DIR = path.join(__dirname, '../extracted-content');

class MarkdownExtractor {
    constructor() {
        this.pages = new Map();
        this.currentPage = null;
        this.currentSection = null;
    }

    async extract() {
        try {
            console.log('📖 Reading source markdown file...');
            const content = fs.readFileSync(SOURCE_FILE, 'utf8');

            console.log('🔍 Parsing content...');
            this.parseContent(content);

            console.log('💾 Saving extracted data...');
            await this.saveResults();

            console.log('✅ Extraction complete!');
            console.log(`📊 Extracted ${this.pages.size} pages`);

        } catch (error) {
            console.error('❌ Extraction failed:', error.message);
            throw error;
        }
    }

    parseContent(content) {
        const lines = content.split('\n');
        let currentPageContent = [];

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            // Detect page headers
            if (line.match(/^### Page \d+:/)) {
                // Save previous page if exists
                if (this.currentPage) {
                    this.pages.set(this.currentPage.id, {
                        ...this.currentPage,
                        rawContent: currentPageContent.join('\n'),
                        lineNumber: this.currentPage.lineNumber
                    });
                }

                // Start new page
                const pageMatch = line.match(/^### Page (\d+): (.+?)( \{#(.+?)\})?$/);
                if (pageMatch) {
                    this.currentPage = {
                        id: pageMatch[4] || `page${pageMatch[1]}`,
                        number: parseInt(pageMatch[1]),
                        title: pageMatch[2],
                        lineNumber: i + 1,
                        sections: []
                    };
                    currentPageContent = [line];
                }
            } else if (this.currentPage) {
                currentPageContent.push(line);

                // Parse curriculum-specific content
                this.parseSpecialContent(line, i + 1);
            }
        }

        // Save final page
        if (this.currentPage) {
            this.pages.set(this.currentPage.id, {
                ...this.currentPage,
                rawContent: currentPageContent.join('\n'),
                lineNumber: this.currentPage.lineNumber
            });
        }
    }

    parseSpecialContent(line, lineNumber) {
        // Extract curriculum descriptions
        if (line.match(/^\*\*.*Curriculum\*\*$/)) {
            this.currentPage.curriculumTitle = line.replace(/\*\*/g, '');
        }

        // Extract main description
        if (line.match(/^This curriculum will/) || line.match(/^This is a/)) {
            this.currentPage.description = line;
        }

        // Extract level information
        if (line.match(/^\*\*Beginner Level:\*\*/) ||
            line.match(/^\*\*Intermediate Level:\*\*/) ||
            line.match(/^\*\*Advanced Level:\*\*/)) {

            this.currentSection = {
                type: 'level',
                level: line.includes('Beginner') ? 'beginner' :
                       line.includes('Intermediate') ? 'intermediate' : 'advanced',
                lineNumber: lineNumber
            };
            this.currentPage.sections.push(this.currentSection);
        }

        // Extract level titles and age ranges
        if (this.currentSection && line.match(/^\*\*.*\*\*$/) &&
            !line.includes('Level:') && !line.includes('Sample Goal:')) {
            this.currentSection.title = line.replace(/\*\*/g, '');
        }

        if (this.currentSection && line.match(/^\(Ages:/)) {
            this.currentSection.ageRange = line;
        }

        // Extract skills lists
        if (this.currentSection && line.match(/^\* /)) {
            if (!this.currentSection.skills) this.currentSection.skills = [];
            this.currentSection.skills.push(line.replace(/^\* /, ''));
        }

        // Extract sample goals
        if (line.match(/^\*\*Sample Goal:\*\*/)) {
            this.currentSection = { type: 'goal', lineNumber: lineNumber };
            this.currentPage.sections.push(this.currentSection);
        }

        if (this.currentSection && this.currentSection.type === 'goal' &&
            line.includes('____')) {
            this.currentSection.goalText = line;
        }
    }

    async saveResults() {
        // Ensure output directory exists
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        }

        // Convert Map to object for JSON serialization
        const pagesObject = Object.fromEntries(this.pages);

        // Save full extraction
        fs.writeFileSync(
            path.join(OUTPUT_DIR, 'extracted-pages.json'),
            JSON.stringify(pagesObject, null, 2)
        );

        // Save curriculum pages only (Pages 14-42)
        const curriculumPages = Object.fromEntries(
            Object.entries(pagesObject).filter(([id, page]) =>
                page.number >= 14 && page.number <= 42
            )
        );

        fs.writeFileSync(
            path.join(OUTPUT_DIR, 'curriculum-pages.json'),
            JSON.stringify(curriculumPages, null, 2)
        );

        // Generate summary report
        const summary = {
            totalPages: this.pages.size,
            curriculumPages: Object.keys(curriculumPages).length,
            extractedAt: new Date().toISOString(),
            sourceFile: SOURCE_FILE,
            pageNumbers: Array.from(this.pages.values()).map(p => p.number).sort((a, b) => a - b)
        };

        fs.writeFileSync(
            path.join(OUTPUT_DIR, 'extraction-summary.json'),
            JSON.stringify(summary, null, 2)
        );

        console.log(`📁 Results saved to: ${OUTPUT_DIR}`);
    }
}

// Run extraction if called directly
if (require.main === module) {
    const extractor = new MarkdownExtractor();
    extractor.extract().catch(console.error);
}

module.exports = MarkdownExtractor;