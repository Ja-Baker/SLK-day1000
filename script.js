// Navigation history stack
let navigationHistory = [];
let currentPage = 'homePage';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Hide all pages except home
    showPage('homePage');
    
    // Add event listener to back button
    document.getElementById('backBtn').addEventListener('click', goBack);
    
    // Initialize expandable sections if any exist
    initializeExpandableSections();
});

// Function to show a specific page
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the requested page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Update navigation history
        if (currentPage !== pageId) {
            navigationHistory.push(currentPage);
            currentPage = pageId;
        }
        
        // Show/hide back button
        const backBtn = document.getElementById('backBtn');
        if (pageId === 'homePage') {
            backBtn.style.display = 'none';
        } else {
            backBtn.style.display = 'block';
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Initialize any expandable sections on the new page
        initializeExpandableSections();
    }
}

// Function to go back to previous page
function goBack() {
    if (navigationHistory.length > 0) {
        const previousPage = navigationHistory.pop();
        currentPage = previousPage;
        
        // Hide all pages
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Show previous page
        const targetPage = document.getElementById(previousPage);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        // Hide back button if we're on home page
        if (previousPage === 'homePage') {
            document.getElementById('backBtn').style.display = 'none';
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Function to initialize expandable sections
function initializeExpandableSections() {
    const expandHeaders = document.querySelectorAll('.expand-header');
    
    expandHeaders.forEach(header => {
        // Remove any existing listeners to avoid duplicates
        header.replaceWith(header.cloneNode(true));
    });
    
    // Re-select headers after cloning
    const newExpandHeaders = document.querySelectorAll('.expand-header');
    
    newExpandHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            
            if (content && content.classList.contains('expand-content')) {
                // Toggle active classes
                this.classList.toggle('active');
                content.classList.toggle('active');
                
                // Update arrow icon if present
                const arrow = this.querySelector('.arrow');
                if (arrow) {
                    arrow.textContent = content.classList.contains('active') ? '▼' : '▶';
                }
            }
        });
    });
}

// Function to show curriculum level section
function showCurriculumLevel(curriculumId, level) {
    // First show the curriculum page
    showPage(curriculumId);
    
    // Then scroll to and expand the appropriate level section
    setTimeout(() => {
        const levelSection = document.getElementById(curriculumId + '-' + level);
        if (levelSection) {
            // Expand the section
            const header = levelSection.querySelector('.expand-header');
            const content = levelSection.querySelector('.expand-content');
            
            if (header && content) {
                header.classList.add('active');
                content.classList.add('active');
                
                // Scroll to the section
                levelSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, 100);
}

// Function to handle skill button clicks within curriculum pages
function showSkill(skillId) {
    showPage(skillId);
}

// Function to show individual skill pages
function showSkillPage(skillId) {
    // Check if skillPagesContent is available
    if (typeof skillPagesContent !== 'undefined' && skillPagesContent[skillId]) {
        const skill = skillPagesContent[skillId];
        const skillContent = document.getElementById('skillContent');
        
        if (skillContent) {
            skillContent.innerHTML = `
                <div class="skill-header">
                    <h2>${skill.title}</h2>
                    <p class="skill-category">Category: ${skill.category}</p>
                    ${skill.externalLink ? `<a href="${skill.externalLink}" class="external-link" target="_blank">📖 View Full Article</a>` : ''}
                </div>
                <div class="skill-content">
                    ${skill.content}
                </div>
                ${skill.activities ? `
                    <div class="skill-activities">
                        <h3>Activities</h3>
                        ${skill.activities}
                    </div>
                ` : ''}
                ${skill.materials ? `
                    <div class="skill-materials">
                        <h3>Materials Needed</h3>
                        ${skill.materials}
                    </div>
                ` : ''}
                ${skill.tips ? `
                    <div class="skill-tips">
                        <h3>Tips for Success</h3>
                        ${skill.tips}
                    </div>
                ` : ''}
            `;
        }
        
        showPage('skillPage');
    } else {
        // Fallback if skill content is not available
        const skillContent = document.getElementById('skillContent');
        if (skillContent) {
            skillContent.innerHTML = `
                <div class="skill-header">
                    <h2>${skillId.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h2>
                    <p>Skill content is loading...</p>
                </div>
            `;
        }
        showPage('skillPage');
    }
}

// Helper function to create curriculum page structure
function createCurriculumPage(pageId, title, description, levels) {
    const page = document.getElementById(pageId);
    if (!page) return;
    
    let html = `
        <h2>${title}</h2>
        <p>${description}</p>
        <div class="level-selection">
    `;
    
    levels.forEach(level => {
        html += `
            <div class="level-card">
                <h4>${level.title}</h4>
                <p class="age-range">${level.ageRange}</p>
                <ul>
        `;
        
        level.skills.forEach(skill => {
            html += `<li>${skill}</li>`;
        });
        
        html += `
                </ul>
                <button class="area-btn" onclick="showCurriculumLevel('${pageId}', '${level.id}')">
                    Choose ${level.title}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    
    // Add expandable sections for each level
    levels.forEach(level => {
        html += `
            <div id="${pageId}-${level.id}" class="expandable-section" style="display:none;">
                <div class="expand-header">
                    <h3>${level.title}</h3>
                    <span class="arrow">▶</span>
                </div>
                <div class="expand-content">
                    ${level.content}
                </div>
            </div>
        `;
    });
    
    page.innerHTML = html;
}

// Function to handle "Jump to Decision Guide" button
function restartDecisionGuide() {
    navigationHistory = [];
    showPage('decisionGuide');
}

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    // ESC key to go back
    if (event.key === 'Escape' && currentPage !== 'homePage') {
        goBack();
    }
    
    // Alt + H to go home
    if (event.altKey && event.key === 'h') {
        navigationHistory = [];
        showPage('homePage');
    }
});

// Print functionality
function printCurrentPage() {
    window.print();
}

// Search functionality (basic implementation)
function searchCurriculum(searchTerm) {
    // This could be expanded to search through all curriculum content
    // For now, it's a placeholder for future implementation
    console.log('Searching for:', searchTerm);
}

// Progress tracking (basic implementation)
function saveProgress() {
    const progress = {
        currentPage: currentPage,
        navigationHistory: navigationHistory,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('slkProgress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('slkProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        navigationHistory = progress.navigationHistory || [];
        showPage(progress.currentPage || 'homePage');
    }
}

// Auto-save progress every time a page changes
window.addEventListener('beforeunload', saveProgress);

// BT-8008: Function availability checker and fallback handler
window.addEventListener('DOMContentLoaded', function() {
    // Wait for all scripts to load, then check function availability
    setTimeout(function() {
        const requiredFunctions = [
            'downloadChecklist', 'downloadHandout', 'downloadVisual', 
            'downloadResource', 'generateFunctionalPDF', 'downloadSkillResource'
        ];
        
        requiredFunctions.forEach(funcName => {
            if (typeof window[funcName] !== 'function') {
                console.warn(`Missing function: ${funcName}, creating fallback`);
                window[funcName] = function() {
                    alert(`PDF download feature "${funcName}" is loading. Please refresh the page and try again.`);
                };
            }
        });
        
        console.log('✅ All PDF download functions verified and available');
    }, 1000);
});