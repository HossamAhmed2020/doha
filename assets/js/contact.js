const WHATSAPP_NUMBER = "201010952339";

function detectLanguage() {
    const htmlLang = document.documentElement.lang;
    const bodyDir = document.body ? document.body.dir : "";
    if (htmlLang === "ar" || bodyDir === "rtl") {
        return "ar";
    }
    return "en";
}

function sendContactToWhatsApp(language) {
    const form = document.getElementById("contactForm");
    if (!form) {
        console.error("contactForm not found");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullNameInput = document.getElementById("fullName");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const inquiryTypeInput = document.getElementById("inquiryType");
        const messageInput = document.getElementById("message");
        const submitBtn = document.getElementById("contactSubmitBtn");

        if (!fullNameInput || !emailInput || !messageInput || !submitBtn) {
            console.error("Required form fields not found");
            return;
        }

        let isValid = true;

        const fullName = fullNameInput.value.trim();
        if (!fullName) {
            fullNameInput.classList.remove("is-valid");
            fullNameInput.classList.add("is-invalid");
            isValid = false;
        } else {
            fullNameInput.classList.remove("is-invalid");
            fullNameInput.classList.add("is-valid");
        }

        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            emailInput.classList.remove("is-valid");
            emailInput.classList.add("is-invalid");
            isValid = false;
        } else {
            emailInput.classList.remove("is-invalid");
            emailInput.classList.add("is-valid");
        }

        const phone = phoneInput ? phoneInput.value.trim() : "";

        let inquiryType = "";
        if (inquiryTypeInput) {
            if (inquiryTypeInput.tagName === "SELECT") {
                inquiryType = inquiryTypeInput.value || inquiryTypeInput.options[inquiryTypeInput.selectedIndex].text;
            } else {
                inquiryType = inquiryTypeInput.value.trim();
            }
        }

        const message = messageInput.value.trim();
        if (!message) {
            messageInput.classList.remove("is-valid");
            messageInput.classList.add("is-invalid");
            isValid = false;
        } else {
            messageInput.classList.remove("is-invalid");
            messageInput.classList.add("is-valid");
        }

        if (!isValid) return;

        const phoneDisplay = phone || "Not specified";
        const inquiryDisplay = inquiryType || "Not specified";

        let text = "";
        if (language === "en") {
            text = "🌿 New Contact Request\n👤 Full Name:" + fullName + "\n📧 Email:" + email + "\n📞 Phone:" + phoneDisplay + "\n📋 Inquiry Type:" + inquiryDisplay + "\n📝 Message:" + message + "\n---\nSent from Al Doha Export Website";
        } else {
            const phoneDisplayAr = phone || "غير محدد";
            const inquiryDisplayAr = inquiryType || "غير محدد";
            text = "🌿 طلب تواصل جديد\n👤 الاسم الكامل:" + fullName + "\n📧 البريد الإلكتروني:" + email + "\n📞 رقم الهاتف:" + phoneDisplayAr + "\n📋 نوع الاستفسار:" + inquiryDisplayAr + "\n📝 الرسالة:" + message + "\n---\nتم الإرسال من موقع شركة الدوحة للتصدير";
        }

        const originalHTML = submitBtn.innerHTML;
        submitBtn.disabled = true;
        if (language === "ar") {
            submitBtn.innerHTML = '<i class=\"fas fa-spinner fa-spin me-2\"></i>جاري فتح واتساب...';
        } else {
            submitBtn.innerHTML = '<i class=\"fas fa-spinner fa-spin me-2\"></i>Opening WhatsApp...';
        }

        const encodedMessage = encodeURIComponent(text);
        const whatsappUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodedMessage;
        console.log("WhatsApp URL:", whatsappUrl);
        window.open(whatsappUrl, "_blank");

        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHTML;
    });

    form.querySelectorAll(".form-control").forEach(function (input) {
        input.addEventListener("blur", function () {
            if (this.checkValidity()) {
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
            } else {
                this.classList.remove("is-valid");
                this.classList.add("is-invalid");
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const lang = detectLanguage();
    sendContactToWhatsApp(lang);
});
