// Global variables
let currentProfile = null;
let currentYear = null;

// Sample data for demonstration - Mathematics only
const examData = {
    years: [
        { year: 2025, subjects: ['Matematică'] },
        { year: 2024, subjects: ['Matematică'] },
        { year: 2023, subjects: ['Matematică'] },
        { year: 2022, subjects: ['Matematică'] },
        { year: 2021, subjects: ['Matematică'] },
        { year: 2020, subjects: ['Matematică'] },
        { year: 2019, subjects: ['Matematică'] },
        { year: 2018, subjects: ['Matematică'] },
        { year: 2017, subjects: ['Matematică'] },
        { year: 2016, subjects: ['Matematică'] },
        { year: 2015, subjects: ['Matematică'] },
        { year: 2014, subjects: ['Matematică'] },
        { year: 2013, subjects: ['Matematică'] },
        { year: 2012, subjects: ['Matematică'] },
        { year: 2011, subjects: ['Matematică'] },
        { year: 2010, subjects: ['Matematică'] }
    ],
    profiles: {
        'stiinte-naturii': {
            name: 'Științele Naturii',
            subjects: ['Funcții și limite', 'Derivate și integrale', 'Geometrie analitică', 'Trigonometrie'],
            icon: 'fas fa-microscope'
        },
        'matematica-informatica': {
            name: 'Matematică-Informatică',
            subjects: ['Analiză matematică', 'Algebră liniară', 'Geometrie diferențială', 'Ecuații diferențiale'],
            icon: 'fas fa-laptop-code'
        },
        'tehnologic': {
            name: 'Tehnologic',
            subjects: ['Funcții elementare', 'Statistică aplicată', 'Probabilități', 'Geometrie planimetrică'],
            icon: 'fas fa-cogs'
        },
        'pedagogic': {
            name: 'Pedagogic',
            subjects: ['Algebră și geometrie', 'Metodica predării', 'Psihopedagogie', 'Evaluare educațională'],
            icon: 'fas fa-chalkboard-teacher'
        }
    }
};

// Available subjects and years - no fake solutions
const availableContent = {
    years: [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010],
    profiles: ['stiinte-naturii', 'matematica-informatica', 'tehnologic', 'pedagogic']
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    initializeTheme();
    setupNavigation();
    setupProfileCards();
    setupYearsSection();
    setupContactForm();
    setupScrollAnimations();
    addButtonAnimations();
    renderYears();
}

// Navigation setup
function setupNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// Profile cards setup
function setupProfileCards() {
    const profileCards = document.querySelectorAll('.profile-card');
    
    profileCards.forEach(card => {
        card.addEventListener('click', function() {
            const profile = this.getAttribute('data-profile');
            showProfileSolutions(profile);
        });
    });
}

// Years section setup
function setupYearsSection() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterYears(filter);
        });
    });
}

// Render years in the grid
function renderYears() {
    const yearsGrid = document.getElementById('years-grid');
    
    examData.years.forEach(yearData => {
        const yearCard = createYearCard(yearData);
        yearsGrid.appendChild(yearCard);
    });
}

// Create year card element
function createYearCard(yearData) {
    const card = document.createElement('div');
    card.className = 'year-card';
    card.setAttribute('data-year', yearData.year);
    
    // Determine category for filtering
    if (yearData.year >= 2020) {
        card.setAttribute('data-category', 'recent');
    } else if (yearData.year >= 2015) {
        card.setAttribute('data-category', 'older');
    } else {
        card.setAttribute('data-category', 'archive');
    }
    
    card.innerHTML = `
        <div class="year-number">${yearData.year}</div>
        <div class="year-subjects">Matematică - toate profilurile</div>
    `;
    
    card.addEventListener('click', function() {
        showYearSolutions(yearData.year);
    });
    
    return card;
}

// Filter years by category
function filterYears(filter) {
    const yearCards = document.querySelectorAll('.year-card');
    
    yearCards.forEach(card => {
        if (filter === 'all') {
            card.style.display = 'block';
        } else {
            const category = card.getAttribute('data-category');
            card.style.display = category === filter ? 'block' : 'none';
        }
    });
}

// Show profile solutions
function showProfileSolutions(profile) {
    currentProfile = profile;
    const profileData = examData.profiles[profile];
    
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = `Rezolvări - ${profileData.name}`;
    
    modalBody.innerHTML = `
        <div class="profile-solutions">
            <div class="profile-info">
                <div class="profile-header">
                    <i class="${profileData.icon}"></i>
                    <h3>${profileData.name}</h3>
                </div>
                <p>Selectează mai întâi tipul de sesiune:</p>
            </div>
            <div class="sessions-info">
                <h4>Tipuri de sesiuni disponibile:</h4>
                <div class="sessions-grid">
                    <div class="session-option" onclick="showProfileSessionSolutions('${profile}', 'sesiunea1')">
                        <i class="fas fa-calendar-alt"></i>
                        <span>Sesiunea I (Iunie)</span>
                    </div>
                    <div class="session-option" onclick="showProfileSessionSolutions('${profile}', 'sesiunea2')">
                        <i class="fas fa-calendar-plus"></i>
                        <span>Sesiunea a II-a (Septembrie)</span>
                    </div>
                    <div class="session-option" onclick="showProfileSessionSolutions('${profile}', 'speciala')">
                        <i class="fas fa-star"></i>
                        <span>Sesiunea Specială</span>
                    </div>
                    <div class="session-option" onclick="showProfileSessionSolutions('${profile}', 'simulare')">
                        <i class="fas fa-graduation-cap"></i>
                        <span>Simulări</span>
                    </div>
                    <div class="session-option" onclick="showProfileSessionSolutions('${profile}', 'model')">
                        <i class="fas fa-file-alt"></i>
                        <span>Modele Oficiale</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    showModal();
}

// Show year solutions
function showYearSolutions(year) {
    currentYear = year;
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = `Selectează Tipul de Examen - ${year}`;
    
    modalBody.innerHTML = `
        <div class="session-selection">
            <div class="session-info">
                <h3>Anul ${year}</h3>
                <p>Selectează tipul de examen pentru care vrei să vezi rezolvările:</p>
            </div>
            <div class="session-buttons">
                <button class="session-btn" onclick="showSessionProfiles(${year}, 'sesiunea1')">
                    <i class="fas fa-calendar-alt"></i>
                    <div class="session-details">
                        <span class="session-title">Sesiunea I</span>
                        <span class="session-subtitle">Iunie - Sesiunea Principală</span>
                    </div>
                </button>
                <button class="session-btn" onclick="showSessionProfiles(${year}, 'sesiunea2')">
                    <i class="fas fa-calendar-plus"></i>
                    <div class="session-details">
                        <span class="session-title">Sesiunea a II-a</span>
                        <span class="session-subtitle">Septembrie - Sesiunea de Toamnă</span>
                    </div>
                </button>
                <button class="session-btn" onclick="showSessionProfiles(${year}, 'speciala')">
                    <i class="fas fa-star"></i>
                    <div class="session-details">
                        <span class="session-title">Sesiunea Specială</span>
                        <span class="session-subtitle">Pentru Situații Deosebite</span>
                    </div>
                </button>
                <button class="session-btn" onclick="showSessionProfiles(${year}, 'simulare')">
                    <i class="fas fa-graduation-cap"></i>
                    <div class="session-details">
                        <span class="session-title">Simulare</span>
                        <span class="session-subtitle">Simulare Națională</span>
                    </div>
                </button>
                <button class="session-btn" onclick="showSessionProfiles(${year}, 'model')">
                    <i class="fas fa-file-alt"></i>
                    <div class="session-details">
                        <span class="session-title">Model</span>
                        <span class="session-subtitle">Model Oficial MEN</span>
                    </div>
                </button>
            </div>
        </div>
    `;
    
    showModal();
}

// Show session profiles after selecting session type
function showSessionProfiles(year, sessionType) {
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    const sessionNames = {
        'sesiunea1': 'Sesiunea I (Iunie)',
        'sesiunea2': 'Sesiunea a II-a (Septembrie)', 
        'speciala': 'Sesiunea Specială',
        'simulare': 'Simulare Națională',
        'model': 'Model Oficial MEN'
    };
    
    modalTitle.textContent = `${sessionNames[sessionType]} - ${year}`;
    
    modalBody.innerHTML = `
        <div class="profile-selection">
            <div class="session-info">
                <h3>${sessionNames[sessionType]} - Anul ${year}</h3>
                <p>Selectează profilul pentru care vrei să vezi rezolvările:</p>
            </div>
            <div class="profiles-grid">
                ${Object.entries(examData.profiles).map(([key, profile]) => `
                    <button class="profile-btn" onclick="showProfileYearSolutions('${key}', ${year}, '${sessionType}')">
                        <i class="${profile.icon}"></i>
                        <div class="profile-details">
                            <span class="profile-name">${profile.name}</span>
                            <span class="profile-desc">Matematică</span>
                        </div>
                    </button>
                `).join('')}
            </div>
            <div class="back-button">
                <button class="btn-back" onclick="showYearSolutions(${year})">
                    <i class="fas fa-arrow-left"></i>
                    Înapoi la Tipurile de Examen
                </button>
            </div>
        </div>
    `;
}

// Show specific profile and year solutions - redirect to new page
function showProfileYearSolutions(profile, year, sessionType = null) {
    const profileData = examData.profiles[profile];
    
    // Create URL for the solutions page
    let solutionsUrl = `solutions.html?profile=${profile}&year=${year}`;
    if (sessionType) {
        solutionsUrl += `&session=${sessionType}`;
    }
    
    // Redirect to the solutions page
    window.location.href = solutionsUrl;
}

// Show profile session solutions - show years for selected profile and session
function showProfileSessionSolutions(profile, sessionType) {
    const profileData = examData.profiles[profile];
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    const sessionNames = {
        'sesiunea1': 'Sesiunea I (Iunie)',
        'sesiunea2': 'Sesiunea a II-a (Septembrie)',
        'speciala': 'Sesiunea Specială',
        'simulare': 'Simulări',
        'model': 'Modele Oficiale'
    };
    
    modalTitle.textContent = `${profileData.name} - ${sessionNames[sessionType]}`;
    
    modalBody.innerHTML = `
        <div class="profile-session-solutions">
            <div class="session-info">
                <div class="session-header">
                    <i class="${profileData.icon}"></i>
                    <h3>${profileData.name}</h3>
                    <span class="session-badge">${sessionNames[sessionType]}</span>
                </div>
                <p>Acum selectează anul pentru care vrei să vezi rezolvările:</p>
            </div>
            <div class="years-selection">
                ${examData.years.map(yearData => `
                    <button class="year-btn" onclick="redirectToSolutions('${profile}', ${yearData.year}, '${sessionType}')">
                        ${yearData.year}
                    </button>
                `).join('')}
            </div>
            <div class="back-navigation">
                <button class="btn-back" onclick="showProfileSolutions('${profile}')">
                    <i class="fas fa-arrow-left"></i>
                    Înapoi la Sesiuni
                </button>
            </div>
        </div>
    `;
}

// Redirect to solutions page with all parameters
function redirectToSolutions(profile, year, sessionType) {
    let solutionsUrl = `solutions.html?profile=${profile}&year=${year}`;
    if (sessionType === 'simulare' || sessionType === 'model') {
        solutionsUrl += `&type=${sessionType}`;
    } else {
        solutionsUrl += `&session=${sessionType}`;
    }
    window.location.href = solutionsUrl;
}

// This function has been removed - users are redirected to dedicated solution pages

// Modal functions
function showModal() {
    const modal = document.getElementById('solutions-modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('solutions-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('solutions-modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Scroll functions
function scrollToProfiles() {
    document.getElementById('profiles').scrollIntoView({ behavior: 'smooth' });
}

function scrollToYears() {
    document.getElementById('years').scrollIntoView({ behavior: 'smooth' });
}

// Contact form setup
function setupContactForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            
            // Show success message (in a real app, you'd send this to a server)
            alert('Mulțumim pentru mesaj! Îți vom răspunde în cel mai scurt timp possible.');
            
            // Reset form
            form.reset();
        });
    }
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.profile-card, .year-card, .stat-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add subtle button animations
function addButtonAnimations() {
    const buttons = document.querySelectorAll('.btn, .profile-card, .year-card, .session-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add a subtle scale animation on click
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
        
        // Add keyboard support
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.click();
            }
        });
    });
    
    // Add smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Dark Mode Functionality
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add smooth transition for theme change
    html.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        html.style.transition = '';
    }, 300);
}

// Initialize theme from localStorage or system preference
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let theme = 'light';
    
    if (savedTheme) {
        theme = savedTheme;
    } else if (systemPrefersDark) {
        theme = 'dark';
    }
    
    document.documentElement.setAttribute('data-theme', theme);
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
    if (!localStorage.getItem('theme')) {
        const theme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
    }
});

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add loading animation for dynamic content
function showLoading(element) {
    element.innerHTML = `
        <div class="loading-spinner">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Se încarcă...</p>
        </div>
    `;
}

// Search functionality (for future enhancement)
function searchSolutions(query) {
    // This would implement search functionality across all solutions
    console.log('Searching for:', query);
}

// Export functions for global access
window.scrollToProfiles = scrollToProfiles;
window.scrollToYears = scrollToYears;
window.closeModal = closeModal;
window.showProfileYearSolutions = showProfileYearSolutions;
window.showProfileSessionSolutions = showProfileSessionSolutions;
window.redirectToSolutions = redirectToSolutions;
window.showSessionProfiles = showSessionProfiles;
window.showYearSolutions = showYearSolutions;
window.toggleTheme = toggleTheme;
