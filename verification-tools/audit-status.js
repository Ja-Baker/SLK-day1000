#!/usr/bin/env node

/**
 * Comprehensive audit of SLK curriculum content status
 * Maps what exists vs what needs to be created
 */

const fs = require('fs');
const path = require('path');

class ContentAuditor {
    constructor() {
        this.sourceMarkdown = '/mnt/c/Users/insti/Downloads/SLK Modular Therapy Curriculum (1).md';
        this.indexPath = path.join(__dirname, '../index.html');
        this.findings = [];
    }

    async audit() {
        console.log('🔍 Starting comprehensive content audit...');

        const markdownContent = fs.readFileSync(this.sourceMarkdown, 'utf8');
        const htmlContent = fs.readFileSync(this.indexPath, 'utf8');

        // Extract all curriculum pages from markdown
        const markdownPages = this.extractAllCurriculumPages(markdownContent);

        // Extract all existing HTML pages
        const htmlPages = this.extractAllHTMLPages(htmlContent);

        console.log(`📋 Found ${markdownPages.length} curriculum pages in markdown`);
        console.log(`📋 Found ${htmlPages.length} pages in HTML`);

        // Analyze each markdown page
        for (const mdPage of markdownPages) {
            this.analyzePageStatus(mdPage, htmlPages);
        }

        await this.generateReport();
        console.log('✅ Audit complete!');
    }

    extractAllCurriculumPages(content) {
        const pages = [];
        const lines = content.split('\n');

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const match = line.match(/^### Page (\d+): (.+?)( \{#(.+?)\})?$/);

            if (match && parseInt(match[1]) >= 14 && parseInt(match[1]) <= 42) {
                const pageContent = this.extractPageContent(lines, i);
                pages.push({
                    number: parseInt(match[1]),
                    title: match[2],
                    id: match[4] || `page${match[1]}`,
                    content: pageContent,
                    lineNumber: i + 1
                });
            }
        }

        return pages;
    }

    extractPageContent(lines, startIndex) {
        const endIndex = lines.findIndex((line, index) =>
            index > startIndex && line.match(/^### Page \d+:/)
        );

        return lines.slice(startIndex, endIndex === -1 ? undefined : endIndex).join('\n');
    }

    extractAllHTMLPages(content) {
        const pages = [];
        const regex = /<div id="([^"]+)" class="page"[^>]*>/g;
        let match;

        while ((match = regex.exec(content)) !== null) {
            const pageId = match[1];
            const pageContent = this.extractHTMLPageContent(content, pageId);

            // Extract title
            const titleMatch = pageContent.match(/<h2>([^<]+)<\/h2>/);
            const title = titleMatch ? titleMatch[1] : null;

            pages.push({
                id: pageId,
                title: title,
                content: pageContent
            });
        }

        return pages;
    }

    extractHTMLPageContent(content, pageId) {
        const regex = new RegExp(`<div id="${pageId}" class="page"[^>]*>([\\s\\S]*?)<\/div>(?=\\s*(?:<div id="[^"]*" class="page"|$))`, 'i');
        const match = content.match(regex);
        return match ? match[1] : '';
    }

    analyzePageStatus(mdPage, htmlPages) {
        // Try to find matching HTML page
        const htmlPage = this.findMatchingHTMLPage(mdPage, htmlPages);

        const status = {
            pageNumber: mdPage.number,
            markdownTitle: mdPage.title,
            htmlId: htmlPage ? htmlPage.id : null,
            htmlTitle: htmlPage ? htmlPage.title : null,
            status: 'unknown',
            issues: [],
            recommendations: []
        };

        if (!htmlPage) {
            status.status = 'missing';
            status.issues.push('No HTML page found');
            status.recommendations.push('Create new curriculum page from markdown');
        } else {
            // Check title match
            if (mdPage.title === htmlPage.title) {
                status.status = 'verified';
            } else {
                status.status = 'needs_attention';
                status.issues.push(`Title mismatch: "${htmlPage.title}" vs "${mdPage.title}"`);
                status.recommendations.push('Update HTML title to match markdown');
            }

            // Check for curriculum structure (levels, etc.)
            if (this.hasCurriculumStructure(mdPage.content)) {
                if (!this.hasCurriculumStructure(htmlPage.content)) {
                    status.issues.push('Missing curriculum structure (levels, skills, goals)');
                    status.recommendations.push('Add complete curriculum structure');
                    if (status.status === 'verified') status.status = 'needs_attention';
                }
            }
        }

        this.findings.push(status);
    }

    findMatchingHTMLPage(mdPage, htmlPages) {
        // Try exact title match first
        let match = htmlPages.find(hp => hp.title === mdPage.title);
        if (match) return match;

        // Try partial title match
        match = htmlPages.find(hp =>
            hp.title && mdPage.title &&
            hp.title.toLowerCase().includes(mdPage.title.toLowerCase().split(' ')[0])
        );
        if (match) return match;

        // Try common ID patterns
        const commonIds = [
            mdPage.title.toLowerCase().replace(/\s+/g, '').replace(/[^a-z]/g, ''),
            mdPage.title.toLowerCase().replace(/\s+curriculum.*$/i, '').replace(/\s+/g, ''),
            mdPage.title.toLowerCase().replace(/curriculum.*$/i, '').trim().replace(/\s+/g, '')
        ];

        for (const id of commonIds) {
            match = htmlPages.find(hp => hp.id === id);
            if (match) return match;
        }

        return null;
    }

    hasCurriculumStructure(content) {
        return content.includes('Beginner Level') ||
               content.includes('Intermediate Level') ||
               content.includes('Advanced Level') ||
               content.includes('Sample Goal');
    }

    async generateReport() {
        const reportDir = path.join(__dirname, '../verification-reports');
        if (!fs.existsSync(reportDir)) {
            fs.mkdirSync(reportDir, { recursive: true });
        }

        // Generate comprehensive report
        const report = this.generateComprehensiveReport();
        fs.writeFileSync(
            path.join(reportDir, 'comprehensive-audit.md'),
            report
        );

        // Generate JSON data
        fs.writeFileSync(
            path.join(reportDir, 'audit-data.json'),
            JSON.stringify(this.findings, null, 2)
        );

        console.log(`📁 Audit reports saved to: ${reportDir}`);
    }

    generateComprehensiveReport() {
        const report = [];
        report.push('# SLK Comprehensive Content Audit');
        report.push(`Generated: ${new Date().toISOString()}`);
        report.push(`Total Curriculum Pages: ${this.findings.length}\n`);

        // Status summary
        const statusCounts = {};
        this.findings.forEach(f => {
            statusCounts[f.status] = (statusCounts[f.status] || 0) + 1;
        });

        report.push('## Status Summary');
        Object.entries(statusCounts).forEach(([status, count]) => {
            const emoji = this.getStatusEmoji(status);
            report.push(`- ${emoji} **${status.replace(/_/g, ' ')}**: ${count} pages`);
        });

        // Detailed findings
        report.push('\n## Detailed Analysis\n');

        this.findings.forEach(finding => {
            const emoji = this.getStatusEmoji(finding.status);
            report.push(`### ${emoji} Page ${finding.pageNumber}: ${finding.markdownTitle}`);

            if (finding.htmlId) {
                report.push(`**HTML ID:** \`${finding.htmlId}\``);
                report.push(`**HTML Title:** "${finding.htmlTitle}"`);
            }

            report.push(`**Status:** ${finding.status}`);

            if (finding.issues.length > 0) {
                report.push('**Issues:**');
                finding.issues.forEach(issue => report.push(`- ${issue}`));
            }

            if (finding.recommendations.length > 0) {
                report.push('**Recommendations:**');
                finding.recommendations.forEach(rec => report.push(`- ${rec}`));
            }

            report.push('');
        });

        return report.join('\n');
    }

    getStatusEmoji(status) {
        const emojis = {
            'verified': '✅',
            'needs_attention': '⚠️',
            'missing': '🚫',
            'unknown': '❓'
        };
        return emojis[status] || '❓';
    }
}

// Run audit if called directly
if (require.main === module) {
    const auditor = new ContentAuditor();
    auditor.audit().catch(console.error);
}

module.exports = ContentAuditor;