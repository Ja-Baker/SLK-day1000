# Known Problems in SLK Curriculum Planning Tool

This document lists all identified issues in the codebase that need attention or resolution.

## 🚨 Critical Issues

### 1. Individual Skill Pages Not Implemented
- **File**: `script.js` (line 171)
- **Issue**: Function `showSkillPage()` shows an alert instead of displaying actual skill content
- **Impact**: Users cannot view detailed skill information
- **Status**: Acknowledged in code with alert message

### 2. Missing PDF Download Functions
- **File**: `script.js` (lines 292-295)
- **Issue**: PDF download functions may not be available on page load
- **Functions Affected**: 
  - `downloadChecklist`
  - `downloadHandout` 
  - `downloadVisual`
  - `downloadResource`
  - `generateFunctionalPDF`
  - `downloadSkillResource`
- **Fallback**: Alert message asking users to refresh page

### 3. Curriculum Data Dependency
- **File**: `script.js` (line 307)
- **Issue**: `initializeCurriculumPages()` depends on undefined `curriculumData`
- **Impact**: Curriculum pages may not initialize properly
- **Warning**: Console warning logged when data not available

## ⚠️ Functional Issues

### 4. Search Data Dependency
- **File**: `search.js` (line 81)
- **Issue**: Search functionality depends on `allSearchData` variable
- **Impact**: Search may fail if data not loaded properly
- **Mitigation**: Timeout delay implemented (100ms)

### 5. Skill Content Dependency
- **File**: `search.js` (line 360)
- **Issue**: Skill page population depends on `skillPagesContent` variable
- **Impact**: Dynamic skill pages may show placeholder content
- **Fallback**: Generic "coming soon" message displayed

### 6. Large HTML File Size
- **File**: `index.html`
- **Issue**: File size exceeds 250KB, making it difficult to analyze
- **Impact**: Performance concerns, maintenance difficulty
- **Recommendation**: Consider splitting into smaller components

## 🔧 Code Quality Issues

### 7. Incomplete Skill Content
- **File**: `skill-pages-complete.js`
- **Issue**: Many skill entries have empty `content` fields
- **Example**: Lines 10, 17, 24, 31, 38, 45 - all have `content: ''`
- **Impact**: Skills show only external links without detailed content

### 8. Event Listener Duplication Prevention
- **File**: `script.js` (lines 113-115)
- **Issue**: Complex workaround to prevent duplicate event listeners
- **Method**: Cloning DOM elements to remove existing listeners
- **Concern**: Potentially inefficient approach

### 9. Mixed Navigation Patterns
- **File**: `script.js`
- **Issue**: Multiple navigation methods exist:
  - `showPage()` function
  - `showCurriculumLevel()` function  
  - `showSkill()` function
  - `showSkillPage()` function
- **Impact**: Inconsistent user experience, maintenance complexity

## 📊 Data Structure Issues

### 10. External Links Mapping Complexity
- **File**: `external-links-mapping.js`
- **Issue**: Large, complex nested object structure (272 lines)
- **Maintenance**: Difficult to update and verify link accuracy
- **Recommendation**: Consider database or JSON file approach

### 11. Search Data Structure Inconsistency
- **File**: `search-data.js`
- **Issue**: File appears to be truncated or incomplete
- **Visible**: Only first 50 lines of 3470 total lines
- **Impact**: May affect search functionality completeness

## 🎯 Performance Concerns

### 12. Synchronous DOM Manipulation
- **File**: `script.js` (lines 28-77)
- **Issue**: Heavy DOM manipulation in `showPage()` function
- **Impact**: Potential UI blocking during page transitions
- **Mitigation**: `requestAnimationFrame` used for some operations

### 13. Search Result Limitations
- **File**: `search.js` (line 96)
- **Issue**: Search results limited to 10 items
- **Impact**: Users may not see all relevant results
- **Note**: Implemented for performance reasons

## 🔍 Missing Features

### 14. Error Handling
- **Files**: Multiple JavaScript files
- **Issue**: Limited error handling throughout codebase
- **Impact**: Poor user experience when things go wrong
- **Examples**: No try-catch blocks for critical operations

### 15. Loading States
- **File**: `script.js`
- **Issue**: Loading indicators referenced but may not be implemented
- **Functions**: `showLoading()`, `hideLoading()` referenced but not defined
- **Impact**: Users don't see feedback during operations

## 📱 Accessibility & UX Issues

### 16. Keyboard Navigation Incomplete
- **File**: `script.js` (lines 233-244)
- **Issue**: Limited keyboard shortcuts implemented
- **Available**: ESC to go back, Alt+H for home
- **Missing**: Tab navigation, Enter key handling for buttons

### 17. Search UX Issues
- **File**: `search.js`
- **Issue**: Search requires minimum 2 characters
- **Impact**: May not be intuitive for users
- **Note**: Implemented for performance reasons

## 🏗️ Architecture Issues

### 18. Global Variable Dependencies
- **Files**: Multiple
- **Issue**: Heavy reliance on global variables
- **Examples**: `curriculumData`, `allSearchData`, `skillPagesContent`
- **Impact**: Tight coupling, difficult testing

### 19. Mixed Responsibility in Files
- **File**: `script.js`
- **Issue**: Single file handles navigation, DOM manipulation, and initialization
- **Impact**: Large file size (455 lines), difficult maintenance
- **Recommendation**: Split into modules

## 📋 Documentation Issues

### 20. Inconsistent Code Comments
- **Files**: Multiple JavaScript files
- **Issue**: Some functions well-documented, others have minimal comments
- **Impact**: Difficult for new developers to understand codebase

## 🔄 Update Status

**Last Updated**: 2025-09-17  
**Total Issues**: 20  
**Critical**: 3  
**High Priority**: 8  
**Medium Priority**: 9  

## 📝 Recommendations

1. **Immediate**: Implement actual skill page content instead of alerts
2. **Short-term**: Add proper error handling and loading states
3. **Medium-term**: Refactor large files into smaller, focused modules
4. **Long-term**: Consider modern framework adoption for better maintainability

---

*This document should be updated as issues are resolved and new ones are discovered.*
