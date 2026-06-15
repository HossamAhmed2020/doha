/**
 * Al Doha - Contact Form WhatsApp Integration
 */

function sendContactToWhatsApp(formType) {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // 1. Validation (Bootstrap native style)
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        // 2. Read fields by index (0: Name, 1: Email, 2: Phone, 3: Type, 4: Message)
        const inputs = form.querySelectorAll('.form-control');
        const fullName = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const phone = inputs[2].value.trim();
        const inquiryType = inputs[3].options[inputs[3].selectedIndex].text;
        const message = inputs[4].value.trim();

        // 3. Build localized message
        let text = "";
        if (formType === "en") {
            text = `🌿 NEW CONTACT MESSAGE\n👤 Full Name:\n${fullName}\n📧 Email:\n${email}\n📞 Phone:\n${phone || "Not provided"}\n📌 Inquiry Type:\n${inquiryType || "Not specified"}\n📝 Message:\n${message}\n---\nSent from Al Doha Export Website`;
        } else {
            text = `🌿 رسالة تواصل جديدة\n👤 الاسم الكامل:\n${fullName}\n📧 البريد الإلكتروني:\n${email}\n📞 الهاتف:\n${phone || "غير متوفر"}\n📌 نوع الاستفسار:\n${inquiryType || "غير محدد"}\n📝 الرسالة:\n${message}\n---\nمرسل من موقع شركة الدوحة للتصدير`;
        }

        // 4. UI Improvement (Loading state)
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalHTML = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = formType === "ar" 
            ? '<i class="fas fa-spinner fa-spin me-2"></i> جاري فتح واتساب...' 
            : '<i class="fas fa-spinner fa-spin me-2"></i> Opening WhatsApp...';

        // 5. Build URL and Open WhatsApp
        const encoded = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/201010952339?text=${encoded}`;

        setTimeout(() => {
            window.open(whatsappUrl, "_blank");
            
            // 6. Restore UI
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalHTML;
            form.reset();
            form.classList.remove('was-validated');
            
            // Reset validation classes
            inputs.forEach(input => {
                input.classList.remove('is-valid', 'is-invalid');
            });
        }, 1000);
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

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    sendContactToWhatsApp(lang);
});
