#!/usr/bin/env node

/**
 * Deep Character-Level Comparison Tool
 * Finds exact differences between markdown and HTML content
 */

const fs = require('fs');
const path = require('path');

class DeepComparer {
    constructor() {
        this.sourceMarkdown = '/mnt/c/Users/insti/Downloads/SLK Modular Therapy Curriculum (1).md';
        this.indexPath = path.join(__dirname, '../index.html');
    }

    async deepCompare() {
        console.log('🔍 Starting deep character-level comparison...');

        const markdownContent = fs.readFileSync(this.sourceMarkdown, 'utf8');
        const htmlContent = fs.readFileSync(this.indexPath, 'utf8');

        console.log('📋 Checking Analytic Language Processor Advanced Level...');

        // Extract exact content from both sources
        const markdownText = this.extractAnalyticAdvancedMarkdown(markdownContent);
        const htmlText = this.extractAnalyticAdvancedHTML(htmlContent);

        console.log('\n=== MARKDOWN CONTENT ===');
        console.log(`"${markdownText}"`);
        console.log(`Length: ${markdownText ? markdownText.length : 0} characters`);

        console.log('\n=== HTML CONTENT ===');
        console.log(`"${htmlText}"`);
        console.log(`Length: ${htmlText ? htmlText.length : 0} characters`);

        if (markdownText && htmlText) {
            console.log('\n=== CHARACTER-BY-CHARACTER COMPARISON ===');
            this.compareCharByChar(markdownText, htmlText);
        }

        console.log('\n✅ Deep comparison complete!');
    }

    extractAnalyticAdvancedMarkdown(content) {
        // Find the advanced level section
        const advancedMatch = content.match(/#### Advanced Level: Expanding Vocabulary and Combining Words[\s\S]*?At this level, the focus is on growing the child's vocabulary and moving from single words to two-word phrases for more functional communication\./);

        if (advancedMatch) {
            // Extract just the description sentence
            const descMatch = advancedMatch[0].match(/At this level, the focus is on growing the child's vocabulary and moving from single words to two-word phrases for more functional communication\./);
            return descMatch ? descMatch[0] : null;
        }

        return null;
    }

    extractAnalyticAdvancedHTML(content) {
        // Find the analytic language advanced section
        const htmlMatch = content.match(/<div id="analyticLanguage-advanced"[\s\S]*?<p>([^<]+)<\/p>/);

        if (htmlMatch) {
            return htmlMatch[1].trim();
        }

        return null;
    }

    compareCharByChar(str1, str2) {
        const maxLen = Math.max(str1.length, str2.length);
        let differences = 0;

        console.log('Position | Markdown | HTML     | Match');
        console.log('---------|----------|----------|------');

        for (let i = 0; i < maxLen; i++) {
            const char1 = i < str1.length ? str1[i] : 'EOF';
            const char2 = i < str2.length ? str2[i] : 'EOF';
            const match = char1 === char2;

            if (!match) {
                differences++;
                const displayChar1 = char1 === ' ' ? '␣' : char1 === '\n' ? '↵' : char1 === '\t' ? '→' : char1;
                const displayChar2 = char2 === ' ' ? '␣' : char2 === '\n' ? '↵' : char2 === '\t' ? '→' : char2;

                console.log(`${i.toString().padStart(8)} | ${displayChar1.padEnd(8)} | ${displayChar2.padEnd(8)} | ${match ? '✅' : '❌'}`);

                // Show context around differences
                if (differences <= 5) {
                    const start = Math.max(0, i - 5);
                    const end = Math.min(maxLen, i + 6);
                    console.log(`         Context: "${str1.substring(start, end)}" vs "${str2.substring(start, end)}"`);
                }
            }
        }

        console.log(`\n📊 Found ${differences} character differences`);

        if (differences === 0) {
            console.log('✅ PERFECT MATCH! Content is identical.');
        } else {
            console.log('❌ DIFFERENCES FOUND! Content needs fixing.');
        }
    }
}

// Run comparison if called directly
if (require.main === module) {
    const comparer = new DeepComparer();
    comparer.deepCompare().catch(console.error);
}

module.exports = DeepComparer;