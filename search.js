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
        
        // Add each result
        this.currentResults.forEach((result, index) => {
            const resultElement = this.createResultElement(result, index);
            this.resultsList.appendChild(resultElement);
        });
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
        // Remove previous selection
        const previousSelected = this.resultsList.querySelector('.search-result-item.selected');
        if (previousSelected) {
            previousSelected.classList.remove('selected');
        }
        
        // Add selection to current item
        if (this.selectedIndex >= 0) {
            const currentSelected = this.resultsList.children[this.selectedIndex];
            if (currentSelected) {
                currentSelected.classList.add('selected');
                currentSelected.scrollIntoView({ block: 'nearest' });
            }
        }
    }
    
    selectResult(result) {
        // Use existing showPage function to navigate
        if (typeof showPage === 'function' && result.pageId) {
            showPage(result.pageId);
            this.hideResults();
            this.clearSearch();
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