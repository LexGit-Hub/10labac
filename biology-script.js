// Global variables
let currentTopic = null;
let currentYear = null;

// Sample data for biology
const biologyData = {
    years: [
        { year: 2026, subjects: ['Anatomie'] },
        { year: 2025, subjects: ['Anatomie'] },
        { year: 2024, subjects: ['Anatomie'] },
        { year: 2023, subjects: ['Anatomie'] },
        { year: 2022, subjects: ['Anatomie'] },
        { year: 2021, subjects: ['Anatomie'] },
        { year: 2020, subjects: ['Anatomie'] },
        { year: 2019, subjects: ['Anatomie'] },
        { year: 2018, subjects: ['Anatomie'] },
        { year: 2017, subjects: ['Anatomie'] },
        { year: 2016, subjects: ['Anatomie'] },
        { year: 2015, subjects: ['Anatomie'] },
        { year: 2014, subjects: ['Anatomie'] },
        { year: 2013, subjects: ['Anatomie'] },
        { year: 2012, subjects: ['Anatomie'] },
        { year: 2011, subjects: ['Anatomie'] },
        { year: 2010, subjects: ['Anatomie'] }
    ],
    topics: {
        'anatomie': {
            name: 'Anatomie',
            subjects: ['Sistemul osos', 'Sistemul muscular', 'Sistemul nervos', 'Sistemul circulator'],
            icon: 'fas fa-heart'
        }
    }
};

// Available topics and years - no fake solutions
const availableContent = {
    years: [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010],
    topics: ['anatomie']
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    initializeTheme();
    setupNavigation();
    setupTopicCards();
    setupYearsSection();
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
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
}

// Topic cards setup
function setupTopicCards() {
    const topicCards = document.querySelectorAll('.profile-card');
    
    topicCards.forEach(card => {
        card.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            showTopicSolutions(topic);
        });
    });
}

// Years section setup
function setupYearsSection() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            filterYears(filter);
        });
    });
}

// Render years in the grid
function renderYears() {
    const yearsGrid = document.getElementById('years-grid');
    
    biologyData.years.forEach(yearData => {
        yearsGrid.appendChild(createYearCard(yearData));
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
        <div class="year-subjects">Anatomie - Biologie</div>
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
            card.style.display = (category === filter) ? 'block' : 'none';
        }
    });
}

// Show topic solutions
function showTopicSolutions(topic) {
    currentTopic = topic;
    const topicData = biologyData.topics[topic];
    
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = `Rezolvări - ${topicData.name}`;
    
    modalBody.innerHTML = `
        <div class="profile-solutions">
            <div class="profile-info">
                <div class="profile-header">
                    <i class="${topicData.icon}"></i>
                    <h3>${topicData.name}</h3>
                </div>
                <p>Selectează mai întâi tipul de sesiune:</p>
            </div>
            <div class="sessions-info">
                <h4>Tipuri de sesiuni disponibile:</h4>
                <div class="sessions-grid">
                    <div class="session-option" onclick="showTopicSessionSolutions('${topic}', 'sesiunea1')">
                        <i class="fas fa-calendar-alt"></i>
                        <span>Sesiunea I (Iunie)</span>
                    </div>
                    <div class="session-option" onclick="showTopicSessionSolutions('${topic}', 'sesiunea2')">
                        <i class="fas fa-calendar-plus"></i>
                        <span>Sesiunea a II-a (Septembrie)</span>
                    </div>
                    <div class="session-option" onclick="showTopicSessionSolutions('${topic}', 'simulare')">
                        <i class="fas fa-graduation-cap"></i>
                        <span>Simulări</span>
                    </div>
                    <div class="session-option" onclick="showTopicSessionSolutions('${topic}', 'model')">
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
                <button class="session-btn" onclick="showSessionTopics(${year}, 'sesiunea1')">
                    <i class="fas fa-calendar-alt"></i>
                    <div class="session-details">
                        <span class="session-title">Sesiunea I</span>
                        <span class="session-subtitle">Iunie - Sesiunea Principală</span>
                    </div>
                </button>
                <button class="session-btn" onclick="showSessionTopics(${year}, 'sesiunea2')">
                    <i class="fas fa-calendar-plus"></i>
                    <div class="session-details">
                        <span class="session-title">Sesiunea a II-a</span>
                        <span class="session-subtitle">Septembrie - Sesiunea de Toamnă</span>
                    </div>
                </button>
                <button class="session-btn" onclick="showSessionTopics(${year}, 'simulare')">
                    <i class="fas fa-graduation-cap"></i>
                    <div class="session-details">
                        <span class="session-title">Simulare</span>
                        <span class="session-subtitle">Simulare Națională</span>
                    </div>
                </button>
                <button class="session-btn" onclick="showSessionTopics(${year}, 'model')">
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

// Show session topics after selecting session type
function showSessionTopics(year, sessionType) {
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    const sessionNames = {
        'sesiunea1': 'Sesiunea I (Iunie)',
        'sesiunea2': 'Sesiunea a II-a (Septembrie)', 
        'simulare': 'Simulare Națională',
        'model': 'Model Oficial MEN'
    };
    
    modalTitle.textContent = `${sessionNames[sessionType]} - ${year}`;
    
    modalBody.innerHTML = `
        <div class="profile-selection">
            <h3 style="margin-bottom: 20px;">Selectează Disciplina:</h3>
            <div class="profiles-grid" style="grid-template-columns: 1fr;">
                <div class="profile-btn" onclick="redirectToSolutions('anatomie', ${year}, '${sessionType}')">
                    <i class="fas fa-heart"></i>
                    <div class="profile-details">
                        <h4>Anatomie</h4>
                        <p>Rezolvări pentru Anatomie</p>
                    </div>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        </div>
    `;
}

// Redirect to solutions page with all parameters
function redirectToSolutions(topic, year, sessionType) {
    window.location.href = `biology-solutions.html?topic=${topic}&year=${year}&session=${sessionType}`;
}

// Show topic session solutions - show years for selected topic and session
function showTopicSessionSolutions(topic, sessionType) {
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    const sessionNames = {
        'sesiunea1': 'Sesiunea I (Iunie)',
        'sesiunea2': 'Sesiunea a II-a (Septembrie)', 
        'simulare': 'Simulare Națională',
        'model': 'Model Oficial MEN'
    };
    
    modalTitle.textContent = `${sessionNames[sessionType]} - Selectează Anul`;
    
    const yearsHtml = biologyData.years.map(yearData => `
        <div class="year-btn" onclick="redirectToSolutions('${topic}', ${yearData.year}, '${sessionType}')">
            <div class="year-info">
                <h4>${yearData.year}</h4>
                <p>Rezolvări disponibile</p>
            </div>
            <i class="fas fa-arrow-right"></i>
        </div>
    `).join('');
    
    modalBody.innerHTML = `
        <div class="year-selection">
            <h3 style="margin-bottom: 20px;">Ani disponibili:</h3>
            <div class="years-selection" style="display: grid; gap: 10px;">
                ${yearsHtml}
            </div>
        </div>
    `;
}

// Modal functions
function showModal() {
    document.getElementById('solutions-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('solutions-modal').style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('solutions-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Scroll functions
function scrollToTopics() {
    document.getElementById('topics').scrollIntoView({ behavior: 'smooth' });
}

function scrollToYears() {
    document.getElementById('years').scrollIntoView({ behavior: 'smooth' });
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.profile-card, .year-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add button animations
function addButtonAnimations() {
    const buttons = document.querySelectorAll('.btn, .profile-card, .year-card');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        btn.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
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

// Export functions for global access
window.scrollToTopics = scrollToTopics;
window.scrollToYears = scrollToYears;
window.closeModal = closeModal;
window.showTopicSessionSolutions = showTopicSessionSolutions;
window.redirectToSolutions = redirectToSolutions;
window.showSessionTopics = showSessionTopics;
window.showYearSolutions = showYearSolutions;
window.toggleTheme = toggleTheme;
