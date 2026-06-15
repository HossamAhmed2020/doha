/**
 * Al Doha For Import & Export
 * Scroll Animation Controller
 */

(function() {
    'use strict';
    
    // ==========================================
    // Intersection Observer for Scroll Animations
    // ==========================================
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.is-visible)');
        
        if (animatedElements.length === 0) return;
        
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Expose for dynamic content
    window.refreshAnimations = initScrollAnimations;
    
    // ==========================================
    // Parallax Effect for Hero
    // ==========================================
    function initParallax() {
        const heroVideo = document.querySelector('.hero__video');
        if (!heroVideo) return;
        
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * 0.3;
                    heroVideo.style.transform = `translateY(${rate}px) scale(1.1)`;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
    
    // ==========================================
    // Initialize
    // ==========================================
    function init() {
        initScrollAnimations();
        initParallax();
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();