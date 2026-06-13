(function() {
    'use strict';

    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop() || 'index.html';
    const isArabic = currentFile.includes('-ar.html');
    const currentLang = isArabic ? 'ar' : 'en';

    document.documentElement.lang = currentLang;

    try { localStorage.setItem('aldoha_lang', currentLang); } catch (e) {}

    const storedLang = (function() {
        try { return localStorage.getItem('aldoha_lang'); } catch (e) { return null; }
    })();

    if (storedLang && storedLang !== currentLang) {
        const isInSubdir = /\/admin\//.test(currentPath);
        let targetFile;
        if (storedLang === 'ar') {
            targetFile = currentFile.replace('.html', '-ar.html');
        } else {
            targetFile = currentFile.replace('-ar.html', '.html');
        }
        if (targetFile !== currentFile) {
            const href = isInSubdir ? '../' + targetFile : targetFile;
            if (!sessionStorage.getItem('aldoha_redirecting')) {
                sessionStorage.setItem('aldoha_redirecting', 'true');
                window.location.replace(href);
                return;
            }
        }
    }
    sessionStorage.removeItem('aldoha_redirecting');

    function init() {
        const isArabic = currentFile.includes('-ar.html');
        const isInSubdir = /\/admin\//.test(currentPath);

        let targetFile;
        if (isArabic) {
            targetFile = currentFile.replace('-ar.html', '.html');
        } else {
            targetFile = currentFile.replace('.html', '-ar.html');
        }

        const fullTarget = isInSubdir ? '../' + targetFile : targetFile;
        const label = isArabic ? 'EN' : 'AR';
        const title = isArabic ? 'Switch to English' : 'التبديل إلى العربية';

        const nav = document.querySelector('.navbar-nav');
        if (!nav) {
            return;
        }

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

        li.innerHTML = `
            <a href="${fullTarget}"
               class="btn btn-outline-gold btn-sm lang-toggle"
               title="${title}"
               style="font-weight:700; min-width:48px; text-align:center; border-width:2px; padding:0.5rem 1rem;">
                ${label}
            </a>
        `;

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
