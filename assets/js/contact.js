/**
 * Al Doha For Import & Export
 * Contact Form Module
 */

(function() {
    'use strict';

    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();

            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                return;
            }

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';

            fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
                submitBtn.classList.remove('btn-gold');
                submitBtn.classList.add('btn-success');
                form.reset();
                form.classList.remove('was-validated');
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    submitBtn.classList.add('btn-gold');
                    submitBtn.classList.remove('btn-success');
                }, 3000);
            })
            .catch(error => {
                submitBtn.innerHTML = '<i class="fas fa-times me-2"></i>Error. Try again.';
                submitBtn.classList.remove('btn-gold');
                submitBtn.classList.add('btn-danger');
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    submitBtn.classList.add('btn-gold');
                    submitBtn.classList.remove('btn-danger');
                }, 3000);
            });
        });

        // Real-time validation styling
        form.querySelectorAll('.form-control[required]').forEach(input => {
            input.addEventListener('blur', function() {
                if (this.checkValidity()) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                }
            });
        });
    }

    function init() {
        initContactForm();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();