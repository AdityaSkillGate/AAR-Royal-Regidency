/* AAR Royal Residency - Contact Form Validation & Processing */

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const roomType = document.getElementById("room-type").value;
            const message = document.getElementById("message").value.trim();
            
            if (!name || !phone || !message) {
                alert("Please fill out all required fields: Name, Phone and Message.");
                return;
            }
            
            // Build direct WhatsApp message as fallback link or show clean success overlay
            const hotelPhone = "919876543210";
            const inquiryMsg = `✉️ *AAR Royal Residency Contact Inquiry*
📍 *Location:* SankaranKovil, TN
-----------------------------------
👤 *Name:* ${name}
📧 *Email:* ${email || "Not Provided"}
📞 *Phone:* ${phone}
🏨 *Inquiry/Room Choice:* ${roomType}
📝 *Message:* ${message}
-----------------------------------`;

            const encodedMsg = encodeURIComponent(inquiryMsg);
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${hotelPhone}&text=${encodedMsg}`;
            
            // Alert user of redirection
            alert("Thank you! Your message has been prepared. We are redirecting you to confirm via WhatsApp.");
            window.open(whatsappUrl, "_blank");
            
            // Reset Form fields
            contactForm.reset();
        });
    }
});
