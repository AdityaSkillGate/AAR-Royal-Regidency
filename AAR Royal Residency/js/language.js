/* ================================================================
   AAR Royal Residency - Dynamic Client-Side Localization Engine
   Loads /locales/{lang}.json and translates DOM elements dynamically
   Supports: data-i18n, data-i18n-html, data-i18n-placeholder, data-i18n-title
   ================================================================ */

// Fallback embedded dictionaries for local file:// execution without web server
window.__LOCAL_DICTS = {
    en: {
        "nav_home": "Home",
        "nav_about": "About Us",
        "nav_rooms": "Rooms",
        "nav_all_rooms": "All Rooms & Suites",
        "nav_restaurant": "Restaurant & Dining",
        "nav_facilities": "Facilities & Amenities",
        "nav_attractions": "Attractions",
        "nav_gallery": "Gallery",
        "nav_offers": "Offers",
        "nav_reviews": "Reviews",
        "nav_faq": "FAQ",
        "nav_contact": "Contact Us",
        "btn_book_now": "Book Now",
        "hero_badge": "Welcome to Royalty",
        "hero_title": "Comfortable Stay in SankaranKovil",
        "hero_desc": "Experience traditional warmth, modern luxury, and unmatched hospitality in the heart of Tenkasi District.",
        "hero_btn_book": "Book a Stay",
        "hero_btn_about": "About Us",
        "search_checkin": "Check-In Date",
        "search_checkout": "Check-Out Date",
        "search_guests": "Guests",
        "search_guests_1": "1 Guest",
        "search_guests_2": "2 Guests",
        "search_guests_3": "3 Guests",
        "search_guests_4": "4+ Family",
        "search_room_type": "Room Type",
        "search_room_std": "Standard Room (₹1,499)",
        "search_room_dlx": "Deluxe Room (₹2,499)",
        "search_room_fam": "Family Suite (₹3,999)",
        "search_btn": "Check Availability",
        "intro_badge": "Heritage & Comfort",
        "intro_title": "A Sanctuary of Royal Hospitality",
        "intro_p1": "AAR Royal Residency offers travelers and pilgrims a serene, palace-like experience in SankaranKovil. We are conveniently situated just 300 meters (~5 minutes walk) from the historic Sri Sankaranarayanar Temple.",
        "intro_p2": "Whether visiting for temple darshan, family vacation, or business, we provide impeccably clean AC rooms, authentic pure veg and non-veg dining, and 24/7 personalized care.",
        "intro_btn_facilities": "Explore Facilities",
        "intro_btn_story": "Our Heritage",
        "why_badge": "Key Highlights",
        "why_title": "Why Choose AAR Royal Residency?",
        "why_subtitle": "Thoughtful amenities designed to make your stay memorable and comfortable.",
        "why_h1": "5 Mins Walk to Temple",
        "why_p1": "Reach Sri Sankaranarayanar Temple easily within 5 minutes for morning and evening darshan.",
        "why_h2": "100% Split AC Rooms",
        "why_p2": "Modern temperature control, plush bedding, high-speed Wi-Fi, and smart entertainment.",
        "why_h3": "Palace Fine Dining",
        "why_p3": "Authentic South Indian pure veg meals and traditional non-veg feasts cooked in separate kitchens.",
        "why_h4": "Secure Vehicle Parking",
        "why_p4": "Spacious on-site parking for cars, vans, and buses with 24/7 CCTV surveillance.",
        "stays_badge": "Accommodations",
        "stays_title": "Our Luxurious Rooms & Suites",
        "room_std_title": "Standard Room",
        "room_std_price": "₹1,499",
        "room_price_per_night": "/ night",
        "room_std_f1": "Split AC Climate Control",
        "room_std_f2": "High-Speed Free Wi-Fi",
        "room_std_f3": "Flat Screen LED TV",
        "room_std_f4": "24/7 Hot Water & Room Service",
        "room_dlx_title": "Deluxe Room",
        "room_dlx_price": "₹2,499",
        "room_dlx_f1": "King Size Bed & Seating Lounge",
        "room_dlx_f2": "Premium AC & Elegant Decor",
        "room_dlx_f3": "High-Speed Free Wi-Fi",
        "room_dlx_f4": "Complimentary Toiletries",
        "room_fam_title": "Royal Family Suite",
        "room_fam_price": "₹3,999",
        "room_fam_f1": "2 King Beds (4-5 Guests)",
        "room_fam_f2": "Spacious Living Area",
        "room_fam_f3": "Complimentary Morning Tea/Coffee",
        "room_fam_f4": "Priority 24/7 Concierge",
        "btn_view_details": "View Details",
        "btn_book_whatsapp": "Book via WhatsApp",
        "comp_title": "Room Comparison Matrix",
        "comp_th_features": "Features",
        "comp_th_std": "Standard Room",
        "comp_th_dlx": "Deluxe Room",
        "comp_th_fam": "Family Suite",
        "comp_row_tariff": "Tariff / Night",
        "comp_row_occ": "Max Occupancy",
        "comp_occ_std": "2 Adults",
        "comp_occ_dlx": "2 Adults + 1 Child",
        "comp_occ_fam": "4 - 5 Family Members",
        "comp_row_bed": "Bed Type",
        "comp_bed_std": "1 Double Bed",
        "comp_bed_dlx": "1 King Size Bed",
        "comp_bed_fam": "2 King Size Double Beds",
        "comp_row_ac": "Air Conditioning",
        "comp_row_wifi": "Complimentary Wi-Fi",
        "comp_row_hotwater": "24-hr Hot Water",
        "comp_yes": "Available 24/7",
        "comp_btn_all": "View All Room Features",
        "stats_guests": "Happy Guests",
        "stats_rooms": "Luxury Rooms",
        "stats_experience": "Years Experience",
        "stats_support": "24/7 Support",
        "tour_badge": "Virtual Tour",
        "tour_title": "Take a Glance at our Residency",
        "tour_desc": "Explore our grand reception lobby, cozy suites, and restaurant ambience.",
        "tour_btn_gallery": "Photo Gallery",
        "tour_btn_video": "Request Video on WhatsApp",
        "dining_badge": "Fine Dining",
        "dining_title": "Flavors of South India",
        "dining_desc": "Hot South Indian traditional banana leaf meals, flavorful Chettinad specialties, and aromatic Nellai biryani prepared with utmost hygiene.",
        "dining_btn_menu": "View Dining Menu",
        "reviews_badge": "Guest Reviews",
        "reviews_title": "What Our Guests Say",
        "reviews_subtitle": "Rated 4.8 / 5.0 by over 850+ pilgrims and families.",
        "reviews_btn_all": "Read All Reviews",
        "map_badge": "Prime Location",
        "map_title": "Locate Us on Google Maps",
        "map_subtitle": "Situated near Sri Sankaranarayanar Temple with easy road access.",
        "cta_badge": "Instant Reservation",
        "cta_title": "Reserve Your Stay in SankaranKovil Today",
        "cta_desc": "Enjoy direct booking discounts and instant confirmation without any middleman fees.",
        "cta_btn_book": "Book Directly on WhatsApp",
        "footer_about_title": "AAR Royal Residency",
        "footer_about_desc": "Experience royal comfort, fine dining, and unmatched hospitality in SankaranKovil. Your sanctuary of peace and luxury near Sri Sankaranarayanar Temple.",
        "footer_explore_title": "Explore",
        "footer_contact_title": "Contact Us",
        "footer_location_title": "Our Location",
        "footer_address": "SankaranKovil, Tenkasi District, Tamil Nadu - 627756",
        "footer_phone": "+91 98765 43210",
        "footer_email": "reservations@aarroyalresidency.com",
        "footer_copyright": "© 2026 AAR Royal Residency. All Rights Reserved.",
        "footer_privacy": "Privacy Policy",
        "footer_terms": "Terms & Conditions",
        "footer_credit": "Designed and Maintained by Aditya Skill Gate IT Solution"
    },
    ta: {
        "nav_home": "முகப்பு",
        "nav_about": "எங்களைப் பற்றி",
        "nav_rooms": "அறைகள்",
        "nav_all_rooms": "அனைத்து அறைகள் & சூட்கள்",
        "nav_restaurant": "உணவகம் & விருந்து",
        "nav_facilities": "விடுதி வசதிகள்",
        "nav_attractions": "சுற்றுலா இடங்கள்",
        "nav_gallery": "படத்தொகுப்பு",
        "nav_offers": "சலுகைகள்",
        "nav_reviews": "மதிப்புரைகள்",
        "nav_faq": "கேள்வி-பதில்கள்",
        "nav_contact": "தொடர்புக்கு",
        "btn_book_now": "முன்பதிவு செய்க",
        "hero_badge": "அரச குடும்ப வரவேற்பு",
        "hero_title": "சங்கரன்கோவிலில் அமைதியான சொகுசு தங்குமிடம்",
        "hero_desc": "தென்காசி மாவட்டத்தின் மையப்பகுதியில் பாரம்பரிய விருந்தோம்பல், அதிநவீன வசதிகள் மற்றும் அமைதியான சூழலுடன் கூடிய உயர்தர தங்குமிடம்.",
        "hero_btn_book": "அறை முன்பதிவு",
        "hero_btn_about": "எங்களைப் பற்றி",
        "search_checkin": "வருகை தேதி (Check-In)",
        "search_checkout": "வெளியேறும் தேதி (Check-Out)",
        "search_guests": "விருந்தினர்கள்",
        "search_guests_1": "1 விருந்தினர்",
        "search_guests_2": "2 விருந்தினர்கள்",
        "search_guests_3": "3 விருந்தினர்கள்",
        "search_guests_4": "4+ குடும்பத்தினர்",
        "search_room_type": "அறை வகை",
        "search_room_std": "ஸ்டாண்டர்ட் அறை (₹1,499)",
        "search_room_dlx": "டீலக்ஸ் அறை (₹2,499)",
        "search_room_fam": "ஃபேமிலி சூட் (₹3,999)",
        "search_btn": "அறை உள்ளதா என பார்க்க",
        "intro_badge": "பாரம்பரிய விருந்தோம்பல்",
        "intro_title": "உயர்தர விருந்தோம்பலின் உன்னத தலம்",
        "intro_p1": "AAR Royal Residency சங்கரன்கோவிலில் தங்கும் பயணிகளுக்கு ஓர் அமைதியான அரண்மனை போன்ற அனுபவத்தை வழங்குகிறது. வரலாற்று சிறப்புமிக்க ஸ்ரீ சங்கரநாராயணர் கோவில் மிக அருகில் (சுமார் 300 மீட்டர்) அமைந்துள்ளது.",
        "intro_p2": "பக்தர்கள், குடும்பங்கள், சுற்றுலா பயணிகள் மற்றும் தொழில் நிமித்தமாக வருவோருக்கு தூய்மையான AC அறைகள், உயர்தர சைவ/அசைவ உணவகம் மற்றும் 24 மணி நேர பாதுகாப்பு சேவை வழங்குகிறோம்.",
        "intro_btn_facilities": "வசதிகளை அறிய",
        "intro_btn_story": "எங்கள் வரலாறு",
        "why_badge": "சிறப்பம்சங்கள்",
        "why_title": "ஏன் AAR ராயல் ரெசிடென்சி?",
        "why_subtitle": "உங்கள் சங்கரன்கோவில் பயணத்தை மறக்க முடியாத இனிமையான அனுபவமாக மாற்றும் வசதிகள்.",
        "why_h1": "கோவிலுக்கு 5 நிமிடம் நடை",
        "why_p1": "ஸ்ரீ சங்கரநாராயணர் கோவிலுக்கு மிக எளிதாக 5 நிமிடத்தில் நடந்து செல்லலாம்.",
        "why_h2": "100% Split AC அறைகள்",
        "why_p2": "குளிர்சாதன வசதி, மென்மையான படுக்கை, அதிவேக Wi-Fi மற்றும் Smart TV.",
        "why_h3": "சுவையான அரண்மனை உணவகம்",
        "why_p3": "தூய சைவ உணவுகள் மற்றும் பாரம்பரிய தென் மாவட்ட அசைவ சுவை விருந்து.",
        "why_h4": "பாதுகாப்பான வாகன பார்க்கிங்",
        "why_p4": "கார்கள் மற்றும் சுற்றுலா வாகனங்களுக்கு 24/7 CCTV கண்காணிப்புடன் கூடிய இலவச பார்க்கிங்.",
        "stays_badge": "தங்கும் அறைகள்",
        "stays_title": "எங்கள் சொகுசு அறைகள் & சூட்கள்",
        "room_std_title": "ஸ்டாண்டர்ட் அறை",
        "room_std_price": "₹1,499",
        "room_price_per_night": "/ இரவு",
        "room_std_f1": "Split AC குளிர்சாதன வசதி",
        "room_std_f2": "இலவச அதிவேக Wi-Fi",
        "room_std_f3": "Flat Screen LED TV",
        "room_std_f4": "24/7 ரூம் சர்வீஸ் & வெந்நீர் வசதி",
        "room_dlx_title": "டீலக்ஸ் அறை",
        "room_dlx_price": "₹2,499",
        "room_dlx_f1": "அகலமான கிங் சைஸ் படுக்கை",
        "room_dlx_f2": "பிரீமியம் AC & இன்டீரியர் வடிவமைப்பு",
        "room_dlx_f3": "அதிவேக இலவச Wi-Fi",
        "room_dlx_f4": "நவீன குளியலறை & டாய்லெட்ரீஸ்",
        "room_fam_title": "ராயல் ஃபேமிலி சூட்",
        "room_fam_price": "₹3,999",
        "room_fam_f1": "2 கிங் சைஸ் படுக்கைகள் (4-5 நபர்கள்)",
        "room_fam_f2": "பிரத்யேக சிட்டிங் லவுஞ்ச் வசதி",
        "room_fam_f3": "காலை டீ / காபி காம்ப்ளிமென்டரி",
        "room_fam_f4": "24/7 முன்னுரிமை சேவை",
        "btn_view_details": "விவரம் காண்க",
        "btn_book_whatsapp": "WhatsApp-ல் பதிவு செய்க",
        "comp_title": "அறை ஒப்பீட்டு அட்டவணை",
        "comp_th_features": "வசதிகள்",
        "comp_th_std": "ஸ்டாண்டர்ட்",
        "comp_th_dlx": "டீலக்ஸ்",
        "comp_th_fam": "ஃபேமிலி சூட்",
        "comp_row_tariff": "கட்டணம் / இரவு",
        "comp_row_occ": "நபர்கள் எண்ணிக்கை",
        "comp_occ_std": "2 பெரியவர்கள்",
        "comp_occ_dlx": "2 பெரியவர்கள் + 1 குழந்தை",
        "comp_occ_fam": "4 - 5 நபர்கள் / குடும்பம்",
        "comp_row_bed": "படுக்கை வகை",
        "comp_bed_std": "1 டபுள் பெட்",
        "comp_bed_dlx": "1 கிங் சைஸ் பெட்",
        "comp_bed_fam": "2 கிங் சைஸ் டபுள் பெட்",
        "comp_row_ac": "Air Conditioning",
        "comp_row_wifi": "இலவச Wi-Fi",
        "comp_row_hotwater": "24 மணி நேர வெந்நீர்",
        "comp_yes": "24 மணி நேரமும் உண்டு",
        "comp_btn_all": "முழு அறை விவரங்களை அறிய",
        "stats_guests": "மகிழ்ச்சியான விருந்தினர்கள்",
        "stats_rooms": "சொகுசு அறைகள்",
        "stats_experience": "வருட பாரம்பரிய சேவை",
        "stats_support": "24/7 வாடிக்கையாளர் உதவி",
        "tour_badge": "நேரடி காட்சி",
        "tour_title": "ஹோட்டல் காட்சிகளை பார்வையிடுங்கள்",
        "tour_desc": "எங்கள் வரவேற்பறை, டீலக்ஸ் அறைகள் மற்றும் உணவகத்தின் புகைப்படங்களை கண்டுகளியுங்கள்.",
        "tour_btn_gallery": "படத்தொகுப்பு காண்க",
        "tour_btn_video": "WhatsApp-ல் வீடியோ பெற",
        "dining_badge": "அரண்மனை உணவகம்",
        "dining_title": "தென் தமிழகத்தின் சுவையான விருந்து",
        "dining_desc": "சுடச்சுட தென் இந்திய பாரம்பரிய சைவ தலைவாழை இலை சாப்பாடு, நறுமணமிக்க செட்டிநாடு மற்றும் நெல்லை அசைவ உணவுகள் சுகாதாரமான முறையில் தயார் செய்யப்படுகிறது.",
        "dining_btn_menu": "உணவு மெனு காண்க",
        "reviews_badge": "மதிப்புரைகள்",
        "reviews_title": "விருந்தினர்களின் கருத்துக்கள்",
        "reviews_subtitle": "850+ பக்தர்கள் மற்றும் குடும்பங்களின் 4.8 / 5.0 நட்சத்திர மதிப்பீடு.",
        "reviews_btn_all": "அனைத்து மதிப்புரைகளையும் படிக்க",
        "map_badge": "அமைவிடம்",
        "map_title": "வரைபடத்தில் எங்களை கண்டறிய",
        "map_subtitle": "ஸ்ரீ சங்கரநாராயணர் கோவில் அருகில் எளிதான சாலை வசதியுடன்.",
        "cta_badge": "உடனடி முன்பதிவு",
        "cta_title": "சங்கரன்கோவிலில் உங்கள் தங்குதலை இன்றே பதிவு செய்யுங்கள்",
        "cta_desc": "குறைந்த கட்டணத்தில் உடனடி உறுதிப்படுத்தலுக்கு WhatsApp வழியாக முன்பதிவு செய்யுங்கள்.",
        "cta_btn_book": "WhatsApp-ல் முன்பதிவு செய்க",
        "footer_about_title": "AAR Royal Residency",
        "footer_about_desc": "சங்கரன்கோவிலில் அரச குடும்பத்திற்கு இணையான தங்குமிடம், சுவையான உணவு மற்றும் பாசமிக்க உபசரிப்பு. ஸ்ரீ சங்கரநாராயணர் கோவில் அருகில் உங்கள் அமைதியான இல்லம்.",
        "footer_explore_title": "பக்கங்கள்",
        "footer_contact_title": "தொடர்புக்கு",
        "footer_location_title": "அமைவிடம்",
        "footer_address": "சங்கரன்கோவில், தென்காசி மாவட்டம், தமிழ்நாடு - 627756",
        "footer_phone": "+91 98765 43210",
        "footer_email": "reservations@aarroyalresidency.com",
        "footer_copyright": "© 2026 AAR Royal Residency. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
        "footer_privacy": "தனியுரிமைக் கொள்கை",
        "footer_terms": "விதிமுறைகள் & நிபந்தனைகள்",
        "footer_credit": "Designed and Maintained by Aditya Skill Gate IT Solution"
    }
};

const I18N = {
    currentLang: "en",
    translations: {},
    supportedLanguages: ["en", "ta"],

    async init() {
        const savedLang = localStorage.getItem("aar_lang");
        this.currentLang = (savedLang && this.supportedLanguages.includes(savedLang)) ? savedLang : "en";
        
        await this.loadLanguage(this.currentLang);
        this.bindEvents();
    },

    async loadLanguage(lang) {
        if (!this.supportedLanguages.includes(lang)) lang = "en";
        this.currentLang = lang;
        localStorage.setItem("aar_lang", lang);

        try {
            const res = await fetch(`locales/${lang}.json`);
            if (res.ok) {
                this.translations[lang] = await res.json();
            } else {
                throw new Error(`HTTP fetch status: ${res.status}`);
            }
        } catch (e) {
            // Fallback for file:// or offline
            if (window.__LOCAL_DICTS && window.__LOCAL_DICTS[lang]) {
                this.translations[lang] = window.__LOCAL_DICTS[lang];
            }
        }

        this.applyTranslations();
        this.updateSwitcherUI();
        document.documentElement.lang = lang;

        // Dispatch language change event for other scripts (chatbot, booking, etc.)
        window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang: this.currentLang, dict: this.getDict() } }));
    },

    getDict() {
        return this.translations[this.currentLang] || (window.__LOCAL_DICTS ? window.__LOCAL_DICTS[this.currentLang] : {}) || {};
    },

    translateKey(key) {
        const dict = this.getDict();
        return dict[key] || null;
    },

    applyTranslations() {
        const dict = this.getDict();
        if (!dict || Object.keys(dict).length === 0) return;

        // Plain text elements
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        // HTML elements
        document.querySelectorAll("[data-i18n-html]").forEach(el => {
            const key = el.getAttribute("data-i18n-html");
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        // Placeholder attributes
        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (dict[key] !== undefined) {
                el.setAttribute("placeholder", dict[key]);
            }
        });

        // Title attributes
        document.querySelectorAll("[data-i18n-title]").forEach(el => {
            const key = el.getAttribute("data-i18n-title");
            if (dict[key] !== undefined) {
                el.setAttribute("title", dict[key]);
            }
        });
    },

    updateSwitcherUI() {
        document.querySelectorAll(".lang-btn").forEach(btn => {
            const btnLang = btn.getAttribute("data-lang");
            if (btnLang === this.currentLang) {
                btn.classList.add("active");
                btn.setAttribute("aria-pressed", "true");
            } else {
                btn.classList.remove("active");
                btn.setAttribute("aria-pressed", "false");
            }
        });
    },

    bindEvents() {
        // Delegate clicks on any language button across header/mobile/footer
        document.addEventListener("click", (e) => {
            const btn = e.target.closest(".lang-btn");
            if (btn) {
                e.preventDefault();
                const targetLang = btn.getAttribute("data-lang");
                if (targetLang && targetLang !== this.currentLang) {
                    this.loadLanguage(targetLang);
                }
            }
        });
    }
};

// Global helper for direct calls
function setLanguage(lang) {
    I18N.loadLanguage(lang);
}

function getCurrentLang() {
    return I18N.currentLang;
}

function t(key) {
    return I18N.translateKey(key) || key;
}

// Auto initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
    I18N.init();
});
