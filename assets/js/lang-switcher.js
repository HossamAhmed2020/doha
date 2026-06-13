(function() {
    'use strict';

    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop() || 'index.html';
    const isArabic = currentFile.includes('-ar.html');
    const currentLang = isArabic ? 'ar' : 'en';

    document.documentElement.lang = currentLang;

    function getSavedLang() {
        try { return localStorage.getItem('aldoha_lang'); } catch (e) { return null; }
    }

    function saveLang(lang) {
        try { localStorage.setItem('aldoha_lang', lang); } catch (e) {}
    }

    function detectBrowserLang() {
        try {
            const langs = navigator.languages || [navigator.language || navigator.userLanguage || ''];
            for (const lang of langs) {
                if (typeof lang === 'string' && lang.split('-')[0] === 'ar') return 'ar';
            }
        } catch (e) {}
        return 'en';
    }

    function redirectTo(href) {
        if (!sessionStorage.getItem('aldoha_redirecting')) {
            sessionStorage.setItem('aldoha_redirecting', 'true');
            window.location.replace(href);
            return true;
        }
        return false;
    }

    const isInSubdir = /\/admin\//.test(currentPath);
    const storedLang = getSavedLang();

    if (storedLang) {
        if (storedLang !== currentLang) {
            let targetFile;
            if (storedLang === 'ar') {
                targetFile = currentFile.replace('.html', '-ar.html');
            } else {
                targetFile = currentFile.replace('-ar.html', '.html');
            }
            if (targetFile !== currentFile) {
                if (redirectTo(targetFile)) return;
            }
        }
    } else {
        const detectedLang = detectBrowserLang();
        if (detectedLang !== currentLang) {
            const targetFile = detectedLang === 'ar' ? 'index-ar.html' : 'index.html';
            const targetHref = isInSubdir ? '../' + targetFile : targetFile;
            if (redirectTo(targetHref)) return;
        }
        saveLang(detectedLang);
    }
    sessionStorage.removeItem('aldoha_redirecting');

    function init() {
        const isArabic = currentFile.includes('-ar.html');

        let targetFile;
        if (isArabic) {
            targetFile = currentFile.replace('-ar.html', '.html');
        } else {
            targetFile = currentFile.replace('.html', '-ar.html');
        }

        const label = isArabic ? 'EN' : 'AR';
        const title = isArabic ? 'Switch to English' : 'التبديل إلى العربية';

        const nav = document.querySelector('.navbar-nav');
        if (!nav) return;

        const existing = nav.querySelector('.lang-toggle-item');
        if (existing) existing.remove();

        const li = document.createElement('li');
        li.className = 'nav-item lang-toggle-item';

        if (isArabic) {
            li.style.marginLeft = '0';
            li.style.marginRight = '0.75rem';
        } else {
            li.style.marginLeft = '0.75rem';
            li.style.marginRight = '0';
        }

        const a = document.createElement('a');
        a.href = targetFile;
        a.className = 'btn btn-outline-gold btn-sm lang-toggle';
        a.title = title;
        a.style.cssText = 'font-weight:700; min-width:48px; text-align:center; border-width:2px; padding:0.5rem 1rem;';
        a.textContent = label;
        a.addEventListener('click', function() {
            saveLang(isArabic ? 'en' : 'ar');
        });

        li.appendChild(a);

        const rfqBtn = nav.querySelector('a[href*="rfq"]')?.closest('li');
        if (rfqBtn) {
            rfqBtn.before(li);
        } else {
            nav.appendChild(li);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
