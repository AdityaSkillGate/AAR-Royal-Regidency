/* AAR Royal Residency - Booking & WhatsApp Reservation Controller */

// Active booking handler
document.addEventListener("DOMContentLoaded", () => {
    // Check if we are on index.html/home page to bind availability search bar
    const searchForm = document.getElementById("availability-form");
    if (searchForm) {
        // Set minimum dates to today
        const checkinInput = document.getElementById("checkin");
        const checkoutInput = document.getElementById("checkout");
        
        if (checkinInput && checkoutInput) {
            const today = new Date().toISOString().split('T')[0];
            checkinInput.min = today;
            checkinInput.value = today;
            
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const tomorrowStr = tomorrow.toISOString().split('T')[0];
            checkoutInput.min = tomorrowStr;
            checkoutInput.value = tomorrowStr;
            
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
        
        searchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            triggerWhatsAppBooking("search");
        });
    }
});

// Function to handle rooms.html instant WhatsApp booking click
function bookRoomWhatsApp(roomType, price) {
    const hotelPhone = "919876543210"; // Dynamic AAR Royal Residency Hotel Contact Phone
    const msg = `Hi AAR Royal Residency, SankaranKovil. I would like to book a *${roomType}* (Price: ${price}/night). Please let me know the availability!`;
    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${hotelPhone}&text=${encodedMsg}`;
    window.open(whatsappUrl, "_blank");
}

// Global booking compiler
function triggerWhatsAppBooking(sourceType) {
    const hotelPhone = "919876543210"; // Placeholder phone number
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
            alert("Please select check-in and check-out dates.");
            return;
        }
    } else {
        // Fallback standard click
        const today = new Date().toLocaleDateString();
        checkin = today;
    }
    
    // Construct prefilled Whatsapp Message
    const bookingMessage = `🏨 *AAR Royal Residency Booking Inquiry*
📍 *Location:* SankaranKovil, TN
-----------------------------------
🔑 *Room:* ${roomType}
📅 *Check-In:* ${checkin}
📅 *Check-Out:* ${checkout}
👥 *Guests:* ${guests}
-----------------------------------
Please confirm if this category is available for reservation. Thank you!`;
    
    const encodedMsg = encodeURIComponent(bookingMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${hotelPhone}&text=${encodedMsg}`;
    window.open(whatsappUrl, "_blank");
}
