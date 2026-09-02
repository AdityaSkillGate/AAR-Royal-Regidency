/* ================================================================
   AAR Royal Residency - Modern 5-Star Royal Concierge AI Chatbot
   Bilingual Knowledge Base (EN / தமிழ்), Fast Inference & Quick Chips
   ================================================================ */

const botKnowledge = {
    en: [
        {
            keywords: ["price", "tariff", "rate", "cost", "how much", "room rent", "pricing"],
            answer: "🏨 <strong>Our Room Tariffs:</strong><br>• <strong>Standard Room:</strong> ₹1,499 / night<br>• <strong>Deluxe Room:</strong> ₹2,499 / night<br>• <strong>Royal Family Suite:</strong> ₹3,999 / night<br><br>All rooms include 100% Split AC, High-Speed Wi-Fi, and 24/7 Room Service. Would you like to book via WhatsApp?"
        },
        {
            keywords: ["temple", "sankaranarayanar", "distance", "how far", "near temple", "kovil", "darshan"],
            answer: "🛕 <strong>Sankaranarayanar Temple Proximity:</strong><br>AAR Royal Residency is located just <strong>300 meters (~5 minutes walk)</strong> from the historic Sri Sankaranarayanar Temple! Perfect for morning darshan (5:30 AM) and Aadi Thapasu festival visits."
        },
        {
            keywords: ["restaurant", "food", "dining", "veg", "non-veg", "menu", "lunch", "dinner", "breakfast", "thali"],
            answer: "🍽️ <strong>Palace Dining & Cuisine:</strong><br>We serve authentic South Indian Pure Veg Meals, traditional Biryani, Chettinad specialties, and tiffin in strictly separated kitchens.<br>• Breakfast: 7:00 AM - 10:30 AM<br>• Lunch: 12:30 PM - 3:30 PM<br>• Dinner: 7:00 PM - 10:30 PM"
        },
        {
            keywords: ["checkin", "checkout", "check in", "check out", "timing", "time", "arrival"],
            answer: "⏰ <strong>Check-In & Check-Out:</strong><br>• Standard Check-In: <strong>12:00 PM</strong><br>• Standard Check-Out: <strong>11:00 AM</strong><br>Early check-in & 24-hr flexible arrival are available upon prior notice."
        },
        {
            keywords: ["facilities", "amenities", "wifi", "ac", "parking", "car parking", "security", "power"],
            answer: "✨ <strong>5-Star Amenities:</strong><br>• 100% Split AC Climate Control<br>• High-Speed Optical Fiber Free Wi-Fi<br>• Secure On-Site Car & Bus Parking<br>• 100% Generator Power Backup<br>• 24/7 CCTV Security & Room Service"
        },
        {
            keywords: ["book", "whatsapp", "reserve", "reservation", "contact", "phone", "number", "call"],
            answer: "📱 <strong>Instant WhatsApp Booking:</strong><br>You can chat directly with our front desk manager on WhatsApp at <strong>+91 98765 43210</strong> for instant confirmation with no extra fees.<br><br><a href='https://wa.me/919876543210?text=Hi%20AAR%20Royal%20Residency,%20I%20would%20like%20to%20book%20a%20stay' target='_blank' class='btn btn-primary btn-sm' style='display:inline-flex;margin-top:6px;'>Book on WhatsApp</a>"
        },
        {
            keywords: ["offer", "discount", "package", "deal", "promo", "coupon"],
            answer: "🎁 <strong>Special Offers & Stay Packages:</strong><br>• <strong>Pilgrim Special:</strong> 15% OFF for temple visitors (Code: <strong>TEMPLE15</strong>)<br>• <strong>Family Weekend Escape:</strong> Flat 20% OFF (Code: <strong>FAMILY20</strong>)<br>• <strong>Festival Package:</strong> ₹500 OFF per night."
        },
        {
            keywords: ["attraction", "tourist", "courtallam", "falls", "shopping", "places to visit"],
            answer: "📍 <strong>Top Nearby Attractions:</strong><br>• Sri Sankaranarayanar Temple (300m / 5 min walk)<br>• Handloom Silk & Cotton Market (2 min walk)<br>• Courtallam Waterfalls (42 km / 45 min drive)<br>• Kalugumalai Rock-Cut Temple (22 km / 25 min drive)"
        }
    ],
    ta: [
        {
            keywords: ["price", "tariff", "rate", "cost", "how much", "room rent", "pricing", "அறை கட்டணம்", "வாடகை", "விலை", "கட்டணம்"],
            answer: "🏨 <strong>அறை கட்டண விபரங்கள்:</strong><br>• <strong>ஸ்டாண்டர்ட் அறை:</strong> ₹1,499 / இரவு<br>• <strong>டீலக்ஸ் அறை:</strong> ₹2,499 / இரவு<br>• <strong>ராயல் ஃபேமிலி சூட்:</strong> ₹3,999 / இரவு<br><br>அனைத்து அறைகளிலும் இலவச Wi-Fi, Split AC & 24/7 வெந்நீர் வசதி உண்டு!"
        },
        {
            keywords: ["temple", "sankaranarayanar", "distance", "how far", "near temple", "kovil", "கோவில்", "தூரம்", "சங்கரநாராயணர்", "தரிசனம்"],
            answer: "🛕 <strong>ஸ்ரீ சங்கரநாராயணர் கோவில் அமைவிடம்:</strong><br>AAR Royal Residency கோவில் வாசலில் இருந்து வெறும் <strong>300 மீட்டர் (5 நிமிட நடைபயணம்)</strong> தொலைவில் அமைந்துள்ளது. காலை 5:30 மணி முதல் தரிசனம் செய்யலாம்."
        },
        {
            keywords: ["restaurant", "food", "dining", "veg", "non-veg", "menu", "lunch", "dinner", "breakfast", "thali", "உணவு", "சைவம்", "அசைவம்", "சாப்பாடு", "பிரியாணி"],
            answer: "🍽️ <strong>அரண்மனை உணவகம்:</strong><br>பாரம்பரிய தென்னிந்திய தலைவாழை இலை சாப்பாடு, சீரக சம்பா பிரியாணி, செட்டிநாடு சிக்கன், மற்றும் காலை டிபன் கிடைக்கும். சைவ மற்றும் அசைவ சமையலறைகள் தனித்தனியாக உள்ளன."
        },
        {
            keywords: ["checkin", "checkout", "check in", "check out", "timing", "time", "arrival", "செக் இன்", "செக் அவுட்", "நேரம்"],
            answer: "⏰ <strong>வருகை & வெளியேறும் நேரம்:</strong><br>• செக்-இன்: <strong>12:00 PM</strong><br>• செக்-அவுட்: <strong>11:00 AM</strong><br>முன்கூட்டியே தெரிவித்தால் 24 மணி நேர வருகை அனுமதி உண்டு."
        },
        {
            keywords: ["facilities", "amenities", "wifi", "ac", "parking", "car parking", "security", "power", "பார்க்கிங்", "வசதிகள்", "வைபை", "ஏசி"],
            answer: "✨ <strong>5-ஸ்டார் வசதிகள்:</strong><br>• 100% Split AC அறைகள்<br>• இலவச அதிவேக Wi-Fi<br>• பாதுகாப்பான கார் & பஸ் பார்க்கிங்<br>• 24/7 ஜெனரேட்டர் பவர் பேக்கப்<br>• 24/7 சிசிடிவி பாதுகாப்பு & ரூம் சர்வீஸ்"
        },
        {
            keywords: ["book", "whatsapp", "reserve", "reservation", "contact", "phone", "number", "call", "பதிவு", "முன்பதிவு", "தொடர்பு", "வாட்ஸ்அப்"],
            answer: "📱 <strong>உடனடி WhatsApp முன்பதிவு:</strong><br>எங்கள் வரவேற்பறை மேனேஜருடன் பேசி முன்பதிவு செய்ய:<br><br><a href='https://wa.me/919876543210?text=வணக்கம்%20AAR%20Royal%20Residency,%20அறை%20முன்பதிவு%20செய்ய%20விரும்புகிறேன்' target='_blank' class='btn btn-primary btn-sm' style='display:inline-flex;margin-top:6px;'>WhatsApp-ல் பதிவு செய்க</a>"
        },
        {
            keywords: ["offer", "discount", "package", "deal", "promo", "coupon", "சலுகை", "தள்ளுபடி"],
            answer: "🎁 <strong>சிறப்பு தள்ளுபடி சலுகைகள்:</strong><br>• <strong>கோவில் பக்தர்கள் பேக்கேஜ்:</strong> 15% தள்ளுபடி (Code: <strong>TEMPLE15</strong>)<br>• <strong>குடும்ப தங்குமிடம்:</strong> 20% தள்ளுபடி (Code: <strong>FAMILY20</strong>)<br>• <strong>ஆடித் தபசு சலுகை:</strong> ₹500 தள்ளுபடி."
        }
    ]
};

function initChatbot() {
    if (!document.getElementById("royal-chatbot-container")) {
        const chatHTML = `
            <div id="royal-chatbot-container">
                <button class="chatbot-toggle" id="chatbot-toggle-btn" aria-label="Open AI Assistant">
                    <div class="chatbot-pulse-ring"></div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 10h.01M12 10h.01M16 10h.01"></path></svg>
                    <span class="chatbot-badge">AI</span>
                </button>

                <div class="chatbot-window" id="chatbot-window">
                    <div class="chatbot-header">
                        <div class="chatbot-header-info">
                            <div class="chatbot-avatar">👑</div>
                            <div>
                                <h4 class="chatbot-title">Royal Concierge AI</h4>
                                <span class="chatbot-status"><span class="status-dot"></span> Online • SankaranKovil</span>
                            </div>
                        </div>
                        <button class="chatbot-close" id="chatbot-close-btn" aria-label="Close Chat">&times;</button>
                    </div>

                    <div class="chatbot-messages" id="chatbot-messages">
                        <div class="chat-msg bot" id="bot-welcome-msg">
                            Welcome to <strong>AAR Royal Residency</strong>! How may I assist your stay in SankaranKovil today?
                            <div class="chat-chips">
                                <span class="chat-chip" onclick="handleChipClick('Room Tariffs')">💰 Room Tariffs</span>
                                <span class="chat-chip" onclick="handleChipClick('Temple Distance')">🛕 Temple Distance</span>
                                <span class="chat-chip" onclick="handleChipClick('Restaurant Menu')">🍽️ Dining Menu</span>
                                <span class="chat-chip" onclick="handleChipClick('Special Offers')">🎁 Special Offers</span>
                                <span class="chat-chip" onclick="handleChipClick('Book via WhatsApp')">📱 Book on WhatsApp</span>
                            </div>
                        </div>
                    </div>

                    <form class="chatbot-input-area" id="chatbot-form">
                        <input type="text" id="chatbot-input" class="chatbot-input" placeholder="Ask about rooms, temple, food..." autocomplete="off">
                        <button type="submit" class="chatbot-send" aria-label="Send Message">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </button>
                    </form>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML("beforeend", chatHTML);
    }

    const toggleBtn = document.getElementById("chatbot-toggle-btn");
    const closeBtn = document.getElementById("chatbot-close-btn");
    const chatWindow = document.getElementById("chatbot-window");
    const chatForm = document.getElementById("chatbot-form");
    const chatInput = document.getElementById("chatbot-input");

    if (!toggleBtn || !chatWindow) return;

    toggleBtn.addEventListener("click", () => {
        chatWindow.classList.toggle("open");
        if (chatWindow.classList.contains("open") && chatInput) {
            setTimeout(() => chatInput.focus(), 300);
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            chatWindow.classList.remove("open");
        });
    }

    if (chatForm) {
        chatForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (!text) return;
            handleUserMessage(text);
            chatInput.value = "";
        });
    }
}

function handleChipClick(chipText) {
    handleUserMessage(chipText);
}

function handleUserMessage(userText) {
    const messagesContainer = document.getElementById("chatbot-messages");
    if (!messagesContainer) return;

    // Append user message bubble
    const userMsgEl = document.createElement("div");
    userMsgEl.className = "chat-msg user";
    userMsgEl.innerText = userText;
    messagesContainer.appendChild(userMsgEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Show typing indicator
    const typingEl = document.createElement("div");
    typingEl.className = "chat-msg bot typing";
    typingEl.innerHTML = `<span></span><span></span><span></span>`;
    messagesContainer.appendChild(typingEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    setTimeout(() => {
        typingEl.remove();
        const botReply = generateBotResponse(userText);
        const botMsgEl = document.createElement("div");
        botMsgEl.className = "chat-msg bot";
        botMsgEl.innerHTML = botReply;
        messagesContainer.appendChild(botMsgEl);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 450);
}

function generateBotResponse(query) {
    const currentLang = localStorage.getItem("aar_lang") || "en";
    const q = query.toLowerCase();
    const knowledgeList = botKnowledge[currentLang] || botKnowledge.en;

    for (const item of knowledgeList) {
        for (const kw of item.keywords) {
            if (q.includes(kw.toLowerCase())) {
                return item.answer;
            }
        }
    }

    // Default fallback answer
    if (currentLang === "ta") {
        return "மன்னிக்கவும், உங்கள் கேள்விக்கு தெளிவான பதில் பெற எங்கள் வரவேற்பறை மேலாளருடன் WhatsApp-ல் பேசலாம்: <br><br><a href='https://wa.me/919876543210' target='_blank' class='btn btn-primary btn-sm' style='display:inline-flex;margin-top:6px;'>WhatsApp-ல் தொடர்பு கொள்ள</a>";
    }

    return "Thank you for reaching out! For detailed queries or custom bookings, please chat with our front desk manager on WhatsApp: <br><br><a href='https://wa.me/919876543210' target='_blank' class='btn btn-primary btn-sm' style='display:inline-flex;margin-top:6px;'>Chat on WhatsApp</a>";
}
