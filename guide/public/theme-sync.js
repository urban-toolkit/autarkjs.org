/**
 * theme-sync.js
 *
 * Reads the VitePress theme preference from localStorage and applies
 * `class="dark"` to <html> on static pages, keeping them in sync with
 * the VitePress dark/light toggle.
 *
 * VitePress stores: localStorage.key = 'vitepress-theme-appearance'
 *                   values: 'dark' | 'light' | 'auto' | null (default auto)
 */
(function () {
    var PRISM_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/';

    function isDarkMode() {
        var pref = localStorage.getItem('vitepress-theme-appearance');
        if (pref === 'dark') return true;
        if (pref === 'light') return false;
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // TypeDoc's CSS already has :root[data-theme="dark"] and :root[data-theme="light"]
    // selectors — we just need to set the attribute on the iframe's root element.
    function syncTypedocTheme(iframeDoc, dark) {
        iframeDoc.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    }

    // Attach persistent load listeners on iframes (called once from DOMContentLoaded).
    // Persistent (no { once: true }) so internal TypeDoc navigation also gets synced.
    function setupIframeListeners() {
        document.querySelectorAll('iframe').forEach(function (iframe) {
            iframe.addEventListener('load', function () {
                try { syncTypedocTheme(iframe.contentDocument, isDarkMode()); } catch (e) {}
            });
        });
    }

    // For iframes that are already loaded, update immediately (called on theme change).
    function syncLoadedIframes(dark) {
        document.querySelectorAll('iframe').forEach(function (iframe) {
            try {
                var doc = iframe.contentDocument;
                if (doc && doc.documentElement) {
                    syncTypedocTheme(doc, dark);
                }
            } catch (e) { /* cross-origin, skip */ }
        });
    }

    function updatePrismTheme(dark) {
        var link = document.getElementById('prism-theme');
        if (!link) return;
        link.href = PRISM_CDN + (dark ? 'prism-one-dark.min.css' : 'prism-one-light.min.css');
    }

    function updateNavLogo(dark) {
        document.querySelectorAll('.logo-icon').forEach(function (img) {
            img.src = dark ? '../imgs/logo_small_dark.svg' : '../imgs/logo_small.svg';
        });
    }

    function applyTheme(dark) {
        document.documentElement.classList.toggle('dark', dark);
        updatePrismTheme(dark);
        updateNavLogo(dark);
        syncLoadedIframes(dark);
    }

    // Apply class immediately (before DOM loads) to prevent FOUC
    document.documentElement.classList.toggle('dark', isDarkMode());

    // After DOM ready: attach iframe load listeners + initial sync
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            setupIframeListeners();
            applyTheme(isDarkMode());
        });
    } else {
        setupIframeListeners();
        applyTheme(isDarkMode());
    }

    // React to VitePress toggling theme in another tab
    window.addEventListener('storage', function (e) {
        if (e.key === 'vitepress-theme-appearance') applyTheme(isDarkMode());
    });

    // React to OS-level dark/light switch (when preference is 'auto')
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
        var pref = localStorage.getItem('vitepress-theme-appearance');
        if (!pref || pref === 'auto') applyTheme(isDarkMode());
    });
})();
