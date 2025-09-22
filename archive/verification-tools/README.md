# SLK Content Verification Tools

This directory contains specialized tools for verifying content accuracy between the markdown source document and the HTML implementation.

## 🛠️ Available Tools

### `extract-markdown.js`
**Purpose:** Parses the source markdown document and extracts structured curriculum content.

**Usage:**
```bash
node extract-markdown.js
```

**Output:**
- `../extracted-content/extracted-pages.json` - All extracted pages
- `../extracted-content/curriculum-pages.json` - Curriculum pages only (14-42)
- `../extracted-content/extraction-summary.json` - Extraction metadata

**What it does:**
- Identifies all curriculum pages (Pages 14-42)
- Extracts titles, descriptions, levels, skills, and goals
- Structures data for comparison tools

### `simple-verify.js`
**Purpose:** Direct text comparison for specific page verification.

**Usage:**
```bash
node simple-verify.js
```

**Output:**
- `../verification-reports/simple-verification-report.md` - Human-readable differences
- `../verification-reports/simple-verification-data.json` - Structured results

**What it does:**
- Currently configured for Early Interactions page (Page 14)
- Word-for-word comparison between markdown and HTML
- Identifies spacing, punctuation, and content differences

### `batch-verify.js`
**Purpose:** Systematic verification of all curriculum pages.

**Usage:**
```bash
node batch-verify.js
```

**Output:**
- `../verification-reports/batch-verification-summary.md` - Status overview
- `../verification-reports/batch-verification-data.json` - Detailed results

**What it does:**
- Checks all 29 curriculum pages (14-42)
- Maps markdown pages to HTML elements
- Reports: verified, minor_issues, needs_attention, missing
- Identifies title mismatches and missing content

### `audit-status.js`
**Purpose:** Comprehensive content audit and status mapping.

**Usage:**
```bash
node audit-status.js
```

**Output:**
- `../verification-reports/comprehensive-audit.md` - Full analysis
- `../verification-reports/audit-data.json` - Structured findings

**What it does:**
- Maps all markdown curriculum pages to HTML pages
- Provides recommendations for fixes
- Comprehensive status reporting with actionable next steps

## 📋 Verification Workflow

### For New Content Updates:
1. Update source markdown document
2. Run `extract-markdown.js` to parse new content
3. Run `audit-status.js` to identify changes needed
4. Update HTML content based on findings
5. Run `batch-verify.js` to confirm accuracy

### For Spot Checking:
1. Run `simple-verify.js` for specific page verification
2. Review generated reports for exact differences
3. Apply fixes as needed

### For Complete Verification:
1. Run `audit-status.js` for comprehensive status
2. Address any "needs_attention" items
3. Re-run audit to confirm all verified

## 📁 Output Structure

```
../verification-reports/
├── simple-verification-report.md      # Page-specific differences
├── simple-verification-data.json      # Structured simple verification
├── batch-verification-summary.md      # All pages status overview
├── batch-verification-data.json       # Detailed batch results
├── comprehensive-audit.md             # Full content audit
└── audit-data.json                    # Structured audit findings

../extracted-content/
├── extracted-pages.json               # All pages from markdown
├── curriculum-pages.json              # Curriculum subset
└── extraction-summary.json            # Extraction metadata
```

## 🔧 Configuration

### Page Mapping
The `batch-verify.js` tool uses a page mapping to connect markdown page numbers to HTML element IDs:

```javascript
this.pageMapping = {
    14: { id: 'earlyInteractions', title: 'Early Interactions Curriculum' },
    15: { id: 'analyticLanguage', title: 'Analytic Language Processor Curriculum' },
    // ... etc
};
```

**To add new pages:** Update the mapping in `batch-verify.js`

### Source Document Path
All tools reference the source markdown:
```javascript
const SOURCE_FILE = '/mnt/c/Users/insti/Downloads/SLK Modular Therapy Curriculum (1).md';
```

**To update source:** Change this path in each tool

## 🎯 Success Criteria

### Verified Status
A page is "verified" when:
- Title matches markdown exactly
- Description text matches (normalized whitespace)
- All curriculum structure present (levels, skills, goals)

### Needs Attention
A page "needs attention" when:
- Title mismatches found
- Missing curriculum structure
- Content differences detected

### Missing Status
A page is "missing" when:
- No corresponding HTML element found
- HTML element exists but empty

## 🚀 Future Enhancements

### Possible Improvements:
1. **Content structure validation** - Verify skills lists, goal text, rubrics
2. **External link verification** - Check all hub.speechandlanguagekids.com links
3. **Automated fixing** - Generate HTML from markdown automatically
4. **CI/CD integration** - Run verification on each commit
5. **Visual diff reporting** - Side-by-side comparison views

### Extension Points:
- Add verification for skill pages (Pages 43-205)
- Include navigation page verification (Pages 1-13)
- Verify brand compliance (colors, fonts)
- Check mobile responsiveness

---

## 📞 Support

For issues with verification tools:
1. Check source document path is correct
2. Verify HTML structure hasn't changed
3. Review page mapping in batch-verify.js
4. Check output reports for specific error details

**Last Updated:** September 15, 2025
**Tools Version:** 1.0.0
**Verification Status:** 28/29 pages verified (97% accuracy)