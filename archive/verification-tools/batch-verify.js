#!/usr/bin/env node

/**
 * Batch Content Verification Tool
 * Systematically verifies all curriculum pages (14-42) against markdown source
 */

const fs = require('fs');
const path = require('path');

class BatchVerifier {
    constructor() {
        this.sourceMarkdown = '/mnt/c/Users/insti/Downloads/SLK Modular Therapy Curriculum (1).md';
        this.indexPath = path.join(__dirname, '../index.html');
        this.results = [];

        // Page mapping corrected from markdown source
        this.pageMapping = {
            14: { id: 'earlyInteractions', title: 'Early Interactions Curriculum' },
            15: { id: 'analyticLanguage', title: 'Analytic Language Processor Curriculum' },
            16: { id: 'gestaltLanguage', title: 'Gestalt Language Processor Curriculum' },
            17: { id: 'aacCurriculum', title: 'AAC Curriculum' },
            18: { id: 'cyclesSpeechSounds', title: 'Cycles Approach to Speech Sounds Curriculum' },
            19: { id: 'articulationCurriculum', title: 'Articulation Curriculum' },
            20: { id: 'phonologyCurriculum', title: 'Phonology Curriculum' },
            21: { id: 'motorSpeechCurriculum', title: 'Motor Speech Curriculum' },
            22: { id: 'mumblingCurriculum', title: 'Mumbling Curriculum' },
            23: { id: 'followingDirections', title: 'Following Directions Curriculum' },
            24: { id: 'askingAnsweringQuestions', title: 'Asking and Answering Questions Curriculum' },
            25: { id: 'cyclesLanguageCurriculum', title: 'Cycles Approach to Language Curriculum' },
            26: { id: 'sequencingRetelling', title: 'Sequencing & Retelling Curriculum' },
            27: { id: 'grammarSentence', title: 'Grammar & Sentence Complexity Curriculum' },
            28: { id: 'foundationsLiteracy', title: 'Foundations for Literacy Curriculum' },
            29: { id: 'abstractLanguage', title: 'Abstract Language Curriculum' },
            30: { id: 'narrativeLanguage', title: 'Narrative Language Curriculum' },
            31: { id: 'pragmaticLanguage', title: 'Pragmatic Language Curriculum' },
            32: { id: 'executiveFunctioning', title: 'Executive Functioning Curriculum' },
            33: { id: 'selfAdvocacy', title: 'Self-Advocacy Curriculum' },
            11: { id: 'voiceResonance', title: 'Let\'s Work on Voice/Resonance' },
            35: { id: 'fluencyCurriculum', title: 'Fluency Curriculum' },
            36: { id: 'feedingEating', title: 'Feeding and Eating Curriculum' },
            37: { id: 'oralMotorCurriculum', title: 'Oral Motor Curriculum' },
            38: { id: 'languageDisorder', title: 'Language Disorder Curriculum' },
            39: { id: 'hearingImpairment', title: 'Hearing Impairment Curriculum' },
            40: { id: 'autismCurriculum', title: 'Autism Curriculum' },
            41: { id: 'downSyndrome', title: 'Down Syndrome Curriculum' },
            42: { id: 'cerebralPalsy', title: 'Cerebral Palsy Curriculum' }
        };
    }

    async verifyAll() {
        console.log('🚀 Starting batch verification of all curriculum pages...');

        try {
            const markdownContent = fs.readFileSync(this.sourceMarkdown, 'utf8');
            const htmlContent = fs.readFileSync(this.indexPath, 'utf8');

            // Process pages 14-42
            for (let pageNum = 14; pageNum <= 42; pageNum++) {
                const pageInfo = this.pageMapping[pageNum];
                if (pageInfo) {
                    console.log(`🔍 Verifying Page ${pageNum}: ${pageInfo.title}`);
                    await this.verifyPage(pageNum, pageInfo, markdownContent, htmlContent);
                }
            }

            await this.generateSummaryReport();

            console.log('✅ Batch verification complete!');
            console.log(`📊 Checked ${this.results.length} pages`);

        } catch (error) {
            console.error('❌ Batch verification failed:', error.message);
            throw error;
        }
    }

    async verifyPage(pageNum, pageInfo, markdownContent, htmlContent) {
        const result = {
            pageNumber: pageNum,
            pageId: pageInfo.id,
            title: pageInfo.title,
            status: 'checking',
            issues: [],
            hasHTMLElement: false,
            titleMatch: false,
            descriptionMatch: false,
            timestamp: new Date().toISOString()
        };

        // Check if HTML element exists
        const htmlElementRegex = new RegExp(`<div id="${pageInfo.id}"[^>]*class="page"`, 'i');
        result.hasHTMLElement = htmlElementRegex.test(htmlContent);

        if (!result.hasHTMLElement) {
            result.issues.push(`Missing HTML element with id="${pageInfo.id}"`);
            result.status = 'missing';
            this.results.push(result);
            return;
        }

        // Extract markdown section for this page
        const markdownSection = this.extractMarkdownPage(markdownContent, pageNum);
        if (!markdownSection) {
            result.issues.push('Could not find corresponding markdown section');
            result.status = 'error';
            this.results.push(result);
            return;
        }

        // Extract HTML section
        const htmlSection = this.extractHTMLSection(htmlContent, pageInfo.id);

        // Check title
        const markdownTitleMatch = markdownSection.match(/^\*\*(.+?)\*\*$/m);
        const markdownTitle = markdownTitleMatch ? markdownTitleMatch[1] : pageInfo.title;

        const htmlTitleMatch = htmlSection.match(/<h2>(.+?)<\/h2>/);
        const htmlTitle = htmlTitleMatch ? htmlTitleMatch[1] : null;

        result.titleMatch = markdownTitle === htmlTitle;
        if (!result.titleMatch) {
            result.issues.push(`Title mismatch: "${htmlTitle}" vs "${markdownTitle}"`);
        }

        // Check description
        const markdownDescMatch = markdownSection.match(/This curriculum will[^.]+\./);
        const markdownDesc = markdownDescMatch ? markdownDescMatch[0] : null;

        const htmlDescMatch = htmlSection.match(/<p>([^<]+)<\/p>/);
        const htmlDesc = htmlDescMatch ? htmlDescMatch[1] : null;

        if (markdownDesc && htmlDesc) {
            // Normalize whitespace for comparison
            const normalizedMarkdown = markdownDesc.replace(/\s+/g, ' ').trim();
            const normalizedHTML = htmlDesc.replace(/\s+/g, ' ').trim();
            result.descriptionMatch = normalizedMarkdown === normalizedHTML;

            if (!result.descriptionMatch) {
                result.issues.push('Description text differs');
            }
        }

        // Determine overall status
        if (result.issues.length === 0) {
            result.status = 'verified';
        } else if (result.hasHTMLElement && result.titleMatch) {
            result.status = 'minor_issues';
        } else {
            result.status = 'needs_attention';
        }

        this.results.push(result);
    }

    extractMarkdownPage(content, pageNum) {
        const lines = content.split('\n');
        const startPattern = new RegExp(`^### Page ${pageNum}:`);
        const startIndex = lines.findIndex(line => startPattern.test(line));

        if (startIndex === -1) return null;

        const endIndex = lines.findIndex((line, index) =>
            index > startIndex && line.match(/^### Page \d+:/)
        );

        return lines.slice(startIndex, endIndex === -1 ? undefined : endIndex).join('\n');
    }

    extractHTMLSection(content, elementId) {
        const regex = new RegExp(`<div id="${elementId}"[^>]*class="page"[^>]*>([\\s\\S]*?)<\/div>(?=\\s*<div id="[^"]*" class="page")`, 'i');
        const match = content.match(regex);
        return match ? match[1] : '';
    }

    async generateSummaryReport() {
        const reportDir = path.join(__dirname, '../verification-reports');
        if (!fs.existsSync(reportDir)) {
            fs.mkdirSync(reportDir, { recursive: true });
        }

        // Count statuses
        const statusCounts = {};
        this.results.forEach(result => {
            statusCounts[result.status] = (statusCounts[result.status] || 0) + 1;
        });

        // Generate markdown report
        const report = [];
        report.push('# SLK Batch Verification Summary');
        report.push(`Generated: ${new Date().toISOString()}`);
        report.push(`Total Pages Checked: ${this.results.length}\n`);

        report.push('## Status Overview');
        Object.entries(statusCounts).forEach(([status, count]) => {
            const emoji = this.getStatusEmoji(status);
            report.push(`- ${emoji} **${status.replace(/_/g, ' ')}**: ${count} pages`);
        });

        report.push('\n## Page-by-Page Results\n');

        this.results.forEach(result => {
            const emoji = this.getStatusEmoji(result.status);
            report.push(`### ${emoji} Page ${result.pageNumber}: ${result.title}`);
            report.push(`**Status:** ${result.status}`);
            report.push(`**HTML ID:** \`${result.pageId}\``);

            if (result.issues.length > 0) {
                report.push('**Issues:**');
                result.issues.forEach(issue => {
                    report.push(`- ${issue}`);
                });
            }
            report.push('');
        });

        // Save reports
        fs.writeFileSync(
            path.join(reportDir, 'batch-verification-summary.md'),
            report.join('\n')
        );

        fs.writeFileSync(
            path.join(reportDir, 'batch-verification-data.json'),
            JSON.stringify(this.results, null, 2)
        );

        console.log(`📁 Summary reports saved to: ${reportDir}`);
    }

    getStatusEmoji(status) {
        const emojis = {
            'verified': '✅',
            'minor_issues': '⚠️',
            'needs_attention': '❌',
            'missing': '🚫',
            'error': '💥',
            'checking': '🔍'
        };
        return emojis[status] || '❓';
    }
}

// Run verification if called directly
if (require.main === module) {
    const verifier = new BatchVerifier();
    verifier.verifyAll().catch(console.error);
}

module.exports = BatchVerifier;