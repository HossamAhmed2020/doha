/**
 * Al Doha For Import & Export
 * Main JavaScript Module
 */

(function() {
    'use strict';

    // DOM Elements
    const navbar = document.getElementById('mainNavbar');
    const backToTop = document.getElementById('backToTop');
    const floatingWhatsapp = document.getElementById('floatingWhatsapp');
    const WHATSAPP_NUMBER = '201010952339';
    
    // ==========================================
    // Navbar Scroll Effect
    // ==========================================
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // ==========================================
    // Back to Top Visibility
    // ==========================================
    function handleBackToTop() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    // ==========================================
    // WhatsApp CTA Visibility
    // ==========================================
    function handleWhatsappVisibility() {
        if (window.scrollY > 500) {
            floatingWhatsapp.classList.add('visible');
        } else {
            floatingWhatsapp.classList.remove('visible');
        }
    }

    // ==========================================
    // WhatsApp CTA Dynamic Link
    // ==========================================
    function updateWhatsAppLink() {
        if (!floatingWhatsapp) return;

        const isArabic = document.documentElement.lang === 'ar';
        const isProductPage = window.location.pathname.indexOf('product-details') !== -1;

        let message;

        if (isProductPage) {
            const titleEl = document.querySelector('.product-info__title');
            const productName = titleEl ? titleEl.textContent.trim() : '';

            if (isArabic) {
                message = '\u0623\u0631\u064A\u062F \u0623\u0646 \u0623\u0633\u062A\u0641\u0633\u0631 \u0639\u0646:\n' + productName + '\n\u0631\u0627\u0628\u0637 \u0627\u0644\u0635\u0641\u062D\u0629:\n' + window.location.href;
            } else {
                message = 'I would like to inquire about:\n' + productName + '\nPage URL:\n' + window.location.href;
            }
        } else {
            message = isArabic ? '\u0623\u0631\u064A\u062F \u0623\u0646 \u0623\u0633\u062A\u0641\u0633\u0631 \u0639\u0646' : 'I would like to inquire about';
        }

        floatingWhatsapp.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
    }
    
    // ==========================================
    // Smooth Scroll for Anchor Links
    // ==========================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                        if (bsCollapse) bsCollapse.hide();
                    }
                }
            });
        });
    }
    
    // ==========================================
    // Active Navigation Link
    // ==========================================
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbar.offsetHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // ==========================================
    // Counter Animation
    // ==========================================
    function animateCounters() {
        const counters = document.querySelectorAll('.hero__stat-number[data-count]');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const startTime = performance.now();
            const startValue = 0;
            
            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Ease out quart
                const easeProgress = 1 - Math.pow(1 - progress, 4);
                const currentValue = Math.floor(startValue + (target - startValue) * easeProgress);
                
                counter.textContent = currentValue;
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            }
            
            // Use IntersectionObserver to trigger when visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        requestAnimationFrame(updateCounter);
                        observer.unobserve(counter);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    }
    
    // ==========================================
    // Throttle Utility
    // ==========================================
    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // ==========================================
    // Initialize
    // ==========================================
    function init() {
        // Event listeners
        window.addEventListener('scroll', throttle(() => {
            handleNavbarScroll();
            handleBackToTop();
            handleWhatsappVisibility();
            setActiveNavLink();
        }, 100));
        
        // Initial calls
        handleNavbarScroll();
        handleBackToTop();
        handleWhatsappVisibility();
        initSmoothScroll();
        animateCounters();
        updateWhatsAppLink();
        
        // Back to top click
        if (backToTop) {
            backToTop.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();