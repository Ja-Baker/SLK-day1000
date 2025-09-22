#!/usr/bin/env node

/**
 * Simple SLK Content Verification Tool
 * Direct text comparison between markdown source and HTML content
 * No external dependencies required
 */

const fs = require('fs');
const path = require('path');

class SimpleVerifier {
    constructor() {
        this.extractedDir = path.join(__dirname, '../extracted-content');
        this.indexPath = path.join(__dirname, '../index.html');
        this.sourceMarkdown = '/mnt/c/Users/insti/Downloads/SLK Modular Therapy Curriculum (1).md';
        this.findings = [];
    }

    async verify() {
        console.log('🔍 Starting simple content verification...');

        try {
            // Load source data
            const markdownContent = fs.readFileSync(this.sourceMarkdown, 'utf8');
            const htmlContent = fs.readFileSync(this.indexPath, 'utf8');

            console.log('📋 Verifying Early Interactions page...');
            await this.verifyEarlyInteractions(markdownContent, htmlContent);

            // Generate report
            await this.generateReport();

            console.log('✅ Verification complete!');
            console.log(`📊 Found ${this.findings.length} findings`);

        } catch (error) {
            console.error('❌ Verification failed:', error.message);
            throw error;
        }
    }

    async verifyEarlyInteractions(markdownContent, htmlContent) {
        console.log('🔍 PAGE 14 VERIFICATION: Early Interactions Curriculum');

        // Extract markdown content for Page 14
        const markdownSection = this.extractMarkdownSection(markdownContent, 'Page 14: Early Interactions Curriculum');
        const htmlSection = this.extractHTMLSection(htmlContent, 'earlyInteractions');

        // Compare main title
        const markdownTitle = 'Early Interactions Curriculum';
        const htmlTitleMatch = htmlContent.match(/<h2>(.+?)<\/h2>/);
        const htmlTitle = htmlTitleMatch ? htmlTitleMatch[1] : null;

        this.compareField('Page 14', 'Title', markdownTitle, htmlTitle);

        // Extract and compare description
        const markdownDesc = this.extractMarkdownDescription(markdownSection);
        const htmlDesc = this.extractHTMLDescription(htmlSection);

        this.compareField('Page 14', 'Description', markdownDesc, htmlDesc);

        // Compare levels
        this.compareLevels(markdownSection, htmlSection);
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

    extractHTMLSection(content, elementId) {
        const regex = new RegExp(`<div id="${elementId}"[^>]*>([\\s\\S]*?)<\/div>(?=\\s*<div id="[^"]*" class="page")`, 'm');
        const match = content.match(regex);
        return match ? match[1] : '';
    }

    extractMarkdownDescription(markdownSection) {
        const lines = markdownSection.split('\n');

        // Find the description line (starts with "This curriculum will")
        const descLine = lines.find(line => line.trim().startsWith('This curriculum will'));
        return descLine ? descLine.trim() : null;
    }

    extractHTMLDescription(htmlSection) {
        const pMatch = htmlSection.match(/<p>([^<]+)<\/p>/);
        return pMatch ? pMatch[1].trim() : null;
    }

    compareLevels(markdownSection, htmlSection) {
        const levels = ['Beginner', 'Intermediate', 'Advanced'];

        levels.forEach(level => {
            // Extract markdown level info
            const levelPattern = new RegExp(`\\*\\*${level} Level:\\*\\*([\\s\\S]*?)(?=\\*\\*(?:Intermediate|Advanced|Sample) Level:|\\<JACK:|$)`, 'm');
            const markdownLevelMatch = markdownSection.match(levelPattern);

            if (markdownLevelMatch) {
                const markdownLevelText = markdownLevelMatch[1].trim();

                // Extract level title
                const titleMatch = markdownLevelText.match(/\\*\\*([^*]+)\\*\\*/);
                const markdownLevelTitle = titleMatch ? titleMatch[1].trim() : null;

                // Extract age range
                const ageMatch = markdownLevelText.match(/\\(Ages: ([^)]+)\\)/);
                const markdownAgeRange = ageMatch ? `(Ages: ${ageMatch[1]})` : null;

                // Extract skills
                const skillLines = markdownLevelText.split('\n').filter(line => line.trim().startsWith('* '));
                const markdownSkills = skillLines.map(line => line.replace(/^\\* /, '').trim());

                // Compare with HTML
                const htmlLevelCard = this.extractHTMLLevelCard(htmlSection, level.toLowerCase());

                if (htmlLevelCard) {
                    // Compare title
                    const htmlTitleMatch = htmlLevelCard.match(/<h4>([^<]+)<\/h4>/);
                    const htmlTitle = htmlTitleMatch ? htmlTitleMatch[1] : null;
                    const expectedTitle = `${level} Level: ${markdownLevelTitle}`;

                    this.compareField(`Page 14 - ${level} Level`, 'Title', expectedTitle, htmlTitle);

                    // Compare age range
                    const htmlAgeMatch = htmlLevelCard.match(/<p class="age-range">([^<]+)<\/p>/);
                    const htmlAge = htmlAgeMatch ? htmlAgeMatch[1] : null;

                    this.compareField(`Page 14 - ${level} Level`, 'Age Range', markdownAgeRange, htmlAge);

                    // Compare skills
                    const htmlSkillMatches = htmlLevelCard.match(/<li>([^<]+)<\/li>/g);
                    const htmlSkills = htmlSkillMatches ? htmlSkillMatches.map(match => match.replace(/<\/?li>/g, '')) : [];

                    this.compareSkills(`Page 14 - ${level} Level`, markdownSkills, htmlSkills);
                }
            }
        });
    }

    extractHTMLLevelCard(htmlSection, level) {
        // Find the level card by looking for the level in the h4
        const regex = new RegExp(`<div class="level-card"[^>]*>([\\s\\S]*?<h4>[^<]*${level}[^<]*<\/h4>[\\s\\S]*?)<\/div>`, 'i');
        const match = htmlSection.match(regex);
        return match ? match[1] : null;
    }

    compareField(context, field, expected, actual) {
        if (expected === null && actual === null) return;

        if (expected !== actual) {
            this.findings.push({
                context,
                field,
                type: 'mismatch',
                expected,
                actual,
                match: false
            });
        } else {
            this.findings.push({
                context,
                field,
                type: 'match',
                expected,
                actual,
                match: true
            });
        }
    }

    compareSkills(context, expectedSkills, actualSkills) {
        // Clean skills for comparison
        const cleanExpected = expectedSkills.map(s => s.trim()).filter(Boolean);
        const cleanActual = actualSkills.map(s => s.trim()).filter(Boolean);

        const match = JSON.stringify(cleanExpected) === JSON.stringify(cleanActual);

        this.findings.push({
            context,
            field: 'Skills',
            type: match ? 'match' : 'mismatch',
            expected: cleanExpected,
            actual: cleanActual,
            match
        });
    }

    async generateReport() {
        const reportDir = path.join(__dirname, '../verification-reports');
        if (!fs.existsSync(reportDir)) {
            fs.mkdirSync(reportDir, { recursive: true });
        }

        // Generate markdown report
        const report = this.generateMarkdownReport();
        fs.writeFileSync(
            path.join(reportDir, 'simple-verification-report.md'),
            report
        );

        // Generate JSON report
        fs.writeFileSync(
            path.join(reportDir, 'simple-verification-data.json'),
            JSON.stringify(this.findings, null, 2)
        );

        console.log(`📁 Reports saved to: ${reportDir}`);
    }

    generateMarkdownReport() {
        const report = [];
        report.push('# SLK Simple Content Verification Report');
        report.push(`Generated: ${new Date().toISOString()}`);
        report.push(`Total Findings: ${this.findings.length}`);

        const mismatches = this.findings.filter(f => !f.match);
        const matches = this.findings.filter(f => f.match);

        report.push(`Mismatches: ${mismatches.length}`);
        report.push(`Matches: ${matches.length}\n`);

        if (mismatches.length === 0) {
            report.push('✅ **ALL CONTENT MATCHES!** No differences found.');
        } else {
            report.push('## ❌ DIFFERENCES FOUND:\n');

            mismatches.forEach((finding, index) => {
                report.push(`### ${index + 1}. ${finding.context} - ${finding.field}`);
                report.push('**MARKDOWN SAYS:**');
                report.push('```');
                report.push(typeof finding.expected === 'object' ?
                    JSON.stringify(finding.expected, null, 2) :
                    (finding.expected || 'null'));
                report.push('```');
                report.push('**HTML SAYS:**');
                report.push('```');
                report.push(typeof finding.actual === 'object' ?
                    JSON.stringify(finding.actual, null, 2) :
                    (finding.actual || 'null'));
                report.push('```\n');
            });
        }

        if (matches.length > 0) {
            report.push('## ✅ CONFIRMED MATCHES:\n');
            matches.forEach((finding, index) => {
                report.push(`${index + 1}. ${finding.context} - ${finding.field}: ✓`);
            });
        }

        return report.join('\n');
    }
}

// Run verification if called directly
if (require.main === module) {
    const verifier = new SimpleVerifier();
    verifier.verify().catch(console.error);
}

module.exports = SimpleVerifier;