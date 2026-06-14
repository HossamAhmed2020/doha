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

        const WHATSAPP_NUMBER = "+201010952339";
        const isArabic = document.documentElement.lang === 'ar';

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();

            form.classList.add('was-validated');
            if (!form.checkValidity()) return;

            const getVal = (id) => (document.getElementById(id)?.value || '').trim();
            const getSelectText = (id) => {
                const el = document.getElementById(id);
                return el ? el.options[el.selectedIndex]?.text || '' : '';
            };

            const fullName = getVal('fullName');
            const companyName = getVal('companyName');
            const email = getVal('email');
            const phone = getVal('phone');
            const countryText = getSelectText('country');
            const incoterm = document.getElementById('incoterm');
            const incotermText = incoterm?.value ? getSelectText('incoterm') : '';
            const products = getVal('products');
            const message = getVal('message');

            const notSpecified = isArabic ? 'غير محدد' : 'Not specified';
            const productsDisplay = products || notSpecified;
            const incotermDisplay = incoterm?.value ? incotermText : notSpecified;

            const template = isArabic
                ? `🌿 طلب تصدير جديد\n👤 الاسم الكامل: ${fullName}\n🏢 اسم الشركة: ${companyName}\n📧 البريد الإلكتروني: ${email}\n📞 رقم الهاتف: ${phone}\n🌍 الدولة المستهدفة: ${countryText}\n🚢 شرط التجارة: ${incotermDisplay}\n📦 المنتجات المطلوبة: ${productsDisplay}\n📝 المتطلبات: ${message}\n✅ تمت الموافقة على سياسة الخصوصية\n\n---## مرسل من موقع شركة الدوحة للتصدير`
                : `🌿 NEW EXPORT RFQ REQUEST\n👤 Full Name: ${fullName}\n🏢 Company: ${companyName}\n📧 Email: ${email}\n📞 Phone: ${phone}\n🌍 Target Market: ${countryText}\n🚢 Preferred Incoterm: ${incotermDisplay}\n📦 Selected Harvest Items: ${productsDisplay}\n📝 Detailed Requirements: ${message}\n✅ Privacy Accepted: Yes\n\n---## Sent from Al Doha Export Website`;

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalHTML = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = isArabic
                ? '<i class="fas fa-spinner fa-spin me-2"></i>\u062C\u0627\u0631\u064A \u0641\u062A\u062D \u0648\u0627\u062A\u0633\u0627\u0628...'
                : '<i class="fas fa-spinner fa-spin me-2"></i>Opening WhatsApp...';

            const encoded = encodeURIComponent(template);
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalHTML;
                form.classList.remove('was-validated');
                RFQCart.clear();
                form.reset();
            }, 4000);
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