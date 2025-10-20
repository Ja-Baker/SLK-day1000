# SLK Curriculum Planning Tool

A comprehensive web application for speech-language therapy curriculum planning.

## Features

- **Interactive Decision Guide** - Helps determine the appropriate curriculum based on individual needs
- **Multiple Curriculum Paths** - Includes curriculums for:
  - Early Interactions
  - Analytic Language Processors (ALPs)  
  - Gestalt Language Processors (GLPs)
  - Augmentative and Alternative Communication (AAC)
  - Articulation
  - Phonology
  - Motor Speech
  - Language Skills
  - Voice/Resonance
  - Social Communication
  - Fluency

- **Expandable Content** - Each curriculum includes detailed levels with sample goals, rubrics, and therapy activities
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Navigation System** - Easy back/forward navigation with breadcrumb tracking
- **Brand Compliant** - Uses SLK brand colors (Pink, Green, Blue, Purple) and Candara Bold font

## File Structure

```
/
├── index.html                            # Main HTML file with all pages (293KB)
├── package.json                          # Project configuration
├── src/
│   ├── js/
│   │   ├── script.js                     # Main navigation and interaction (17KB)
│   │   ├── search.js                     # Search functionality (16KB)
│   │   ├── search-data.js                # Search index data (135KB)
│   │   ├── skill-pages-complete.js       # Individual skill pages (60KB)
│   │   └── external-links-mapping.js     # External resources (22KB)
│   └── css/
│       └── styles.css                    # CSS styling with brand colors (37KB)
├── content/
│   └── source-curriculum.md              # Source curriculum markdown (518KB)
├── docs/
│   ├── README.md                         # This file
│   ├── CLAUDE.md                         # AI assistant guidance
│   └── CHANGELOG.md                      # Change history
└── archive/
    ├── verification-reports/             # Content verification records
    ├── verification-tools/               # Verification scripts
    └── extracted-content/                # Historical content extracts
```

## Usage

1. Open `index.html` in a web browser
2. Use the decision guide to find appropriate curriculum
3. Or jump directly to a specific curriculum area
4. Navigate through curriculum levels and access therapy activities
5. Use the back button or ESC key to navigate backward

## Keyboard Shortcuts

- **ESC** - Go back to previous page
- **Alt + H** - Return to home page

## Brand Colors

- Pink: #ee4f9c (RGB 238, 79, 156)
- Green: #a0ce4e (RGB 160, 206, 78) 
- Blue: #0093ac (RGB 0, 147, 172)
- Purple: #b27ab4 (RGB 178, 122, 180)

## Technology

- Pure HTML5, CSS3, and JavaScript (no frameworks required)
- Local storage for progress tracking
- Print-friendly CSS
- Accessibility considerations

## Development Status

✅ Core structure and navigation
✅ Decision guide flow  
✅ Category selection pages
✅ Expandable curriculum sections
🚧 Complete curriculum content (3 of 20+ curriculums implemented)
⏳ Individual skill/activity pages
⏳ Download sections (checklists, handouts, visuals)

## Next Steps

1. Complete remaining curriculum content
2. Add individual skill/activity detail pages  
3. Implement download functionality
4. Add search capability
5. Enhanced accessibility features