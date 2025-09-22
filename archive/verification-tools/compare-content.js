#!/usr/bin/env node

/**
 * SLK Content Comparison Tool
 * Compares extracted markdown content against current HTML implementation
 * Outputs detailed reports of differences for verification
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

class ContentComparer {
    constructor() {
        this.extractedDir = path.join(__dirname, '../extracted-content');
        this.indexPath = path.join(__dirname, '../index.html');
        this.differences = [];
    }

    async compare() {
        console.log('🔍 Starting content comparison...');

        try {
            // Load extracted data
            const extractedPages = JSON.parse(
                fs.readFileSync(path.join(this.extractedDir, 'extracted-pages.json'), 'utf8')
            );

            // Load HTML content
            const htmlContent = fs.readFileSync(this.indexPath, 'utf8');
            const dom = new JSDOM(htmlContent);
            const document = dom.window.document;

            console.log('📋 Comparing curriculum pages...');

            // Focus on curriculum pages first (14-42)
            const curriculumPages = Object.entries(extractedPages).filter(([id, page]) =>
                page.number >= 14 && page.number <= 42
            );

            for (const [pageId, extractedPage] of curriculumPages) {
                await this.comparePage(pageId, extractedPage, document);
            }

            // Generate report
            await this.generateReport();

            console.log('✅ Comparison complete!');
            console.log(`📊 Found ${this.differences.length} differences`);

        } catch (error) {
            console.error('❌ Comparison failed:', error.message);
            throw error;
        }
    }

    async comparePage(pageId, extractedPage, document) {
        console.log(`🔍 Checking Page ${extractedPage.number}: ${extractedPage.title}`);

        // Map markdown page IDs to HTML element IDs
        const htmlPageId = this.mapPageIdToHTML(pageId, extractedPage);
        const htmlElement = document.getElementById(htmlPageId);

        if (!htmlElement) {
            this.addDifference(pageId, extractedPage, 'missing_page', {
                message: `HTML page element not found for ID: ${htmlPageId}`,
                expected: pageId,
                actual: 'missing'
            });
            return;
        }

        // Compare title
        this.compareTitle(pageId, extractedPage, htmlElement);

        // Compare description
        this.compareDescription(pageId, extractedPage, htmlElement);

        // Compare levels and skills
        this.compareLevels(pageId, extractedPage, htmlElement);
    }

    mapPageIdToHTML(markdownId, extractedPage) {
        // Map markdown IDs to HTML element IDs based on known patterns
        const mapping = {
            'page-14:-early-interactions-curriculum': 'earlyInteractions',
            'page-15:-analytic-language-processor-curriculum': 'analyticLanguage',
            'page-16:-gestalt-language-processor-curriculum': 'gestaltLanguage',
            // Add more mappings as needed
        };

        return mapping[markdownId] || markdownId;
    }

    compareTitle(pageId, extractedPage, htmlElement) {
        const htmlTitle = htmlElement.querySelector('h2')?.textContent?.trim();
        const expectedTitle = extractedPage.title;

        if (htmlTitle !== expectedTitle) {
            this.addDifference(pageId, extractedPage, 'title_mismatch', {
                field: 'title',
                expected: expectedTitle,
                actual: htmlTitle
            });
        }
    }

    compareDescription(pageId, extractedPage, htmlElement) {
        // Extract description from first paragraph
        const htmlDesc = htmlElement.querySelector('p')?.textContent?.trim();

        // Extract expected description from markdown
        const expectedDesc = extractedPage.description;

        if (expectedDesc && htmlDesc !== expectedDesc) {
            this.addDifference(pageId, extractedPage, 'description_mismatch', {
                field: 'description',
                expected: expectedDesc,
                actual: htmlDesc
            });
        }
    }

    compareLevels(pageId, extractedPage, htmlElement) {
        const levels = ['beginner', 'intermediate', 'advanced'];

        for (const level of levels) {
            const extractedLevel = extractedPage.sections.find(s => s.level === level);
            if (!extractedLevel) continue;

            // Find corresponding HTML level element
            const htmlLevelCard = htmlElement.querySelector(`.level-card:nth-of-type(${levels.indexOf(level) + 1})`);

            if (!htmlLevelCard) {
                this.addDifference(pageId, extractedPage, 'missing_level', {
                    level: level,
                    expected: 'level card present',
                    actual: 'missing'
                });
                continue;
            }

            // Compare level title
            const htmlLevelTitle = htmlLevelCard.querySelector('h4')?.textContent?.trim();
            const expectedLevelTitle = `${this.capitalizeFirst(level)} Level: ${extractedLevel.title}`;

            if (htmlLevelTitle !== expectedLevelTitle) {
                this.addDifference(pageId, extractedPage, 'level_title_mismatch', {
                    level: level,
                    field: 'title',
                    expected: expectedLevelTitle,
                    actual: htmlLevelTitle
                });
            }

            // Compare age range
            const htmlAgeRange = htmlLevelCard.querySelector('.age-range')?.textContent?.trim();
            const expectedAgeRange = extractedLevel.ageRange?.trim() + (extractedLevel.ageRange?.includes('beyond') ? '' : '\nand beyond)');

            if (htmlAgeRange !== expectedAgeRange) {
                this.addDifference(pageId, extractedPage, 'age_range_mismatch', {
                    level: level,
                    field: 'ageRange',
                    expected: expectedAgeRange,
                    actual: htmlAgeRange
                });
            }

            // Compare skills
            const htmlSkills = Array.from(htmlLevelCard.querySelectorAll('li')).map(li => li.textContent.trim());
            const expectedSkills = extractedLevel.skills?.map(s => s.trim()) || [];

            if (JSON.stringify(htmlSkills) !== JSON.stringify(expectedSkills)) {
                this.addDifference(pageId, extractedPage, 'skills_mismatch', {
                    level: level,
                    field: 'skills',
                    expected: expectedSkills,
                    actual: htmlSkills
                });
            }
        }
    }

    addDifference(pageId, extractedPage, type, details) {
        this.differences.push({
            pageId,
            pageNumber: extractedPage.number,
            pageTitle: extractedPage.title,
            type,
            details,
            timestamp: new Date().toISOString()
        });
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    async generateReport() {
        const reportDir = path.join(__dirname, '../verification-reports');
        if (!fs.existsSync(reportDir)) {
            fs.mkdirSync(reportDir, { recursive: true });
        }

        // Full differences report
        fs.writeFileSync(
            path.join(reportDir, 'content-differences.json'),
            JSON.stringify(this.differences, null, 2)
        );

        // Human-readable summary
        const summary = this.generateHumanReadableReport();
        fs.writeFileSync(
            path.join(reportDir, 'verification-summary.md'),
            summary
        );

        console.log(`📁 Reports saved to: ${reportDir}`);
    }

    generateHumanReadableReport() {
        const report = [];
        report.push('# SLK Content Verification Report');
        report.push(`Generated: ${new Date().toISOString()}`);
        report.push(`Total Differences Found: ${this.differences.length}\n`);

        if (this.differences.length === 0) {
            report.push('✅ **ALL CONTENT MATCHES!** No differences found.');
            return report.join('\n');
        }

        // Group by page
        const pageGroups = {};
        this.differences.forEach(diff => {
            if (!pageGroups[diff.pageId]) {
                pageGroups[diff.pageId] = [];
            }
            pageGroups[diff.pageId].push(diff);
        });

        for (const [pageId, diffs] of Object.entries(pageGroups)) {
            const firstDiff = diffs[0];
            report.push(`## Page ${firstDiff.pageNumber}: ${firstDiff.pageTitle}`);
            report.push(`**Page ID:** \`${pageId}\`\n`);

            diffs.forEach((diff, index) => {
                report.push(`### Difference ${index + 1}: ${diff.type.replace(/_/g, ' ')}`);

                if (diff.details.level) {
                    report.push(`**Level:** ${diff.details.level}`);
                }

                if (diff.details.field) {
                    report.push(`**Field:** ${diff.details.field}`);
                }

                report.push('**MARKDOWN SAYS:**');
                report.push('```');
                report.push(diff.details.expected || 'undefined');
                report.push('```');

                report.push('**HTML SAYS:**');
                report.push('```');
                report.push(diff.details.actual || 'undefined');
                report.push('```\n');
            });

            report.push('---\n');
        }

        return report.join('\n');
    }
}

// Mock JSDOM if not available
if (!global.JSDOM) {
    try {
        const { JSDOM } = require('jsdom');
        global.JSDOM = JSDOM;
    } catch (e) {
        console.log('ℹ️  JSDOM not available, using fallback HTML parsing');
        global.JSDOM = class MockJSDOM {
            constructor(html) {
                this.window = {
                    document: {
                        getElementById: (id) => null,
                        querySelector: (sel) => null,
                        querySelectorAll: (sel) => []
                    }
                };
            }
        };
    }
}

// Run comparison if called directly
if (require.main === module) {
    const comparer = new ContentComparer();
    comparer.compare().catch(console.error);
}

module.exports = ContentComparer;