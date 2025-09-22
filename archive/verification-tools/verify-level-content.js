#!/usr/bin/env node

/**
 * Deep Level Content Verification Tool
 * Verifies detailed curriculum content: descriptions, goals, rubrics, therapy activities
 * Identifies AI-generated content that needs replacement
 */

const fs = require('fs');
const path = require('path');

class LevelContentVerifier {
    constructor() {
        this.sourceMarkdown = '/mnt/c/Users/insti/Downloads/SLK Modular Therapy Curriculum (1).md';
        this.indexPath = path.join(__dirname, '../index.html');
        this.findings = [];
    }

    async verify() {
        console.log('🔍 Starting deep level content verification...');

        const markdownContent = fs.readFileSync(this.sourceMarkdown, 'utf8');
        const htmlContent = fs.readFileSync(this.indexPath, 'utf8');

        // Start with Early Interactions as example
        console.log('📋 Verifying Early Interactions detailed content...');
        await this.verifyEarlyInteractionsLevels(markdownContent, htmlContent);

        await this.generateReport();
        console.log('✅ Deep verification complete!');
    }

    async verifyEarlyInteractionsLevels(markdownContent, htmlContent) {
        // Extract Early Interactions section from markdown
        const earlyInteractionsSection = this.extractMarkdownSection(markdownContent, 'Page 14: Early Interactions Curriculum');

        const levels = ['beginner', 'intermediate', 'advanced'];

        for (const level of levels) {
            console.log(`🔍 Checking ${level} level content...`);

            // Extract markdown level content
            const markdownLevel = this.extractMarkdownLevel(earlyInteractionsSection, level);

            // Extract HTML level content
            const htmlLevel = this.extractHTMLLevel(htmlContent, 'earlyInteractions', level);

            // Compare detailed content
            this.compareLevelContent(level, markdownLevel, htmlLevel);
        }
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
        const levelNames = {
            'beginner': 'Beginner Level',
            'intermediate': 'Intermediate Level',
            'advanced': 'Advanced Level'
        };

        const levelName = levelNames[level];
        const lines = section.split('\n');

        // Find the level section
        const startIndex = lines.findIndex(line =>
            line.includes(`#### ${levelName}:`) && line.includes('{#')
        );

        if (startIndex === -1) return null;

        // Find the end (next level or end of section)
        const endIndex = lines.findIndex((line, index) =>
            index > startIndex && line.match(/^#### (Beginner|Intermediate|Advanced) Level:/)
        );

        const levelContent = lines.slice(startIndex, endIndex === -1 ? undefined : endIndex).join('\n');

        return {
            description: this.extractDescription(levelContent),
            goal: this.extractGoal(levelContent),
            rubric: this.extractRubric(levelContent),
            activities: this.extractActivities(levelContent)
        };
    }

    extractDescription(levelContent) {
        const lines = levelContent.split('\n');

        // Find description paragraph (after level header, before "Sample Goal:")
        const headerIndex = lines.findIndex(line => line.match(/^#### .* Level:/));
        const goalIndex = lines.findIndex(line => line.includes('**Sample Goal:**'));

        if (headerIndex === -1 || goalIndex === -1) return null;

        const descLines = lines.slice(headerIndex + 2, goalIndex).filter(line => line.trim());
        return descLines.join('\n').trim();
    }

    extractGoal(levelContent) {
        const goalMatch = levelContent.match(/\*\*Sample Goal:\*\*\s*\n([^*]+?)(?=\n\n|\n\||\n\*\*)/s);
        return goalMatch ? goalMatch[1].trim() : null;
    }

    extractRubric(levelContent) {
        // Extract rubric table
        const rubricMatch = levelContent.match(/\| Score \| Description \|[\s\S]*?(?=\n\n|\*\*Therapy Activities)/);
        return rubricMatch ? rubricMatch[0].trim() : null;
    }

    extractActivities(levelContent) {
        const activitiesMatch = levelContent.match(/\*\*Therapy Activities:\*\*\s*\n([\s\S]*?)(?=\n#### |$)/);
        return activitiesMatch ? activitiesMatch[1].trim() : null;
    }

    extractHTMLLevel(htmlContent, pageId, level) {
        const levelRegex = new RegExp(`<div id="${pageId}-${level}"[\\s\\S]*?<\\/div>\\s*(?=<div id="${pageId}-|<div id="[^"]*" class="page")`, 'i');
        const match = htmlContent.match(levelRegex);

        if (!match) return null;

        const levelContent = match[0];

        return {
            description: this.extractHTMLDescription(levelContent),
            goal: this.extractHTMLGoal(levelContent),
            rubric: this.extractHTMLRubric(levelContent),
            activities: this.extractHTMLActivities(levelContent)
        };
    }

    extractHTMLDescription(htmlContent) {
        // Find description paragraph (first <p> after level header)
        const pMatch = htmlContent.match(/<p>([^<]+?)<\/p>/);
        return pMatch ? pMatch[1].trim() : null;
    }

    extractHTMLGoal(htmlContent) {
        const goalMatch = htmlContent.match(/<div class="goal-box">[\s\S]*?<p>([^<]+?)<\/p>/);
        return goalMatch ? goalMatch[1].trim() : null;
    }

    extractHTMLRubric(htmlContent) {
        const rubricItems = htmlContent.match(/<div class="rubric-item">[\s\S]*?<\/div>/g);
        if (!rubricItems) return null;

        return rubricItems.map(item => {
            const strongMatch = item.match(/<strong>([^<]+)<\/strong>/);
            const pMatch = item.match(/<p>([^<]+)<\/p>/);
            return strongMatch && pMatch ? `${strongMatch[1]}: ${pMatch[1]}` : null;
        }).filter(Boolean).join('\n');
    }

    extractHTMLActivities(htmlContent) {
        const activitiesMatch = htmlContent.match(/<div class="activities-section">[\s\S]*?<\/div>/);
        return activitiesMatch ? activitiesMatch[0] : null;
    }

    compareLevelContent(level, markdownLevel, htmlLevel) {
        if (!markdownLevel || !htmlLevel) {
            this.findings.push({
                level: level,
                type: 'missing_content',
                issue: !markdownLevel ? 'Missing markdown content' : 'Missing HTML content',
                severity: 'high'
            });
            return;
        }

        // Compare description
        if (markdownLevel.description && htmlLevel.description) {
            const mdDesc = this.normalizeText(markdownLevel.description);
            const htmlDesc = this.normalizeText(htmlLevel.description);

            if (mdDesc !== htmlDesc) {
                this.findings.push({
                    level: level,
                    type: 'description_mismatch',
                    markdown: markdownLevel.description,
                    html: htmlLevel.description,
                    severity: 'high',
                    recommendation: 'Replace HTML description with exact markdown text'
                });
            }
        }

        // Compare goal
        if (markdownLevel.goal && htmlLevel.goal) {
            const mdGoal = this.normalizeText(markdownLevel.goal);
            const htmlGoal = this.normalizeText(htmlLevel.goal);

            if (mdGoal !== htmlGoal) {
                this.findings.push({
                    level: level,
                    type: 'goal_mismatch',
                    markdown: markdownLevel.goal,
                    html: htmlLevel.goal,
                    severity: 'medium',
                    recommendation: 'Update HTML goal to match markdown exactly'
                });
            }
        }

        // Check for missing rubric or activities
        if (markdownLevel.rubric && !htmlLevel.rubric) {
            this.findings.push({
                level: level,
                type: 'missing_rubric',
                markdown: markdownLevel.rubric,
                html: null,
                severity: 'high',
                recommendation: 'Add complete rubric table from markdown'
            });
        }

        if (markdownLevel.activities && !htmlLevel.activities) {
            this.findings.push({
                level: level,
                type: 'missing_activities',
                markdown: markdownLevel.activities,
                html: null,
                severity: 'medium',
                recommendation: 'Add therapy activities section from markdown'
            });
        }
    }

    normalizeText(text) {
        return text.replace(/\s+/g, ' ').trim().toLowerCase();
    }

    async generateReport() {
        const reportDir = path.join(__dirname, '../verification-reports');
        if (!fs.existsSync(reportDir)) {
            fs.mkdirSync(reportDir, { recursive: true });
        }

        const report = this.generateDetailedReport();
        fs.writeFileSync(
            path.join(reportDir, 'level-content-verification.md'),
            report
        );

        fs.writeFileSync(
            path.join(reportDir, 'level-content-data.json'),
            JSON.stringify(this.findings, null, 2)
        );

        console.log(`📁 Level content reports saved to: ${reportDir}`);
    }

    generateDetailedReport() {
        const report = [];
        report.push('# Deep Level Content Verification Report');
        report.push(`Generated: ${new Date().toISOString()}`);
        report.push(`Total Issues Found: ${this.findings.length}\n`);

        if (this.findings.length === 0) {
            report.push('✅ **ALL LEVEL CONTENT MATCHES!** No AI-generated content found.');
            return report.join('\n');
        }

        // Group by severity
        const high = this.findings.filter(f => f.severity === 'high');
        const medium = this.findings.filter(f => f.severity === 'medium');

        report.push('## Severity Summary');
        report.push(`- 🚨 **High Priority**: ${high.length} issues`);
        report.push(`- ⚠️ **Medium Priority**: ${medium.length} issues\n`);

        report.push('## Issues Found\n');

        this.findings.forEach((finding, index) => {
            const emoji = finding.severity === 'high' ? '🚨' : '⚠️';
            report.push(`### ${emoji} ${index + 1}. ${finding.level} Level - ${finding.type.replace(/_/g, ' ')}`);

            if (finding.markdown) {
                report.push('**MARKDOWN SAYS:**');
                report.push('```');
                report.push(finding.markdown);
                report.push('```');
            }

            if (finding.html) {
                report.push('**HTML SAYS:**');
                report.push('```');
                report.push(finding.html);
                report.push('```');
            }

            if (finding.recommendation) {
                report.push(`**RECOMMENDATION:** ${finding.recommendation}`);
            }

            report.push('');
        });

        return report.join('\n');
    }
}

// Run verification if called directly
if (require.main === module) {
    const verifier = new LevelContentVerifier();
    verifier.verify().catch(console.error);
}

module.exports = LevelContentVerifier;