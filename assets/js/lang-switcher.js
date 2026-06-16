/**
 * ============================================================
 * Al Doha - Language Detection & Auto-Redirect System
 * ============================================================
 *
 * 1. FIRST VISIT: detects browser language & redirects landing page
 *    - Arabic browser  →  index-ar.html
 *    - Non-Arabic      →  index.html (or stays if already there)
 * 2. RETURNING VISITOR: respects saved localStorage preference
 * 3. TOGGLE BUTTON: injects AR/EN button into navbar for manual switching
 *
 * Works on static hosting (GitHub Pages, Netlify, cPanel, etc.).
 * No backend required. Uses window.location.replace() for clean redirects.
 * ============================================================
 */

(function () {
    'use strict';

    /* ------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------ */
    const LS_LANG = 'aldoha_lang';          // localStorage: user's language choice
    const SS_GUARD = 'aldoha_redirecting';  // sessionStorage: redirect-loop guard

    /* ------------------------------------------------------------------
     * Page state
     * ------------------------------------------------------------------ */
    const currentPath   = window.location.pathname;
    const currentFile   = currentPath.split('/').pop() || 'index.html';
    const isArabicPage  = currentFile.includes('-ar.html');
    const currentLang   = isArabicPage ? 'ar' : 'en';
    const inAdminDir    = /\/admin\//.test(currentPath);

    // Sync the <html> lang attribute immediately
    document.documentElement.lang = currentLang;

    /* ------------------------------------------------------------------
     * Safe localStorage helpers (work in private browsing)
     * ------------------------------------------------------------------ */
    function getSavedLang() {
        try { return localStorage.getItem(LS_LANG); } catch (_) { return null; }
    }

    function saveLang(lang) {
        try { localStorage.setItem(LS_LANG, lang); } catch (_) {}
    }

    /* ------------------------------------------------------------------
     * Browser language detection
     * Uses navigator.language to check for Arabic preference.
     * Covers all Arabic locales: ar-SA, ar-EG, ar-SY, ar-IQ, etc.
     * ------------------------------------------------------------------ */
    function detectBrowserLang() {
        const lang = navigator.language || navigator.userLanguage || '';
        return lang.toLowerCase().startsWith('ar') ? 'ar' : 'en';
    }

    /* ------------------------------------------------------------------
     * Redirect with loop prevention
     * Uses window.location.replace() — no backend needed, avoids
     * polluting the browser history stack with redirect entries.
     * ------------------------------------------------------------------ */
    function redirectTo(targetFile) {
        // sessionStorage flag prevents infinite redirects
        try {
            if (sessionStorage.getItem(SS_GUARD)) return false;
            sessionStorage.setItem(SS_GUARD, 'true');
        } catch (_) {}

        const prefix = inAdminDir ? '../' : '';
        window.location.replace(prefix + targetFile);
        return true;
    }

    /* ------------------------------------------------------------------
     * REDIRECT DECISION LOGIC
     * ------------------------------------------------------------------

     * Case A — Returning visitor with saved preference:
     *   Redirect only if the current page doesn't match the saved language.
     *   This keeps the user in their chosen language across all pages.

     * Case B — First visit (no saved preference):
     *   Detect browser language, save it, and redirect the landing page
     *   (index.html ↔ index-ar.html) accordingly.
     * ------------------------------------------------------------------ */
    const savedLang = getSavedLang();

    // Override html lang with saved preference so rendering reads the correct language
    // even before redirect completes (critical since lang-switcher.js now loads first)
    if (savedLang) {
        document.documentElement.lang = savedLang;
    }

    if (savedLang) {
        /* ----- Returning visitor: honour saved preference ----- */
        if (savedLang !== currentLang) {
            const targetFile = savedLang === 'ar'
                ? currentFile.replace('.html', '-ar.html')
                : currentFile.replace('-ar.html', '.html');

            if (targetFile !== currentFile) {
                if (redirectTo(targetFile)) return;
            }
        }
    } else {
        /* ----- First visit: detect browser language & redirect to matching page ----- */
        const detectedLang = detectBrowserLang();
        saveLang(detectedLang);

        if (detectedLang !== currentLang) {
            const targetFile = detectedLang === 'ar'
                ? currentFile.replace('.html', '-ar.html')
                : currentFile.replace('-ar.html', '.html');
            if (targetFile !== currentFile) {
                if (redirectTo(targetFile)) return;
            }
        }
    }

    // No redirect was needed — clear the guard flag
    try { sessionStorage.removeItem(SS_GUARD); } catch (_) {}

    /* ==================================================================
     * LANGUAGE TOGGLE BUTTON
     * Injects an AR / EN toggle into the navbar.
     * Saves the new language preference on click so subsequent
     * auto-redirects follow the user's manual choice.
     * ================================================================== */
    function initToggleButton() {
        const isArabic = currentFile.includes('-ar.html');

        const targetFile = isArabic
            ? currentFile.replace('-ar.html', '.html')
            : currentFile.replace('.html', '-ar.html');

        const label = isArabic ? 'EN' : 'AR';
        const title = isArabic ? 'Switch to English' : 'التبديل إلى العربية';

        const nav = document.querySelector('.navbar-nav');
        if (!nav) return;

        // Remove any existing toggle to avoid duplicates
        const existing = nav.querySelector('.lang-toggle-item');
        if (existing) existing.remove();

        const li = document.createElement('li');
        li.className = 'nav-item lang-toggle-item';

        // RTL-aware margin (space between RFQ button and toggle)
        if (isArabic) {
            li.style.marginLeft = '0';
            li.style.marginRight = '0.5rem';
        } else {
            li.style.marginLeft = '0.5rem';
            li.style.marginRight = '0';
        }

        const a = document.createElement('a');
        a.href = targetFile;
        a.className = 'btn btn-outline-gold btn-sm lang-toggle';
        a.title = title;
        a.style.cssText =
            'font-weight:700; min-width:48px; text-align:center; border-width:2px; padding:0.5rem 1rem;';
        a.textContent = label;

        // Save preference so auto-redirects follow the manual switch
        a.addEventListener('click', function () {
            saveLang(isArabic ? 'en' : 'ar');
        });

        li.appendChild(a);

        // Insert after the RFQ button so order is: [Nav Links] [RFQ] [EN/AR]
        const rfqBtn = nav.querySelector('a[href*="rfq"]')?.closest('li');
        if (rfqBtn) {
            rfqBtn.after(li);
        } else {
            nav.appendChild(li);
        }
    }

    // Wait for DOM to be ready before injecting the toggle button
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initToggleButton);
    } else {
        initToggleButton();
    }
})();
