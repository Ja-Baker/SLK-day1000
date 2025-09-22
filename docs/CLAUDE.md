CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

🚨 CRITICAL PROJECT CONTEXT

SLK Curriculum Planning Tool - A comprehensive web application for speech-language therapy curriculum planning. This is a single-page application (SPA) built with vanilla HTML, CSS, and JavaScript.

⚠️ IMPORTANT: This project has content accuracy issues that MUST be fixed.

🎯 PRIMARY MISSION

CONTENT VERIFICATION & REPOSITORY CLEANUP

The app currently has AI-generated content instead of the client's actual specifications. Your primary job is to ensure ALL text content matches the markdown document EXACTLY.

Source of Truth: C:\Users\insti\Downloads\SLK Modular Therapy Curriculum (1).md

🛑 CRITICAL RULES - YOU MUST FOLLOW THESE

Content Verification Rules

•
NEVER generate content from memory or assumptions

•
ALWAYS copy text EXACTLY from the markdown document

•
ALWAYS quote both markdown and app text when comparing

•
ALWAYS wait for "continue" before moving to next page

•
NEVER claim "100% match" without showing proof

•
NEVER rush through multiple pages at once

Working Process Rules

•
Work on ONE page at a time

•
Show actual text comparisons

•
Report specific differences

•
Wait for "continue" command

•
Fix only what you're told to fix

📋 CONTENT STRUCTURE

The app has 205 pages total:

•
Pages 1-13: Main navigation and decision guide

•
Pages 14-42: Curriculum pages with Beginner/Intermediate/Advanced levels

•
Pages 43-205: Individual skill pages

Curriculum Page Structure (MUST MATCH EXACTLY)

Markdown


**[CURRICULUM NAME]**
[Exact description from markdown]

**Beginner Level:**   
**[Exact Level Title]**  
(Ages: [Exact age range from markdown])
* [Exact skill 1 from markdown]
* [Exact skill 2 from markdown]  
* [Exact skill 3 from markdown]

**Sample Goal:**   
[Exact goal text from markdown including blanks: "____"]

[Exact rubric table from markdown]

**Therapy Activities:**  
[Exact button labels from markdown]


🔍 VERIFICATION PROCESS

Step-by-Step Process

1.
Read ONE page from markdown document

2.
Read corresponding page from app

3.
Compare word-for-word

4.
Report specific differences using required format

5.
WAIT for "continue" command

6.
Fix differences when instructed

7.
Verify fix is correct

8.
WAIT for "continue" to move to next page

Required Reporting Format

Plain Text


PAGE X VERIFICATION:

MARKDOWN SAYS:
[exact quote from markdown - copy/paste]

YOUR APP SAYS:
[exact quote from app - copy/paste]

DIFFERENCES FOUND:
1. [specific difference]
2. [specific difference]

WAITING FOR "continue"...


🏗️ REPOSITORY ARCHITECTURE

Current Architecture (BLOATED - NEEDS CLEANUP)

•
index.html: Contains ALL pages as separate <div> elements

•
script.js: Core navigation system

•
styles.css: Complete styling with SLK brand colors

•
curriculum-content-2.js: 132KB - Main curriculum data (REDUNDANT)

•
complete-curriculum-content.js: 30KB - Additional curriculum content (REDUNDANT)

•
skill-pages-complete.js: 37KB - Individual skill pages (REDUNDANT)

•
external-links-mapping.js: 22KB - External resources (REDUNDANT)

•
pdf-downloads.js: 17KB - PDF downloads (REDUNDANT)

Target Architecture (CLEAN)

Plain Text


js/
├── app.js                 # Main application logic
├── content.js             # All content data (consolidated)
├── navigation.js          # Page navigation
└── external-links.js      # External URLs


🎨 BRAND GUIDELINES

Colors (MUST USE EXACT HEX VALUES)

•
Pink: #ee4f9c (RGB 238, 79, 156)

•
Green: #a0ce4e (RGB 160, 206, 78)

•
Blue: #0093ac (RGB 0, 147, 172)

•
Purple: #b27ab4 (RGB 178, 122, 180)

Font

•
Candara Bold

🔧 COMMON DEVELOPMENT COMMANDS

Bash


# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start

# Content verification commands
grep -n "Beginner Level" index.html
grep -A 10 "Early Interactions" markdown.md
diff -u markdown_content.txt app_content.txt


📝 CONTENT VERIFICATION CHECKLIST

For Each Page, Verify:




Page title matches markdown exactly




Description text matches markdown exactly




Button labels match markdown exactly




All punctuation and capitalization match




No AI-generated content remains

For Curriculum Pages, Also Verify:




Level titles match exactly: "Building Awareness and Engagement"




Age ranges match exactly: "(Ages: 9-15 months and beyond)"




Skills lists match exactly: "Responding to Name", "Joint Attention", etc.




Goal text matches exactly including blanks: "____"




Rubric descriptions match word-for-word




Activity button labels match exactly




External links match exactly

🚫 WHAT NOT TO DO

Content Issues

•
❌ Don't generate content from memory

•
❌ Don't paraphrase or summarize

•
❌ Don't assume what content should be

•
❌ Don't skip verification steps

•
❌ Don't claim matches without proof

Process Issues

•
❌ Don't work on multiple pages at once

•
❌ Don't say "Moving to Page X" without permission

•
❌ Don't continue without "continue" command

•
❌ Don't rush through verification

Code Issues

•
❌ Don't create more redundant files

•
❌ Don't break existing navigation

•
❌ Don't change working functionality

•
❌ Don't ignore the cleanup strategy

✅ WHAT TO DO

Content Work

•
✅ Copy text EXACTLY from markdown

•
✅ Quote both sources when comparing

•
✅ Report real differences found

•
✅ Wait for permission before proceeding

Code Work

•
✅ Consolidate redundant files

•
✅ Follow single responsibility principle

•
✅ Use consistent naming conventions

•
✅ Add proper error handling

🎯 SUCCESS CRITERIA

Content Accuracy

•
100% text matches markdown exactly

•
Zero AI-generated content

•
All external links functional

•
All navigation flows work correctly

Code Quality

•
No redundant files

•
Clean, maintainable structure

•
Consistent naming conventions

•
Proper error handling

🔗 KEY NAVIGATION FUNCTIONS

Core Functions in script.js

•
showPage(pageId) - Main navigation function

•
goBack() - Navigate to previous page

•
toggleLevel(curriculumId, level) - Show/hide curriculum levels

•
initializeExpandableSections() - Setup collapsible content

Page Structure Pattern

HTML


<div id="pageId" class="page">
    <h2>Page Title</h2>
    <p>Page content...</p>
    <button onclick="showPage('nextPage')">Next</button>
</div>


📊 PROGRESS TRACKING

Use These Commands

•
/cost - Monitor token usage

•
/clear - Clear chat between pages

•
# key - Add findings to CLAUDE.md

Report Progress Like This

Plain Text


COMPLETED: Page X verified and corrected
FOUND: Y discrepancies, all fixed
STATUS: Content now matches markdown 100%
NEXT: Waiting for "continue" to move to Page X+1


🚨 EMERGENCY PROTOCOLS

If You Get Confused

1.
STOP immediately

2.
Ask for clarification

3.
Don't guess or assume

4.
Wait for clear instructions

If Content Doesn't Match

1.
Quote both sources exactly

2.
List specific differences

3.
Wait for "continue" to fix

4.
Verify fix is correct

📋 DEPLOYMENT NOTES

•
Static site deployed with Netlify (see netlify.toml)

•
No build process required - vanilla JavaScript

•
All curriculum data embedded in JavaScript files

•
Uses localStorage for progress tracking

•
Mobile-responsive design with CSS Grid and Flexbox

🎯 REMEMBER

You are working with a client's content. Accuracy is CRITICAL.

Think of yourself as a "fast intern with perfect memory" - capable but needs supervision.

Always verify your work. Always wait for permission. Always quote exact text.

The goal is 100% content accuracy and a clean, maintainable codebase.

