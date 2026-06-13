/**
 * Al Doha For Import & Export
 * Products Module JavaScript
 */

(function() {
    'use strict';

    // ==========================================
    // RFQ Cart (from rfq.js via window.RFQCart)
    // ==========================================
    function getRFQCart() {
        if (window.RFQCart) return window.RFQCart;
        // Fallback: minimal RFQ cart if rfq.js not loaded
        const FallbackCart = {
            key: 'aldoha_rfq_cart',
            getItems() {
                try { return JSON.parse(localStorage.getItem(this.key)) || []; } catch { return []; }
            },
            addItem(product) {
                const items = this.getItems();
                const existing = items.find(item => item.id === product.id);
                if (existing) {
                    existing.quantity = Math.max(existing.quantity, product.quantity || 25);
                } else {
                    items.push({ id: product.id, name: product.name, quantity: product.quantity || 25, addedAt: new Date().toISOString() });
                }
                localStorage.setItem(this.key, JSON.stringify(items));
                this.updateBadge();
                this.showNotification(`${product.name} added to RFQ`);
            },
            removeItem(productId) {
                const items = this.getItems().filter(item => item.id !== productId);
                localStorage.setItem(this.key, JSON.stringify(items));
                this.updateBadge();
            },
            getCount() { return this.getItems().length; },
            updateBadge() {
                const badge = document.getElementById('rfqBadge');
                const float = document.getElementById('rfqFloat');
                if (!badge) return;
                const count = this.getCount();
                badge.textContent = count;
                if (count > 0) { badge.style.display = 'flex'; float?.classList.add('has-items'); }
                else { badge.style.display = 'none'; float?.classList.remove('has-items'); }
            },
            showNotification(message) {
                const existing = document.querySelector('.rfq-notification');
                if (existing) existing.remove();
                const notification = document.createElement('div');
                notification.className = 'rfq-notification';
                notification.innerHTML = `<i class="fas fa-check-circle"></i><span>${message}</span>`;
                document.body.appendChild(notification);
                requestAnimationFrame(() => notification.classList.add('show'));
                setTimeout(() => { notification.classList.remove('show'); setTimeout(() => notification.remove(), 300); }, 3000);
            }
        };
        return FallbackCart;
    }
    const RFQCart = getRFQCart();

    // ==========================================
    // Product Filtering
    // ==========================================
    function initProductFilters() {
        const searchInput = document.getElementById('productSearch');
        const categoryFilter = document.getElementById('categoryFilter');
        const originFilter = document.getElementById('originFilter');
        const sortFilter = document.getElementById('sortFilter');
        const clearBtn = document.getElementById('clearFilters');
        const productsGrid = document.getElementById('productsGrid');
        const resultsCount = document.getElementById('resultsCount');
        
        if (!productsGrid) return;
        
        const productItems = Array.from(productsGrid.querySelectorAll('.product-item'));
        
        function filterProducts() {
            const searchTerm = searchInput?.value.toLowerCase().trim() || '';
            const category = categoryFilter?.value || '';
            const origin = originFilter?.value || '';
            const sort = sortFilter?.value || 'featured';
            
            let visible = productItems.filter(item => {
                const title = item.querySelector('.product-card__title')?.textContent.toLowerCase() || '';
                const desc = item.querySelector('.product-card__description')?.textContent.toLowerCase() || '';
                const cat = item.dataset.category || '';
                const org = item.dataset.origin || '';
                
                const matchesSearch = !searchTerm || title.includes(searchTerm) || desc.includes(searchTerm);
                const matchesCategory = !category || cat === category;
                const matchesOrigin = !origin || org === origin;
                
                return matchesSearch && matchesCategory && matchesOrigin;
            });
            
            // Sort
            if (sort === 'name-asc') {
                visible.sort((a, b) => {
                    const aTitle = a.querySelector('.product-card__title')?.textContent || '';
                    const bTitle = b.querySelector('.product-card__title')?.textContent || '';
                    return aTitle.localeCompare(bTitle);
                });
            } else if (sort === 'name-desc') {
                visible.sort((a, b) => {
                    const aTitle = a.querySelector('.product-card__title')?.textContent || '';
                    const bTitle = b.querySelector('.product-card__title')?.textContent || '';
                    return bTitle.localeCompare(aTitle);
                });
            }
            
            // Update visibility
            productItems.forEach(item => {
                item.style.display = 'none';
                item.classList.remove('animate-on-scroll', 'is-visible');
            });
            
            visible.forEach((item, index) => {
                item.style.display = '';
                // Re-add animation classes with stagger
                setTimeout(() => {
                    item.classList.add('animate-on-scroll', 'is-visible');
                }, index * 50);
            });
            
            if (resultsCount) {
                resultsCount.textContent = `Showing ${visible.length} of ${productItems.length} products`;
            }
        }
        
        searchInput?.addEventListener('input', debounce(filterProducts, 300));
        categoryFilter?.addEventListener('change', filterProducts);
        originFilter?.addEventListener('change', filterProducts);
        sortFilter?.addEventListener('change', filterProducts);
        
        clearBtn?.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            if (categoryFilter) categoryFilter.value = '';
            if (originFilter) originFilter.value = '';
            if (sortFilter) sortFilter.value = 'featured';
            filterProducts();
        });
    }

    // ==========================================
    // Product Gallery
    // ==========================================
    function initProductGallery() {
        const mainImage = document.getElementById('mainImage');
        const thumbs = document.querySelectorAll('.product-gallery__thumb');
        
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                const src = thumb.dataset.src;
                if (src && mainImage) {
                    mainImage.style.opacity = '0.5';
                    setTimeout(() => {
                        mainImage.src = src;
                        mainImage.style.opacity = '1';
                    }, 150);
                }
                
                thumbs.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });
    }

    // ==========================================
    // Quantity Selector
    // ==========================================
    function initQuantitySelector() {
        const minusBtn = document.getElementById('qtyMinus');
        const plusBtn = document.getElementById('qtyPlus');
        const input = document.getElementById('quantity');
        
        if (!input) return;
        
        const min = parseInt(input.min) || 1;
        const step = parseInt(input.step) || 1;
        
        minusBtn?.addEventListener('click', () => {
            const current = parseInt(input.value) || min;
            if (current > min) {
                input.value = current - step;
            }
        });
        
        plusBtn?.addEventListener('click', () => {
            const current = parseInt(input.value) || min;
            input.value = current + step;
        });
        
        input.addEventListener('change', () => {
            const val = parseInt(input.value) || min;
            input.value = Math.max(min, val);
        });
    }

    // ==========================================
    // Add to RFQ Handlers
    // ==========================================
    function initAddToRFQ() {
        // Product cards
        document.querySelectorAll('.add-to-rfq').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const productId = btn.dataset.productId;
                const productName = btn.dataset.productName;
                
                if (productId && productName) {
                    RFQCart.addItem({ id: productId, name: productName });
                }
            });
        });
        
        // Product detail page
        const detailBtn = document.querySelector('.add-to-rfq-btn');
        if (detailBtn) {
            detailBtn.addEventListener('click', () => {
                const productId = detailBtn.dataset.productId;
                const productName = detailBtn.dataset.productName;
                const quantity = parseInt(document.getElementById('quantity')?.value) || 25;
                
                if (productId && productName) {
                    RFQCart.addItem({ id: productId, name: productName, quantity });
                }
            });
        }
    }

    // ==========================================
    // Utilities
    // ==========================================
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

    // ==========================================
    // Initialize
    // ==========================================
    function init() {
        RFQCart.updateBadge();
        initProductFilters();
        initProductGallery();
        initQuantitySelector();
        initAddToRFQ();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();