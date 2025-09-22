// Search functionality for SLK Curriculum Planning Tool
// Uses existing design patterns and navigation system

class SLKSearch {
    constructor() {
        this.searchInput = null;
        this.clearButton = null;
        this.searchResults = null;
        this.resultsCount = null;
        this.resultsList = null;
        this.currentResults = [];
        this.selectedIndex = -1;
        
        this.init();
    }
    
    init() {
        // Get DOM elements
        this.searchInput = document.getElementById('searchInput');
        this.clearButton = document.getElementById('clearSearch');
        this.searchResults = document.getElementById('searchResults');
        this.resultsCount = document.getElementById('resultsCount');
        this.resultsList = document.getElementById('searchResultsList');
        
        if (!this.searchInput) return;
        
        // Add event listeners
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Search input events
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        this.searchInput.addEventListener('keydown', (e) => this.handleKeyNavigation(e));
        this.searchInput.addEventListener('focus', () => {
            if (this.searchInput.value.length >= 2) {
                this.showResults();
            }
        });
        
        // Clear button
        this.clearButton.addEventListener('click', () => this.clearSearch());
        
        // Click outside to close results
        document.addEventListener('click', (e) => {
            if (!this.searchInput.contains(e.target) && !this.searchResults.contains(e.target)) {
                this.hideResults();
            }
        });
        
        // Prevent results from closing when clicking inside
        this.searchResults.addEventListener('click', (e) => e.stopPropagation());
    }
    
    handleSearch(query) {
        const trimmedQuery = query.trim();
        
        // Show/hide clear button
        if (trimmedQuery.length > 0) {
            this.clearButton.style.display = 'block';
            this.searchInput.style.paddingRight = '35px';
        } else {
            this.clearButton.style.display = 'none';
            this.searchInput.style.paddingRight = 'var(--spacing-sm)';
        }
        
        // Search with minimum 2 characters
        if (trimmedQuery.length >= 2) {
            this.performSearch(trimmedQuery);
            this.showResults();
        } else {
            this.hideResults();
        }
    }
    
    performSearch(query) {
        const lowerQuery = query.toLowerCase();
        let results = [];
        
        // Search through all data
        allSearchData.forEach(item => {
            const score = this.calculateRelevanceScore(item, lowerQuery);
            if (score > 0) {
                results.push({
                    ...item,
                    score: score,
                    matchedTerms: this.getMatchedTerms(item, lowerQuery)
                });
            }
        });
        
        // Sort by relevance score (highest first)
        results.sort((a, b) => b.score - a.score);
        
        // Limit results for performance
        this.currentResults = results.slice(0, 10);
        this.selectedIndex = -1;
        
        this.displayResults();
    }
    
    calculateRelevanceScore(item, query) {
        let score = 0;
        const queryTerms = query.split(' ').filter(term => term.length > 0);
        
        queryTerms.forEach(term => {
            // Exact title match (highest priority)
            if (item.title.toLowerCase().includes(term)) {
                if (item.title.toLowerCase() === query) {
                    score += 100; // Perfect match
                } else if (item.title.toLowerCase().startsWith(term)) {
                    score += 50; // Starts with term
                } else {
                    score += 20; // Contains term
                }
            }
            
            // Keywords match
            item.keywords.forEach(keyword => {
                if (keyword.toLowerCase().includes(term)) {
                    if (keyword.toLowerCase() === term) {
                        score += 30; // Exact keyword match
                    } else {
                        score += 10; // Partial keyword match
                    }
                }
            });
            
            // Description match
            if (item.description && item.description.toLowerCase().includes(term)) {
                score += 5;
            }
            
            // Category match (for skills)
            if (item.category && item.category.toLowerCase().includes(term)) {
                score += 15;
            }
            
            // Age range match (for curriculums)
            if (item.ageRange && item.ageRange.toLowerCase().includes(term)) {
                score += 10;
            }
        });
        
        return score;
    }
    
    getMatchedTerms(item, query) {
        const terms = [];
        const queryTerms = query.split(' ').filter(term => term.length > 0);
        
        queryTerms.forEach(term => {
            if (item.title.toLowerCase().includes(term)) {
                terms.push(term);
            }
        });
        
        return terms;
    }
    
    displayResults() {
        if (this.currentResults.length === 0) {
            this.showNoResults();
            return;
        }
        
        // Update results count
        this.resultsCount.textContent = `${this.currentResults.length} result${this.currentResults.length === 1 ? '' : 's'} found`;
        
        // Clear previous results
        this.resultsList.innerHTML = '';
        
        // Group results by type while maintaining order and relevance
        const groupedResults = this.groupResultsByType(this.currentResults);
        
        // Display sections in order: Curriculums, Skills, Pages
        const sectionOrder = ['Curriculum', 'Skill', 'Page'];
        let globalIndex = 0;
        
        sectionOrder.forEach(sectionType => {
            if (groupedResults[sectionType] && groupedResults[sectionType].length > 0) {
                // Create section header
                const sectionHeader = this.createSectionHeader(sectionType, groupedResults[sectionType].length);
                this.resultsList.appendChild(sectionHeader);
                
                // Add results for this section
                groupedResults[sectionType].forEach(result => {
                    const resultElement = this.createResultElement(result, globalIndex);
                    this.resultsList.appendChild(resultElement);
                    globalIndex++;
                });
            }
        });
    }
    
    groupResultsByType(results) {
        const grouped = {
            'Curriculum': [],
            'Skill': [],
            'Page': []
        };
        
        results.forEach(result => {
            if (grouped[result.type]) {
                grouped[result.type].push(result);
            }
        });
        
        return grouped;
    }
    
    createSectionHeader(type, count) {
        const header = document.createElement('div');
        header.className = 'search-section-header';
        
        const icon = this.getSectionIcon(type);
        const pluralType = count === 1 ? type : (type === 'Curriculum' ? 'Curriculums' : type + 's');
        
        header.innerHTML = `
            <div class="search-section-content">
                <span class="search-section-icon">${icon}</span>
                <span class="search-section-title">${pluralType}</span>
                <span class="search-section-count">${count}</span>
            </div>
        `;
        
        return header;
    }
    
    getSectionIcon(type) {
        const icons = {
            'Curriculum': '📚',
            'Skill': '🎯',
            'Page': '📄'
        };
        return icons[type] || '📋';
    }
    
    createResultElement(result, index) {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.dataset.index = index;
        
        // Highlight matched terms in title
        const highlightedTitle = this.highlightTerms(result.title, result.matchedTerms);
        
        div.innerHTML = `
            <div class="search-result-content">
                <div class="search-result-title">${highlightedTitle}</div>
                <div class="search-result-description">${result.description}</div>
                <span class="search-result-type ${result.type.toLowerCase()}">${result.type}</span>
            </div>
        `;
        
        // Add click handler
        div.addEventListener('click', () => this.selectResult(result));
        
        return div;
    }
    
    highlightTerms(text, terms) {
        if (!terms || terms.length === 0) return text;
        
        let highlightedText = text;
        terms.forEach(term => {
            const regex = new RegExp(`(${this.escapeRegex(term)})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<span class="search-highlight">$1</span>');
        });
        
        return highlightedText;
    }
    
    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
    }
    
    showNoResults() {
        this.resultsCount.textContent = 'No results found';
        this.resultsList.innerHTML = `
            <div class="search-no-results">
                <p>No results found. Try searching for:</p>
                <p>• Curriculum names (e.g., "articulation", "fluency")</p>
                <p>• Skills (e.g., "responding to name", "following directions")</p>
                <p>• Keywords (e.g., "speech sounds", "social communication")</p>
            </div>
        `;
    }
    
    handleKeyNavigation(e) {
        if (!this.currentResults.length) return;
        
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                this.selectedIndex = Math.min(this.selectedIndex + 1, this.currentResults.length - 1);
                this.updateSelection();
                break;
                
            case 'ArrowUp':
                e.preventDefault();
                this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
                this.updateSelection();
                break;
                
            case 'Enter':
                e.preventDefault();
                if (this.selectedIndex >= 0) {
                    this.selectResult(this.currentResults[this.selectedIndex]);
                }
                break;
                
            case 'Escape':
                this.hideResults();
                this.searchInput.blur();
                break;
        }
    }
    
    updateSelection() {
        // Remove previous selection from all result items
        const previousSelected = this.resultsList.querySelector('.search-result-item.selected');
        if (previousSelected) {
            previousSelected.classList.remove('selected');
        }
        
        // Add selection to current item (skip section headers)
        if (this.selectedIndex >= 0) {
            const resultItems = this.resultsList.querySelectorAll('.search-result-item');
            const currentSelected = resultItems[this.selectedIndex];
            if (currentSelected) {
                currentSelected.classList.add('selected');
                // Smooth scroll to selected item within dropdown
                currentSelected.scrollIntoView({ 
                    block: 'nearest',
                    behavior: 'smooth'
                });
            }
        }
    }
    
    selectResult(result) {
        console.log('Navigating to:', result.type, result.pageId, result.title);
        
        if (result.type === 'Skill') {
            // Handle skill navigation - populate the dynamic skill page
            this.showSkillPage(result);
        } else {
            // Handle curriculum and page navigation using existing showPage function
            if (typeof showPage === 'function' && result.pageId) {
                showPage(result.pageId);
            }
        }
        
        this.hideResults();
        this.clearSearch();
    }
    
    showSkillPage(skillData) {
        // Get skill content from skillPagesContent if available
        const skillContent = (typeof skillPagesContent !== 'undefined' && skillPagesContent[skillData.id]) 
            ? skillPagesContent[skillData.id] 
            : null;
            
        // Populate the skill page dynamically
        const skillPageElement = document.getElementById('skillContent');
        if (skillPageElement) {
            let content = `
                <div class="skill-header">
                    <h2>${skillData.title}</h2>
                    <div class="skill-meta">
                        <span class="skill-category">${skillData.category}</span>
                        <span class="skill-type-badge">Skill</span>
                    </div>
                </div>
                
                <div class="skill-description">
                    <p>${skillData.description}</p>
                </div>
            `;
            
            // Add actual skill content if available
            if (skillContent && skillContent.content) {
                content += `
                    <div class="skill-content">
                        ${skillContent.content}
                    </div>
                `;
            } else {
                content += `
                    <div class="skill-content">
                        <p><em>Detailed content for this skill is being developed. This skill focuses on ${skillData.description}</em></p>
                    </div>
                `;
            }
            
            // Add external link if available
            if (skillContent && skillContent.externalLink) {
                content += `
                    <div class="skill-resources">
                        <h3>External Resources</h3>
                        <a href="${skillContent.externalLink}" target="_blank" class="external-link-btn">
                            View Related Resources on SLK Hub
                        </a>
                    </div>
                `;
            }
            
            // Add back navigation
            content += `
                <div class="skill-navigation">
                    <button class="back-to-search-btn" onclick="goBack()">← Back to Previous Page</button>
                </div>
            `;
            
            skillPageElement.innerHTML = content;
        }
        
        // Navigate to the skill page
        if (typeof showPage === 'function') {
            showPage('skillPage');
        }
    }
    
    clearSearch() {
        this.searchInput.value = '';
        this.clearButton.style.display = 'none';
        this.searchInput.style.paddingRight = 'var(--spacing-sm)';
        this.hideResults();
    }
    
    showResults() {
        this.searchResults.style.display = 'block';
    }
    
    hideResults() {
        this.searchResults.style.display = 'none';
        this.selectedIndex = -1;
    }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for other scripts to load
    setTimeout(() => {
        if (typeof allSearchData !== 'undefined') {
            new SLKSearch();
        }
    }, 100);
});