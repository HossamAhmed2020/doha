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
    // Product Rendering & Pagination State
    // ==========================================
    let currentPage = 1;
    const itemsPerPage = 12;
    let filteredProducts = [];

    function renderProducts(products = window.ALL_PRODUCTS, page = 1) {
        const grid = document.getElementById('productsGrid');
        const paginationContainer = document.getElementById('pagination');
        if (!grid || !products) return;

        const lang = document.documentElement.lang || 'en';
        const isAr = lang === 'ar';

        // Update state
        filteredProducts = products;
        currentPage = page;

        // Calculate slice
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageProducts = products.slice(startIndex, endIndex);

        grid.innerHTML = pageProducts.map(product => {
            const data = isAr ? product.ar : product.en;
            const categoryLabel = isAr ? 
                (product.category === 'herbs' ? 'أعشاب' : 
                 product.category === 'spices' ? 'توابل' : 
                 product.category === 'seeds' ? 'بذور' : 
                 product.category === 'grains' ? 'حبوب' : 
                 product.category === 'legumes' ? 'بقوليات' : product.category) : 
                (product.category.charAt(0).toUpperCase() + product.category.slice(1));
            
            const badge = product.badge ? `
                <span class="product-card__badge ${product.badge.en === 'New Harvest' ? 'product-card__badge--new' : ''}">
                    ${isAr ? product.badge.ar : product.badge.en}
                </span>
            ` : '';

            const detailsUrl = isAr ? `product-details-ar.html?id=${product.id}` : `product-details.html?id=${product.id}`;
            const viewDetailsText = isAr ? 'عرض التفاصيل' : 'View Details';
            const addToRFQText = isAr ? 'أضف لطلب السعر' : 'Add to RFQ';
            const specs = data.specs || {};
            const moqText = isAr ? `أقل كمية: ${specs.MOQ || '1 طن'}` : `MOQ: ${specs.MOQ || '1 Ton'}`;
            const formText = (data.specs?.Form || data.specs?.['الشكل'] || '');

            return `
                <div class="col-sm-6 col-lg-3 product-item" data-category="${product.category}">
                    <article class="product-card animate-on-scroll">
                        <div class="product-card__image-wrapper">
                            <img src="${product.image}" alt="${data.name}" class="product-card__image" loading="lazy">
                            <div class="product-card__overlay">
                                <a href="${detailsUrl}" class="btn btn-gold btn-sm mb-2">${viewDetailsText}</a>
                                <button class="btn btn-outline-light btn-sm add-to-rfq" data-product-id="${product.id}" data-product-name="${data.name}">
                                    <i class="fas fa-plus me-1"></i>${addToRFQText}
                                </button>
                            </div>
                            ${badge}
                        </div>
                        <div class="product-card__content">
                            <span class="product-card__category">${categoryLabel}</span>
                            <h3 class="product-card__title">${data.name}</h3>
                            <p class="product-card__description">${data.shortDescription}</p>
                            <div class="product-card__meta">
                                <span class="product-card__origin"><i class="fas  fa-seedling me-1"></i>${formText}</span>
                                <span class="product-card__moq">${moqText}</span>
                            </div>
                        </div>
                    </article>
                </div>
            `;
        }).join('');

        renderPagination(products.length, currentPage);
        initAddToRFQ(); // Re-initialize listeners for new elements
        
        // Update results count
        const resultsCount = document.getElementById('resultsCount');
        if (resultsCount) {
            const total = products.length;
            const start = total === 0 ? 0 : startIndex + 1;
            const end = Math.min(endIndex, total);
            resultsCount.textContent = isAr ? 
                `عرض ${start}-${end} من أصل ${total} منتج` : 
                `Showing ${start}-${end} of ${total} products`;
        }

        // Trigger scroll animations for new items
        if (window.refreshAnimations) window.refreshAnimations();
    }

    function renderPagination(totalItems, currentPage) {
        const paginationContainer = document.getElementById('pagination');
        if (!paginationContainer) return;

        const totalPages = Math.ceil(totalItems / itemsPerPage);
        if (totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }

        const lang = document.documentElement.lang || 'en';
        const isAr = lang === 'ar';

        let html = '';

        // Previous Button
        html += `
            <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                <a class="page-link" href="#" data-page="${currentPage - 1}" aria-label="Previous">
                    <i class="fas fa-chevron-${isAr ? 'right' : 'left'}"></i>
                </a>
            </li>
        `;

        // Page Numbers
        for (let i = 1; i <= totalPages; i++) {
            html += `
                <li class="page-item ${i === currentPage ? 'active' : ''}">
                    <a class="page-link" href="#" data-page="${i}">${i}</a>
                </li>
            `;
        }

        // Next Button
        html += `
            <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                <a class="page-link" href="#" data-page="${currentPage + 1}" aria-label="Next">
                    <i class="fas fa-chevron-${isAr ? 'left' : 'right'}"></i>
                </a>
            </li>
        `;

        paginationContainer.innerHTML = html;

        // Add Click Events
        paginationContainer.querySelectorAll('.page-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = parseInt(link.dataset.page);
                if (page && page !== currentPage && page >= 1 && page <= totalPages) {
                    renderProducts(filteredProducts, page);
                    window.scrollTo({ top: document.getElementById('productsGrid').offsetTop - 100, behavior: 'smooth' });
                }
            });
        });
    }

    // ==========================================
    // Product Filtering
    // ==========================================
    function initProductFilters() {
        const searchInput = document.getElementById('productSearch');
        const categoryFilter = document.getElementById('categoryFilter');
        const originFilter = document.getElementById('originFilter');
        const sortFilter = document.getElementById('sortFilter');
        const clearBtn = document.getElementById('clearFilters');
        
        if (!document.getElementById('productsGrid')) return;
        
        function filterProducts() {
            const searchTerm = searchInput?.value.toLowerCase().trim() || '';
            const category = categoryFilter?.value || '';
            const origin = originFilter?.value || '';
            const sort = sortFilter?.value || 'featured';
            
            let filtered = window.ALL_PRODUCTS.filter(product => {
                const lang = document.documentElement.lang || 'en';
                const data = lang === 'ar' ? product.ar : product.en;
                
                const title = data.name.toLowerCase();
                const desc = data.shortDescription.toLowerCase();
                const cat = product.category || '';
                const org = data.origin?.toLowerCase() || '';
                
                const matchesSearch = !searchTerm || title.includes(searchTerm) || desc.includes(searchTerm);
                const matchesCategory = !category || cat === category;
                const matchesOrigin = !origin || org.includes(origin.toLowerCase());
                
                return matchesSearch && matchesCategory && matchesOrigin;
            });
            
            // Sort
            if (sort === 'name-asc') {
                filtered.sort((a, b) => {
                    const aName = (document.documentElement.lang === 'ar' ? a.ar.name : a.en.name);
                    const bName = (document.documentElement.lang === 'ar' ? b.ar.name : b.en.name);
                    return aName.localeCompare(bName);
                });
            } else if (sort === 'name-desc') {
                filtered.sort((a, b) => {
                    const aName = (document.documentElement.lang === 'ar' ? a.ar.name : a.en.name);
                    const bName = (document.documentElement.lang === 'ar' ? b.ar.name : b.en.name);
                    return bName.localeCompare(aName);
                });
            }
            
            renderProducts(filtered, 1);
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
    // Related Products Rendering
    // ==========================================
    function renderRelatedProducts(currentCategory, currentId) {
        const grid = document.querySelector('.product-detail .row.mt-5 .row.g-4');
        if (!grid || !window.ALL_PRODUCTS) return;

        const lang = document.documentElement.lang || 'en';
        const isAr = lang === 'ar';

        // Get 4 products from same category, excluding current
        const related = window.ALL_PRODUCTS
            .filter(p => p.category === currentCategory && p.id !== currentId)
            .slice(0, 4);

        if (related.length === 0) {
            // Fallback to any 4 products if none in category
            related.push(...window.ALL_PRODUCTS.filter(p => p.id !== currentId).slice(0, 4));
        }

        grid.innerHTML = related.map(product => {
            const data = isAr ? product.ar : product.en;
            const detailsUrl = isAr ? `product-details-ar.html?id=${product.id}` : `product-details.html?id=${product.id}`;
            const viewDetailsText = isAr ? 'عرض التفاصيل' : 'View Details';

            return `
                <div class="col-sm-6 col-lg-3">
                    <article class="product-card animate-on-scroll">
                        <div class="product-card__image-wrapper">
                            <img src="${product.image}" alt="${data.name}" class="product-card__image" loading="lazy">
                            <div class="product-card__overlay">
                                <a href="${detailsUrl}" class="btn btn-gold btn-sm">${viewDetailsText}</a>
                            </div>
                        </div>
                        <div class="product-card__content">
                            <span class="product-card__category">${isAr ? (product.category === 'herbs' ? 'أعشاب' : product.category) : product.category}</span>
                            <h3 class="product-card__title">${data.name}</h3>
                            <p class="product-card__description">${data.shortDescription}</p>
                        </div>
                    </article>
                </div>
            `;
        }).join('');

        if (window.refreshAnimations) window.refreshAnimations();
    }

    // ==========================================
    // Product Detail Loading
    // ==========================================
    function loadProductDetails() {
        const titleEl = document.querySelector('.product-info__title');
        if (!titleEl || !window.ALL_PRODUCTS) return;

        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get('id'));
        if (!id) return;

        const product = window.ALL_PRODUCTS.find(p => p.id === id);
        if (!product) return;

        const lang = document.documentElement.lang || 'en';
        const isAr = lang === 'ar';
        const data = isAr ? product.ar : product.en;

        // Update Title and Descriptions
        titleEl.textContent = data.name;
        const shortDesc = document.querySelector('.product-info__short-description');
        if (shortDesc) shortDesc.textContent = data.shortDescription;
        
        const fullDesc = document.querySelector('.product-details__text');
        if (fullDesc) fullDesc.textContent = data.fullDescription;
        
        // Handle generic layout if specific elements missing
        const mainDesc = document.querySelector('.product-info__description');
        if (mainDesc) mainDesc.textContent = data.fullDescription;

        // Update Images
        const mainImg = document.getElementById('mainImage');
        if (mainImg) {
            mainImg.src = product.image;
            mainImg.alt = data.name;
        }

        // Update Specs
        const specsList = document.querySelector('.product-info__specs ul, .product-info__specs');
        if (specsList && data.specs) {
            specsList.innerHTML = Object.entries(data.specs).map(([key, value]) => `
                <li><span class="product-info__spec-label">${key}:</span> <span class="product-info__spec-value">${value}</span></li>
            `).join('');
        }

        // Update Category
        const catLabel = document.querySelector('.product-info__category');
        if (catLabel) catLabel.textContent = isAr ? (product.category === 'herbs' ? 'أعشاب' : product.category) : product.category;

        // Update RFQ Button
        const rfqBtn = document.querySelector('.add-to-rfq-btn');
        if (rfqBtn) {
            rfqBtn.dataset.productId = product.id;
            rfqBtn.dataset.productName = data.name;
        }

        // Render Related
        renderRelatedProducts(product.category, product.id);

        // Update SEO
        if (data.seo) {
            document.title = `${data.seo.title} | Al Doha For Import & Export`;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.setAttribute('content', data.seo.description);
            const metaKeys = document.querySelector('meta[name="keywords"]');
            if (metaKeys) metaKeys.setAttribute('content', data.seo.keywords);
        }
    }

    // ==========================================
    // Featured Products Rendering
    // ==========================================
    function renderFeaturedProducts() {
        const grid = document.getElementById('featuredProductsGrid');
        if (!grid || !window.ALL_PRODUCTS) return;

        const lang = document.documentElement.lang || 'en';
        const isAr = lang === 'ar';

        // Get 4 featured products (first 4 for now)
        const featured = window.ALL_PRODUCTS.slice(0, 4);

        grid.innerHTML = featured.map((product, index) => {
            const data = isAr ? product.ar : product.en;
            const detailsUrl = isAr ? `product-details-ar.html?id=${product.id}` : `product-details.html?id=${product.id}`;
            const viewDetailsText = isAr ? 'عرض التفاصيل' : 'View Details';
            
            const categoryLabel = isAr ? 
                (product.category === 'herbs' ? 'أعشاب' : 
                 product.category === 'spices' ? 'توابل' : 
                 product.category === 'seeds' ? 'بذور' : 
                 product.category === 'grains' ? 'حبوب' : 
                 product.category === 'legumes' ? 'بقوليات' : product.category) : 
                (product.category.charAt(0).toUpperCase() + product.category.slice(1));

            const badge = product.badge ? `
                <span class="product-card__badge ${product.badge.en === 'New Harvest' ? 'product-card__badge--new' : ''}">
                    ${isAr ? product.badge.ar : product.badge.en}
                </span>
            ` : '';

            return `
                <div class="col-sm-6 col-lg-3 animate-on-scroll" data-delay="${index * 100}">
                    <article class="product-card">
                        <div class="product-card__image-wrapper">
                            <img src="${product.image}" alt="${data.name}" class="product-card__image" loading="lazy">
                            <div class="product-card__overlay">
                                <a href="${detailsUrl}" class="btn btn-gold btn-sm">${viewDetailsText}</a>
                            </div>
                            ${badge}
                        </div>
                        <div class="product-card__content">
                            <span class="product-card__category">${categoryLabel}</span>
                            <h3 class="product-card__title">${data.name}</h3>
                            <p class="product-card__description">${data.shortDescription}</p>
                        </div>
                    </article>
                </div>
            `;
        }).join('');

        if (window.refreshAnimations) window.refreshAnimations();
    }

    // ==========================================
    // Initialize
    // ==========================================
    function init() {
        if (window.RFQCart) RFQCart.updateBadge();
        
        // Home Page
        if (document.getElementById('featuredProductsGrid')) {
            renderFeaturedProducts();
        }

        // Product List Page
        if (document.getElementById('productsGrid')) {
            renderProducts();
            initProductFilters();
        }
        
        // Product Detail Page
        if (document.querySelector('.product-details-section') || document.querySelector('.product-detail')) {
            loadProductDetails();
            if (typeof initProductGallery === 'function') initProductGallery();
            if (typeof initQuantitySelector === 'function') initQuantitySelector();
        }
        
        initAddToRFQ();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();