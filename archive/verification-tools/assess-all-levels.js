#!/usr/bin/env node

/**
 * Comprehensive Assessment of ALL Level Content
 * Checks all 29 curriculum pages x 3 levels = 87 levels for AI-generated content
 */

const fs = require('fs');
const path = require('path');

class ComprehensiveLevelAssessor {
    constructor() {
        this.sourceMarkdown = '/mnt/c/Users/insti/Downloads/SLK Modular Therapy Curriculum (1).md';
        this.indexPath = path.join(__dirname, '../index.html');
        this.summary = {
            totalLevels: 0,
            levelsChecked: 0,
            levelsWithContent: 0,
            levelsWithAIContent: 0,
            levelsMissingContent: 0,
            pagesAnalyzed: []
        };
    }

    async assess() {
        console.log('🔍 Starting comprehensive assessment of ALL curriculum level content...');
        console.log('📊 Checking 29 curriculum pages × 3 levels = 87 total levels\n');

        const markdownContent = fs.readFileSync(this.sourceMarkdown, 'utf8');
        const htmlContent = fs.readFileSync(this.indexPath, 'utf8');

        // List of curriculum pages to check (14-42)
        const curriculumPages = [
            { page: 14, id: 'earlyInteractions', name: 'Early Interactions' },
            { page: 15, id: 'analyticLanguage', name: 'Analytic Language Processor' },
            { page: 16, id: 'gestaltLanguage', name: 'Gestalt Language Processor' },
            { page: 17, id: 'aacCurriculum', name: 'AAC' },
            { page: 18, id: 'articulation', name: 'Articulation' },
            { page: 19, id: 'phonology', name: 'Phonology' },
            { page: 20, id: 'motorSpeech', name: 'Motor Speech' },
            { page: 21, id: 'mumbling', name: 'Mumbling' },
            { page: 22, id: 'cyclesPhonology', name: 'Cycles Phonology' },
            { page: 23, id: 'followingDirections', name: 'Following Directions' },
            { page: 24, id: 'askingAnswering', name: 'Asking and Answering Questions' },
            { page: 25, id: 'sequencing', name: 'Sequencing' },
            { page: 26, id: 'abstractLanguage', name: 'Abstract Language' },
            { page: 27, id: 'grammarSyntax', name: 'Grammar/Syntax' },
            { page: 28, id: 'vocabulary', name: 'Vocabulary' },
            { page: 29, id: 'literacyFoundations', name: 'Literacy Foundations' },
            { page: 30, id: 'narratives', name: 'Narratives' },
            { page: 31, id: 'socialCommunication', name: 'Social Communication' },
            { page: 32, id: 'pragmatics', name: 'Pragmatics' },
            { page: 33, id: 'executiveFunctioning', name: 'Executive Functioning' },
            { page: 34, id: 'cluttering', name: 'Cluttering' },
            { page: 35, id: 'fluency', name: 'Fluency' },
            { page: 36, id: 'emotionalRegulation', name: 'Emotional Regulation and Self Advocacy' },
            { page: 37, id: 'voice', name: 'Voice' },
            { page: 38, id: 'resonance', name: 'Resonance' },
            { page: 39, id: 'hearingLoss', name: 'Hearing Loss' },
            { page: 40, id: 'autism', name: 'Autism' },
            { page: 41, id: 'downSyndrome', name: 'Down Syndrome' },
            { page: 42, id: 'cerebralPalsy', name: 'Cerebral Palsy' }
        ];

        // Check ALL curriculum pages to get complete picture
        for (const pageInfo of curriculumPages) {
            console.log(`📋 Checking Page ${pageInfo.page}: ${pageInfo.name}...`);
            await this.assessPage(pageInfo, markdownContent, htmlContent);
        }

        await this.generateSummaryReport();
        console.log('\n✅ Assessment complete!');
    }

    async assessPage(pageInfo, markdownContent, htmlContent) {
        const pageAnalysis = {
            page: pageInfo.page,
            name: pageInfo.name,
            id: pageInfo.id,
            levels: []
        };

        const levels = ['beginner', 'intermediate', 'advanced'];

        for (const level of levels) {
            this.summary.totalLevels++;

            const levelAnalysis = await this.assessLevel(
                pageInfo,
                level,
                markdownContent,
                htmlContent
            );

            pageAnalysis.levels.push(levelAnalysis);
            this.summary.levelsChecked++;

            if (levelAnalysis.hasContent) {
                this.summary.levelsWithContent++;
            }

            if (levelAnalysis.hasAIContent) {
                this.summary.levelsWithAIContent++;
            }

            if (levelAnalysis.missingContent) {
                this.summary.levelsMissingContent++;
            }
        }

        this.summary.pagesAnalyzed.push(pageAnalysis);
    }

    async assessLevel(pageInfo, level, markdownContent, htmlContent) {
        // Extract markdown content for this level
        const markdownSection = this.extractMarkdownSection(
            markdownContent,
            `Page ${pageInfo.page}:`
        );

        const markdownLevel = this.extractMarkdownLevel(markdownSection, level);

        // Check if HTML element exists
        const htmlLevelId = `${pageInfo.id}-${level}`;
        const hasHTMLElement = htmlContent.includes(`id="${htmlLevelId}"`);

        if (!hasHTMLElement) {
            return {
                level: level,
                hasContent: false,
                hasAIContent: false,
                missingContent: true,
                issue: 'No HTML element found'
            };
        }

        // Extract HTML content for this level
        const htmlLevel = this.extractHTMLLevel(htmlContent, pageInfo.id, level);

        // Compare descriptions
        const isAIGenerated = this.checkIfAIGenerated(markdownLevel, htmlLevel);

        return {
            level: level,
            hasContent: true,
            hasAIContent: isAIGenerated,
            missingContent: false,
            markdownDescription: markdownLevel?.description?.substring(0, 100) + '...',
            htmlDescription: htmlLevel?.description?.substring(0, 100) + '...',
            match: !isAIGenerated
        };
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

    extractMarkdownLevel(section, level) {
        if (!section) return null;

        const levelNames = {
            'beginner': 'Beginner Level',
            'intermediate': 'Intermediate Level',
            'advanced': 'Advanced Level'
        };

        const levelName = levelNames[level];
        const lines = section.split('\n');

        const startIndex = lines.findIndex(line =>
            line.includes(`#### ${levelName}:`)
        );

        if (startIndex === -1) return null;

        const endIndex = lines.findIndex((line, index) =>
            index > startIndex && line.match(/^#### (Beginner|Intermediate|Advanced) Level:/)
        );

        const levelContent = lines.slice(
            startIndex,
            endIndex === -1 ? undefined : endIndex
        ).join('\n');

        // Extract description paragraph
        const descMatch = levelContent.match(/^(?!#)(?!\*\*)(?!\|).+$/m);
        const description = descMatch ? descMatch[0].trim() : null;

        return { description };
    }

    extractHTMLLevel(htmlContent, pageId, level) {
        const levelRegex = new RegExp(
            `<div id="${pageId}-${level}"[\\s\\S]*?<\\/div>\\s*(?=<div id="${pageId}-|<div id="[^"]*" class="page")`,
            'i'
        );
        const match = htmlContent.match(levelRegex);

        if (!match) return null;

        const levelContent = match[0];

        // Extract first paragraph as description
        const pMatch = levelContent.match(/<p>([^<]+?)<\/p>/);
        const description = pMatch ? pMatch[1].trim() : null;

        return { description };
    }

    checkIfAIGenerated(markdownLevel, htmlLevel) {
        if (!markdownLevel || !htmlLevel) return false;

        if (!markdownLevel.description || !htmlLevel.description) return false;

        // Normalize for comparison
        const mdNorm = markdownLevel.description.toLowerCase().replace(/\s+/g, ' ').trim();
        const htmlNorm = htmlLevel.description.toLowerCase().replace(/\s+/g, ' ').trim();

        // If descriptions are significantly different, it's likely AI-generated
        return mdNorm !== htmlNorm && mdNorm.substring(0, 50) !== htmlNorm.substring(0, 50);
    }

    async generateSummaryReport() {
        const reportDir = path.join(__dirname, '../verification-reports');
        if (!fs.existsSync(reportDir)) {
            fs.mkdirSync(reportDir, { recursive: true });
        }

        const report = [];
        report.push('# Comprehensive Level Content Assessment');
        report.push(`Generated: ${new Date().toISOString()}\n`);

        report.push('## Executive Summary');
        report.push(`- **Total Levels to Check:** 87 (29 pages × 3 levels)`);
        report.push(`- **Levels Analyzed:** ${this.summary.levelsChecked}`);
        report.push(`- **Levels with Content:** ${this.summary.levelsWithContent}`);
        report.push(`- **Levels with AI-Generated Content:** ${this.summary.levelsWithAIContent}`);
        report.push(`- **Levels Missing Content:** ${this.summary.levelsMissingContent}\n`);

        const percentAI = Math.round((this.summary.levelsWithAIContent / this.summary.levelsChecked) * 100);
        report.push(`### 🚨 **${percentAI}% of checked levels contain AI-generated content!**\n`);

        report.push('## Page-by-Page Analysis\n');

        for (const page of this.summary.pagesAnalyzed) {
            const aiCount = page.levels.filter(l => l.hasAIContent).length;
            const emoji = aiCount === 0 ? '✅' : aiCount === 3 ? '🚨' : '⚠️';

            report.push(`### ${emoji} Page ${page.page}: ${page.name}`);
            report.push(`**HTML ID:** \`${page.id}\``);

            for (const level of page.levels) {
                const levelEmoji = level.hasAIContent ? '❌' : level.hasContent ? '✅' : '⬜';
                report.push(`- **${level.level} level:** ${levelEmoji} ${
                    level.hasAIContent ? 'AI-generated content' :
                    level.hasContent ? 'Content matches' :
                    'Missing content'
                }`);

                if (level.hasAIContent) {
                    report.push(`  - Markdown: "${level.markdownDescription}"`);
                    report.push(`  - HTML: "${level.htmlDescription}"`);
                }
            }
            report.push('');
        }

        report.push('## Recommendations\n');
        report.push('1. **URGENT:** Replace all AI-generated level descriptions with exact markdown text');
        report.push('2. **HIGH PRIORITY:** Fix all sample goals to match markdown format');
        report.push('3. **MEDIUM PRIORITY:** Verify all rubrics match markdown tables');
        report.push('4. **REQUIRED:** Add missing therapy activity buttons with correct links');

        fs.writeFileSync(
            path.join(reportDir, 'comprehensive-level-assessment.md'),
            report.join('\n')
        );

        fs.writeFileSync(
            path.join(reportDir, 'level-assessment-data.json'),
            JSON.stringify(this.summary, null, 2)
        );

        console.log(`\n📁 Assessment reports saved to: ${reportDir}`);
        console.log(`\n🚨 CRITICAL: ${percentAI}% of levels contain AI-generated content!`);
    }
}

// Run assessment if called directly
if (require.main === module) {
    const assessor = new ComprehensiveLevelAssessor();
    assessor.assess().catch(console.error);
}

module.exports = ComprehensiveLevelAssessor;