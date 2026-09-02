/* ================================================================
   AAR Royal Residency - Modern 5-Star Booking & WhatsApp Engine
   Date Synchronization, Live Form Validation & WhatsApp Handover
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
    initBookingForms();
});

function initBookingForms() {
    const searchForm = document.getElementById("availability-form");
    const checkinInput = document.getElementById("checkin");
    const checkoutInput = document.getElementById("checkout");
    
    if (checkinInput && checkoutInput) {
        const today = new Date().toISOString().split('T')[0];
        checkinInput.min = today;
        if (!checkinInput.value) checkinInput.value = today;
        
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split('T')[0];
        checkoutInput.min = tomorrowStr;
        if (!checkoutInput.value) checkoutInput.value = tomorrowStr;
        
        checkinInput.addEventListener("change", () => {
            const checkinDate = new Date(checkinInput.value);
            const nextDay = new Date(checkinDate);
            nextDay.setDate(nextDay.getDate() + 1);
            const nextDayStr = nextDay.toISOString().split('T')[0];
            checkoutInput.min = nextDayStr;
            if (checkoutInput.value <= checkinInput.value) {
                checkoutInput.value = nextDayStr;
            }
        });
    }

    if (searchForm) {
        searchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            triggerWhatsAppBooking("search");
        });
    }
}

// Function to handle instant room booking click across rooms & cards
function bookRoomWhatsApp(roomType, price) {
    const hotelPhone = "919876543210";
    const currentLang = localStorage.getItem("aar_lang") || "en";
    
    let msg = "";
    if (currentLang === "ta") {
        msg = `வணக்கம் AAR Royal Residency, சங்கரன்கோவில். நான் *${roomType}* (கட்டணம்: ${price}/இரவு) முன்பதிவு செய்ய விரும்புகிறேன். அறை உள்ளதா என உறுதிப்படுத்தவும்!`;
    } else {
        msg = `Hi AAR Royal Residency, SankaranKovil. I would like to reserve a *${roomType}* (Tariff: ${price}/night). Please let me know the availability!`;
    }

    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${hotelPhone}&text=${encodedMsg}`;
    window.open(whatsappUrl, "_blank");
}

// Global booking compiler from search bar
function triggerWhatsAppBooking(sourceType) {
    const hotelPhone = "919876543210";
    const currentLang = localStorage.getItem("aar_lang") || "en";
    let checkin = "";
    let checkout = "";
    let guests = "1 Guest";
    let roomType = "Standard Room";
    
    if (sourceType === "search") {
        checkin = document.getElementById("checkin") ? document.getElementById("checkin").value : "";
        checkout = document.getElementById("checkout") ? document.getElementById("checkout").value : "";
        guests = document.getElementById("guests") ? document.getElementById("guests").value : "1 Guest";
        roomType = document.getElementById("room-type") ? document.getElementById("room-type").value : "Standard Room";
        
        if (!checkin || !checkout) {
            alert(currentLang === "ta" ? "தயவுசெய்து வருகை மற்றும் வெளியேறும் தேதியை தேர்வு செய்யவும்." : "Please select check-in and check-out dates.");
            return;
        }
    } else {
        const today = new Date().toLocaleDateString();
        checkin = today;
    }
    
    let bookingMessage = "";
    if (currentLang === "ta") {
        bookingMessage = `🏨 *AAR Royal Residency அறை முன்பதிவு விசாரணை*
📍 *அமைவிடம்:* சங்கரன்கோவில் (ஸ்ரீ சங்கரநாராயணர் கோவில் அருகில்)
-----------------------------------
🔑 *அறை வகை:* ${roomType}
📅 *வருகை தேதி (Check-In):* ${checkin}
📅 *வெளியேறும் தேதி (Check-Out):* ${checkout}
👥 *நபர்கள்:* ${guests}
-----------------------------------
தயவுசெய்து அறை இருப்பை உறுதி செய்து சிறந்த சலுகை கட்டணத்தை தெரிவிக்கவும். நன்றி!`;
    } else {
        bookingMessage = `🏨 *AAR Royal Residency Booking Inquiry*
📍 *Location:* SankaranKovil (Near Sri Sankaranarayanar Temple)
-----------------------------------
🔑 *Room Category:* ${roomType}
📅 *Check-In:* ${checkin}
📅 *Check-Out:* ${checkout}
👥 *Guests:* ${guests}
-----------------------------------
Please confirm room availability and provide the best reservation tariffs. Thank you!`;
    }
    
    const encodedMsg = encodeURIComponent(bookingMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${hotelPhone}&text=${encodedMsg}`;
    window.open(whatsappUrl, "_blank");
}
