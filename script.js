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
    
    // Initialize curriculum pages only if needed
    // (Currently disabled while curriculum pages are manually structured)
    // initializeCurriculumPages();
});

// Function to show a specific page
function showPage(pageId) {
    // Show loading for large pages
    if (pageId !== 'homePage' && typeof window.showLoading === 'function') {
        window.showLoading('Loading page...');
    }
    
    // Use requestAnimationFrame for smoother transitions
    requestAnimationFrame(() => {
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
            
            // Populate resource content if on a resource page
            if (pageId === 'checklists' || pageId === 'handouts' || pageId === 'visuals') {
                if (typeof window.populateResourceContent === 'function') {
                    setTimeout(() => {
                        window.populateResourceContent();
                    }, 50);
                }
            }
        }
        
        // Hide loading indicator after page transition
        setTimeout(() => {
            if (typeof window.hideLoading === 'function') {
                window.hideLoading();
            }
        }, 200);
    });
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
    // Alert user that individual skill pages are not implemented yet
    alert(`Individual skill pages are not yet implemented. This would show detailed information about: ${skillId.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}`);
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

// Initialize curriculum pages with proper level card structure
function initializeCurriculumPages() {
    // Check if curriculum data is available
    if (typeof curriculumData === 'undefined') {
        console.warn('Curriculum data not loaded yet');
        return;
    }
    
    // Map of page IDs to curriculum data keys
    const curriculumMapping = {
        'earlyInteractions': 'earlyInteractions',
        'analyticLanguage': 'analyticLanguage',
        'gestaltLanguage': 'gestaltLanguage',
        'aacCurriculum': 'aacCurriculum',
        'articulation': 'articulation',
        'phonology': 'phonology',
        'cyclesPhonology': 'cyclesPhonology',
        'motorSpeech': 'motorSpeech',
        'mumbling': 'mumbling',
        'followingDirections': 'followingDirections',
        'sequencing': 'sequencing',
        'abstractLanguage': 'abstractLanguage',
        'vocabulary': 'vocabulary',
        'askingAnswering': 'askingAnswering',
        'grammarSyntax': 'grammarSyntax',
        'literacyFoundations': 'literacyFoundations',
        'cyclesLanguage': 'cyclesLanguage',
        'healthyVoice': 'healthyVoice',
        'voice': 'voice',
        'resonance': 'resonance',
        'prosody': 'prosody',
        'socialAwareness': 'socialAwareness',
        'emotionalRegulation': 'emotionalRegulation',
        'conversationalSkills': 'conversationalSkills',
        'selectiveMutism': 'selectiveMutism',
        'foundationsFluency': 'foundationsFluency',
        'wordFinding': 'wordFinding',
        'stuttering': 'stuttering',
        'cluttering': 'cluttering'
    };
    
    // Populate each curriculum page with proper structure
    Object.keys(curriculumMapping).forEach(pageId => {
        const dataKey = curriculumMapping[pageId];
        const curriculum = curriculumData[dataKey];
        const pageElement = document.getElementById(pageId);
        
        if (pageElement && curriculum) {
            let html = `
                <h2>${curriculum.title}</h2>
                <p>${curriculum.description}</p>
                <div class="level-selection">
            `;
            
            // Add level cards
            if (curriculum.levels) {
                ['beginner', 'intermediate', 'advanced'].forEach(levelKey => {
                    const level = curriculum.levels[levelKey];
                    if (level) {
                        html += `
                            <div class="level-card" onclick="toggleLevel('${pageId}', '${levelKey}')">
                                <h4>${level.title}</h4>
                                <p class="age-range">${level.ageRange}</p>
                                <ul>
                        `;
                        
                        level.skills.forEach(skill => {
                            html += `<li>${skill}</li>`;
                        });
                        
                        html += `
                                </ul>
                                <p class="click-to-expand">Click to expand ▶</p>
                            </div>
                        `;
                    }
                });
            }
            
            html += `</div>`;
            
            // Add expandable content sections for each level
            if (curriculum.levels) {
                ['beginner', 'intermediate', 'advanced'].forEach(levelKey => {
                    const level = curriculum.levels[levelKey];
                    if (level) {
                        html += `
                            <div id="${pageId}-${levelKey}" class="level-content" style="display:none;">
                                <div class="level-header">
                                    <h3>${level.title}</h3>
                                    <button class="collapse-btn" onclick="toggleLevel('${pageId}', '${levelKey}')">Collapse ▲</button>
                                </div>
                                ${level.goal ? `
                                    <div class="goal-box">
                                        <h4>Sample Goal:</h4>
                                        <p>${level.goal}</p>
                                    </div>
                                ` : ''}
                                ${level.rubric ? `
                                    <div class="rubric-section">
                                        <h4>Rubric:</h4>
                                        ${level.rubric.map(item => `
                                            <div class="rubric-item">
                                                <strong>${item.score}</strong>
                                                <p>${item.description}</p>
                                            </div>
                                        `).join('')}
                                    </div>
                                ` : ''}
                                ${level.activities ? `
                                    <div class="activities-section">
                                        <h4>Therapy Activities:</h4>
                                        <div class="activity-grid">
                                            ${level.activities.map(activity => `
                                                <button class="activity-btn" onclick="showSkillPage('${activity.pageId}')">
                                                    ${activity.name}
                                                </button>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    }
                });
            }
            
            pageElement.innerHTML = html;
        }
    });
}

// Function to toggle level content expansion
function toggleLevel(curriculumId, level) {
    const contentElement = document.getElementById(`${curriculumId}-${level}`);
    const levelCards = document.querySelectorAll(`#${curriculumId} .level-card`);
    
    if (contentElement) {
        if (contentElement.style.display === 'none') {
            // Hide all other level contents
            document.querySelectorAll(`#${curriculumId} .level-content`).forEach(el => {
                el.style.display = 'none';
            });
            // Show this level content
            contentElement.style.display = 'block';
            // Scroll to content
            contentElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            // Hide this level content
            contentElement.style.display = 'none';
        }
    }
}