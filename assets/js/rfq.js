/**
 * Al Doha For Import & Export
 * RFQ Module JavaScript
 */

(function() {
    'use strict';

    const RFQCart = {
        key: 'aldoha_rfq_cart',

        getItems() {
            try {
                return JSON.parse(localStorage.getItem(this.key)) || [];
            } catch {
                return [];
            }
        },

        saveItems(items) {
            localStorage.setItem(this.key, JSON.stringify(items));
            this.updateUI();
        },

        addItem(product) {
            const items = this.getItems();
            const existing = items.find(item => item.id === product.id);
            if (existing) {
                existing.quantity = Math.max(existing.quantity, product.quantity || 25);
            } else {
                items.push({
                    id: product.id,
                    name: product.name,
                    quantity: product.quantity || 25,
                    addedAt: new Date().toISOString()
                });
            }
            this.saveItems(items);
            this.showNotification(`${product.name} added to RFQ`);
        },

        removeItem(productId) {
            const items = this.getItems().filter(item => item.id !== productId);
            this.saveItems(items);
        },

        clear() {
            localStorage.removeItem(this.key);
            this.updateUI();
        },

        getCount() {
            return this.getItems().length;
        },

        updateBadge() {
            const badge = document.getElementById('rfqBadge');
            const float = document.getElementById('rfqFloat');
            if (!badge) return;
            const count = this.getCount();
            badge.textContent = count;
            if (count > 0) {
                badge.style.display = 'flex';
                float?.classList.add('has-items');
            } else {
                badge.style.display = 'none';
                float?.classList.remove('has-items');
            }
        },

        renderCart() {
            const cartItems = document.getElementById('cartItems');
            const cartEmpty = document.getElementById('cartEmpty');
            const cartFooter = document.getElementById('cartFooter');
            const cartCount = document.getElementById('cartCount');
            const productsTextarea = document.getElementById('products');

            if (!cartItems) return;

            const items = this.getItems();

            if (items.length === 0) {
                cartItems.innerHTML = '';
                cartEmpty.style.display = 'block';
                if (cartFooter) cartFooter.style.display = 'none';
                if (cartCount) cartCount.textContent = '0 items';
                if (productsTextarea) productsTextarea.value = '';
                return;
            }

            cartEmpty.style.display = 'none';
            if (cartFooter) cartFooter.style.display = 'block';
            if (cartCount) cartCount.textContent = `${items.length} item${items.length > 1 ? 's' : ''}`;

            cartItems.innerHTML = items.map(item => `
                <div class="rfq-cart__item" data-id="${item.id}">
                    <div class="rfq-cart__item-info">
                        <div class="rfq-cart__item-name">${item.name}</div>
                        <div class="rfq-cart__item-qty">Qty: ${item.quantity} units</div>
                    </div>
                    <button class="rfq-cart__item-remove" aria-label="Remove ${item.name}">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `).join('');

            if (productsTextarea) {
                productsTextarea.value = items.map(i => `${i.name} (Qty: ${i.quantity})`).join('\n');
            }

            // Bind remove buttons
            cartItems.querySelectorAll('.rfq-cart__item-remove').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = btn.closest('.rfq-cart__item').dataset.id;
                    this.removeItem(id);
                });
            });
        },

        updateUI() {
            this.updateBadge();
            this.renderCart();
        },

        showNotification(message) {
            const existing = document.querySelector('.rfq-notification');
            if (existing) existing.remove();

            const notification = document.createElement('div');
            notification.className = 'rfq-notification';
            notification.innerHTML = `<i class="fas fa-check-circle"></i><span>${message}</span>`;
            document.body.appendChild(notification);

            requestAnimationFrame(() => notification.classList.add('show'));

            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }
    };

    function initRFQForm() {
        const form = document.getElementById('rfqForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                return;
            }

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            data.products = RFQCart.getItems();

            // Simulate API submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>RFQ Submitted!';
                submitBtn.classList.remove('btn-gold');
                submitBtn.classList.add('btn-success');
                RFQCart.clear();
                form.reset();
                form.classList.remove('was-validated');

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    submitBtn.classList.add('btn-gold');
                    submitBtn.classList.remove('btn-success');
                }, 3000);
            }, 1500);
        });
    }

    function initClearCart() {
        const btn = document.getElementById('clearCart');
        btn?.addEventListener('click', () => {
            if (confirm('Clear all items from your RFQ cart?')) {
                RFQCart.clear();
            }
        });
    }

    function init() {
        RFQCart.updateUI();
        initRFQForm();
        initClearCart();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose for products.js
    window.RFQCart = RFQCart;
})();