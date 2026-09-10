// ========================
// PORTFOLIO DATA
// ========================

const projectData = [
    {
        id: 1,
        title: "Luxe Dining",
        category: "restaurant",
        description: "A premium restaurant website showcasing elegant menu design, reservation system, and stunning food photography. Built with modern web standards for optimal user experience.",
        image: "images/restaurant.jpg",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        liveUrl: "https://seadadefo36-jpg.github.io/restaurant-website/",
githubUrl: "https://github.com/seadadefo36-jpg/restaurant-website",
        
        details: "This project demonstrates expertise in creating visually appealing restaurant websites with interactive features. The site includes an animated menu, reservation form, and photo gallery.",
        features: [
            "Responsive menu display",
            "Online reservation system",
            "Photo gallery with lightbox",
            "Location integration",
            "Mobile-optimized design"
        ]
    },
    {
        id: 2,
        title: "Nova Estates",
        category: "real-estate",
        description: "A comprehensive real estate platform featuring property listings, advanced filtering, and detailed property information. Designed for maximum usability and conversion.",
        image: "images/nova-estates.jpg",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        liveUrl: "https://seadadefo36-jpg.github.io/nova-estates/",
githubUrl: "https://github.com/seadadefo36-jpg/nova-estates",
        
        details: "Nova Estates showcases proficiency in building complex property management interfaces with smooth filtering, search functionality, and detailed property views.",
        features: [
            "Advanced property filtering",
            "Search functionality",
            "Property detail pages",
            "Contact forms",
            "Responsive grid layout",
            "Image gallery"
        ]
    },
    {
        id: 3,
        title: "DriveOn",
        category: "automotive",
        description: "A modern car rental website with vehicle catalog, booking system, and customer testimonials. Emphasizes user-friendly interface and seamless booking experience.",
        image: "images/driveon.jpg",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        liveUrl: "https://seadadefo36-jpg.github.io/driveon-car-rental/",
githubUrl: "https://github.com/seadadefo36-jpg/driveon-car-rental",
        
        details: "DriveOn demonstrates expertise in creating e-commerce style platforms with dynamic pricing, vehicle filters, and booking functionality.",
        features: [
            "Vehicle catalog with specs",
            "Booking system",
            "Price calculator",
            "Customer reviews",
            "Responsive design",
            "Mobile-friendly booking"
        ]
    },
    {
        id: 4,
        title: "Nexus Admin Dashboard",
        category: "dashboard",
        description: "An intuitive admin dashboard featuring data visualization, analytics, and user management. Built for clarity and efficient workflow with real-time data display.",
        image: "images/dashboard.jpg",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        liveUrl: "https://seadadefo36-jpg.github.io/nexus-dashboard/",
githubUrl: "https://github.com/seadadefo36-jpg/nexus-dashboard",
        
        details: "Nexus Dashboard showcases ability to create complex data-heavy interfaces with clear hierarchy, interactive charts, and efficient navigation.",
        features: [
            "Data visualization",
            "Analytics dashboard",
            "User management",
            "Activity logs",
            "Report generation",
            "Dark theme UI"
        ]
    }
];

// ========================
// NAVIGATION & SCROLLING
// ========================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollAnimations();
    initPortfolioFilters();
    initContactForm();
    setupYearInFooter();
    initCounterAnimation();
    setupBackToTopButton();
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (!mobileMenuBtn || !navLinks) return;

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

});

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Set active link on scroll
    window.addEventListener('scroll', () => {
        updateActiveNavLink();
    });
    
    // Handle navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const sectionTop = section.offsetTop - navHeight;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Back to top button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function setupBackToTopButton() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
}

// ========================
// SCROLL ANIMATIONS
// ========================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animate');
                
                // Animate elements with specific delays
                const children = entry.target.querySelectorAll('.skill-card, .service-card, .portfolio-card, .why-card, .process-card');
                children.forEach((child, index) => {
                    child.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    document.querySelectorAll('.about, .skills, .services, .portfolio, .why-work, .process, .contact').forEach(section => {
        observer.observe(section);
    });
}

// ========================
// PORTFOLIO FILTERING
// ========================

function initPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            const filter = this.getAttribute('data-filter');
            
            portfolioCards.forEach(card => {
                card.classList.remove('hidden');
                if (filter !== 'all' && card.getAttribute('data-category') !== filter) {
                    card.classList.add('hidden');
                } else {
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                }
            });
        });
    });
}

// ========================
// PROJECT MODAL
// ========================

function openProjectModal(projectIndex) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectData[projectIndex];
    
    let featuresHTML = '<ul style="list-style: none; padding: 0;">';
    project.features.forEach(feature => {
        featuresHTML += `<li style="padding: 0.5rem 0; color: #a0a0a0;">✓ ${feature}</li>`;
    });
    featuresHTML += '</ul>';
    
    modalBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 8px; margin-bottom: 2rem;" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%221a1a2e%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%2300d4ff%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${project.title}%3C/text%3E%3C/svg%3E'">
        <h2 style="color: #00d4ff; margin-bottom: 0.5rem;">${project.title}</h2>
        <p style="color: #00ff88; margin-bottom: 1.5rem;">${project.category.charAt(0).toUpperCase() + project.category.slice(1)} Website</p>
        
        <h3 style="color: #00d4ff; font-size: 1.2rem; margin-bottom: 1rem; margin-top: 1.5rem;">Project Details</h3>
        <p>${project.details}</p>
        
        <h3 style="color: #00d4ff; font-size: 1.2rem; margin-bottom: 1rem; margin-top: 1.5rem;">Key Features</h3>
        ${featuresHTML}
        
        <h3 style="color: #00d4ff; font-size: 1.2rem; margin-bottom: 1rem; margin-top: 1.5rem;">Technologies Used</h3>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem;">
            ${project.technologies.map(tech => `<span style="background: rgba(0, 212, 255, 0.2); color: #00d4ff; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">${tech}</span>`).join('')}
        </div>
        
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="${project.liveUrl}" target="_blank" class="btn btn-primary" style="text-decoration: none;">Live Demo</a>
            <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary" style="text-decoration: none;">View on GitHub</a>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
}

// Close modal when clicking outside
document.getElementById('projectModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// ========================
// CONTACT FORM VALIDATION
// ========================

function initContactForm() {
    const form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', function(e) {

        // Get form values
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const subject = document.getElementById('contactSubject').value.trim();
        const message = document.getElementById('contactMessage').value.trim();

        // Clear previous errors
        clearErrorMessages();

        // Validate
        let isValid = true;

        if (!name) {
            showError('nameError', 'Please enter your name');
            isValid = false;
        }

        if (!email) {
            showError('emailError', 'Please enter your email');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email');
            isValid = false;
        }

        if (!subject) {
            showError('subjectError', 'Please enter a subject');
            isValid = false;
        }

        if (!message) {
            showError('messageError', 'Please enter a message');
            isValid = false;
        } else if (message.length < 10) {
            showError('messageError', 'Message must be at least 10 characters');
            isValid = false;
        }

        // Stop submission if validation fails
        if (!isValid) {
            e.preventDefault();
            return;
        }

        // IMPORTANT:
        // Do NOT use e.preventDefault() here.
        // The form will now be submitted to Formspree.
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);

    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearErrorMessages() {
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
        error.classList.remove('show');
    });
}
// ========================
// ANIMATED COUNTERS
// ========================

function initCounterAnimation() {
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                animateStats();
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.about-stats').forEach(stats => {
        observer.observe(stats);
    });
}

function animateStats() {
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach(item => {
        const targetValue = parseInt(item.getAttribute('data-value'));
        const numberElement = item.querySelector('.stat-number');
        let currentValue = 0;
        
        const increment = Math.ceil(targetValue / 50);
        const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(interval);
            }
            numberElement.textContent = currentValue;
        }, 30);
    });
}

// ========================
// FOOTER YEAR
// ========================

function setupYearInFooter() {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// ========================
// UTILITY FUNCTIONS
// ========================

// Add keyboard support for navigation
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search or show command palette
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        scrollToSection('portfolio');
    }
});

// Handle form input validation in real-time
document.addEventListener('input', function(e) {
    if (e.target.id === 'contactEmail') {
        const emailError = document.getElementById('emailError');
        if (e.target.value && !isValidEmail(e.target.value)) {
            showError('emailError', 'Please enter a valid email');
        } else {
            emailError.textContent = '';
            emailError.classList.remove('show');
        }
    }
    
    if (e.target.id === 'contactMessage') {
        const messageError = document.getElementById('messageError');
        if (e.target.value && e.target.value.length < 10) {
            showError('messageError', 'Message must be at least 10 characters');
        } else {
            messageError.textContent = '';
            messageError.classList.remove('show');
        }
    }
});

// Improve button focus states for accessibility
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.blur();
    }
});

// ========================
// PERFORMANCE OPTIMIZATION
// ========================

// Lazy load images when they come into view
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================
// LOGGING & DEBUGGING
// ========================

// Check if all required elements are present
function validateStructure() {
    const requiredElements = [
        'navbar',
        'navLinks',
        'home',
        'about',
        'skills',
        'services',
        'portfolio',
        'contact',
        'contactForm',
        'projectModal'
    ];
    
    const missingElements = requiredElements.filter(id => !document.getElementById(id));
    
    if (missingElements.length > 0) {
        console.warn('Missing HTML elements:', missingElements);
    }
}

// Validate on load
window.addEventListener('load', validateStructure);

// ========================
// ACCESSIBILITY ENHANCEMENTS
// ========================

// Add ARIA labels for better accessibility
document.querySelectorAll('.nav-link').forEach(link => {
    link.setAttribute('role', 'navigation');
});

// Ensure all buttons are keyboard accessible
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            this.click();
        }
    });
});

// ========================
// PRINT STYLES
// ========================

// Hide elements that shouldn't be printed
window.addEventListener('beforeprint', function() {
    document.querySelector('.navbar').style.display = 'none';
    document.querySelector('.back-to-top').style.display = 'none';
});

window.addEventListener('afterprint', function() {
    document.querySelector('.navbar').style.display = 'block';
    document.querySelector('.back-to-top').classList.remove('show');
});

// ========================
// INITIALIZATION COMPLETE
// ========================

console.log('Portfolio website initialized successfully!');

