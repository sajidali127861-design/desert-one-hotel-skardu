// ============================================================================
//  src/siteConfig.js  —  ⭐ NAYA HOTEL BANANE KE LIYE SABSE PEHLE YEHI FILE EDIT KARO ⭐
//  Hotel ka naam, contact, links, saara text, reviews, hero images yahin hain.
//  (Colours/fonts ke liye: src/theme.css   |   Room data ke liye: src/data/rooms.js
//   Images ki list ke liye: src/assets/images.js)
// ============================================================================
import { IMGS } from "./assets/images.js";
/* ───────────── 1. HOTEL IDENTITY ───────────── */
export const HOTEL_NAME = "Desert One Hotel \n Skardu";   // Navbar + Footer (lamba naam)
export const HOTEL_SHORT_NAME = "Desert One Hotel Skardu";             // text ke andar jahan naam aata hai
export const HOTEL_BRAND_WORD = "Desert One Hotel Skardu";                     // sirf ek lafz (hero highlight, headings)
export const HOTEL_CITY = "Skardu";
export const HOTEL_TAGLINE = "Where the Mountains Meet Timeless Luxury";
export const HOTEL_LOCATION = "Desert One Hotel Airport Road Astana Chonghi Skardu, 16100 Skardu, Pakistan";
export const HOTEL_EMAIL = "desertonehotel.skardu@gmail.com";
export const HOTEL_PHONE = "03101988660";
export const WHATSAPP_NUMBER = "03101988660";               // + ke baghair
// Room detail page ke "CALL US AT" box mein ye alag number dikhta hai (pehle se aisa hi tha).
// Agar dono same karne hon to yahan HOTEL_PHONE likh do.
export const HOTEL_ROOM_PAGE_PHONE = "03101988660";

export const LOCALE = "en-PK";   // date / number format
export const CURRENCY_LABEL = "PKR";

/* ───────────── 2. LINKS ───────────── */
export const SOCIAL = {
  instagram: "https://www.facebook.com/DesertOneHotel/",
  facebook: "https://www.instagram.com/desertonehotel/",
};
export const BOOKING_COM_URL = "https://www.booking.com/hotel/pk/desert-one-skardu.html?aid=304142&label=gen173nr-10CAsotQFCE2FyaXNoLWx1eHVyeS1zdWl0ZXNIM1gEaLUBiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuAKnwfDXBsACAdICJDBlODhmNjU5LWE1NmUtNDFmNC1hZTUyLWI4ZGQyY2IxNjhlZtgCAeACAQ&sid=b5f385d32b293f536e8c4f1197562c17&dest_id=10180615&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1794908379&srpvid=65a943e8fe8c090f&type=total&ucfs=1&#tab-reviews";

export const MAP_EMBED_URL = "https://maps.google.com/maps?q=Desert+One+Hotel+Airport+Road+Astana+Chonghi+Skardu+16100+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed";
export const MAP_OPEN_URL = "https://www.google.com/maps/search/?api=1&query=Desert+One+Hotel+Airport+Road+Astana+Chonghi+Skardu+16100+Pakistan";
export const PLUS_CODE = "16100 Skardu, Gilgit-Baltistan";

// Google Apps Script (booking form -> Sheet + email). Setup steps: README.md
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzB679vijSyhfyd4gv0JU2KfmH7AxJ2-8FkaqGbN1sxhKjYZgRpJgph2V2rxmonled6uQ/exec";

/* ───────────── 3. BOOKING POLICY (modal ke rules) ───────────── */
export const BOOKING_POLICY = {
  freeChildrenPerRoom: 1,   // har room mein itne bachay free
  childMaxAge: 10,          // is umar se kam = bacha
};

/* ───────────── 4. WHATSAPP / EMAIL MESSAGES ───────────── */
export const MESSAGES = {
  greeting: "Assalamu Alaikum! 🌿",
  closing: "Thank you! 🙏",
  bookingIntro: `I would like to make a reservation at ${HOTEL_SHORT_NAME}.`,
  askConfirm: "Could you please confirm availability and share the booking details?",
  roomInterest: (room) => `I am interested in booking the *${room}* at ${HOTEL_SHORT_NAME}, ${HOTEL_CITY}.`,
  roomAsk: "Could you please share availability and pricing details?",
  generalIntro: `I would like to make a reservation at ${HOTEL_SHORT_NAME}, ${HOTEL_CITY}.`,
  generalAsk: "Could you please help me with availability and room options?",
  enquiryFallback: `I have an enquiry about ${HOTEL_SHORT_NAME}.`,
  guestFallback: "Guest",
  labels: { room: "🏨 *Room:*", checkIn: "📅 *Check-in:*", checkOut: "📅 *Check-out:*", nights: "🌙 *Nights:*", guests: "👥 *Guests:*", name: "*Name:*" },
};
export const EMAIL_TEMPLATE = {
  subjectPrefix: "General Enquiry",
  greeting: `Hi ${HOTEL_SHORT_NAME},`,
  signoff: "Best regards,",
};

/* ───────────── 5. NAVBAR / FOOTER / SHARED ───────────── */
export const NAV_LINKS = [
  { label: "Home", key: "home" }, { label: "Rooms", key: "rooms" }, { label: "Gallery", key: "gallery" },
  , { label: "About", key: "about" }, { label: "Contact", key: "contact" },
];
export const NAVBAR = { bookNow: "BOOK NOW", bookNowMobile: "📅 BOOK NOW" };

export const FOOTER = {
  logoAlt: "logo",
  tagline: "Where the mountains meet timeless luxury.",
  navigateTitle: "NAVIGATE", contactTitle: "CONTACT", socialTitle: "SOCIAL",
  whatsappLink: "💬 WhatsApp Us", instagramLabel: "📸 Instagram", facebookLabel: "📘 Facebook",
  copyrightSuffix: "All Rights Reserved",
};

export const THANK_YOU = {
  title: "Thank You!",
  message: `Thank you for booking with ${HOTEL_SHORT_NAME}. Your booking has been placed successfully. For confirmation, our team will call you shortly on the number you provided.`,
  button: "DONE",
};
export const WHATSAPP_FAB = { title: "Chat with us on WhatsApp", ariaLabel: "Book on WhatsApp" };

/* ───────────── 6. HOME PAGE ───────────── */
export const HOME = {
  hero: {
    slides: [IMGS.hero02, IMGS.hero01, IMGS.hero03],
    intervalMs: 5500,
    // titleLine1: "Discover the True Meaning of",
    highlight: HOTEL_BRAND_WORD,
    subtitle: "A Heritage Retreat in Skardu Valley",
  },
  welcome: {
    heading: `Welcome to ${HOTEL_BRAND_WORD}`,
    subheading: "Experience the Serenity of the North",
    text: `Welcome our guests to ${HOTEL_BRAND_WORD} Resort located in the heart of Skardu. Nestled amidst the majestic Karakoram peaks, our retreat offers a perfect blend of traditional Baltistani heritage and modern comfort. Let nature be your sanctuary.`,
    image: IMGS.main,
    imageAlt: `Welcome to ${HOTEL_SHORT_NAME}`,
  },
  quickBook: {
    checkIn: "Check-in", checkOut: "Check-out", guests: "Guests",
    guestOptions: ["1 Guest", "2 Guests", "3 Guests", "4+ Guests"],
    defaultGuests: "2 Guests",
    button: "Check Availability",
  },
  featured: { label: "ACCOMMODATIONS", heading: "Featured Rooms", count: 3, button: "VIEW ALL ROOMS" },
  dining: {
    label: "What Awaits You",
    heading: `Heritage Culinary Experience at ${HOTEL_BRAND_WORD}`,
    points: [
      "A beautifully crafted dining space with panoramic views of the Karakoram peaks.",
      "Floor-to-ceiling windows enhancing your dining experience with natural mountain light.",
      "Perfect for intimate meals and larger gatherings, offering traditional Balti cuisine.",
    ],
    image: IMGS.heritange,
    imageAlt: "Heritage Restaurant",
  },
  amenities: {
    label: "Resort Facilities",
    heading: `All-Inclusive Amenities at ${HOTEL_SHORT_NAME}`,
    items: [
      ["📡", "COMPLIMENTARY WI-FI"], ["🚗", "FREE PARKING"], ["🍽️", "ON-SITE RESTAURANT"],
      ["🛎️", "ROOM SERVICE"], ["🏔️", "GUIDED TOURS"], ["🔥", "BONFIRE NIGHTS"],
    ],
  },
  reviews: {
    heading: HOTEL_SHORT_NAME,
    thumbImage: IMGS.hero02, thumbAlt: "Resort Thumbnail",
    subtitle: "Real Booking guest reviews",
    writeButton: "Write a review",
    readOriginal: "Read original",
    verified: "✓ Verified",
    autoScrollMs: 4000,
  },
  location: {
    label: "Explore Skardu", heading: "Our Location",
    plusCodeLabel: "Plus Code:",
    button: "🗺️ Open in Google Maps",
    mapTitle: `${HOTEL_SHORT_NAME} Skardu Accurate Location`,
  },
  cta: {
    heading: "Ready to Reserve Your Stay?",
    text: "Let the Karakoram welcome you. Reach us directly on WhatsApp for instant booking.",
    button: "Book via WhatsApp",
  },
};

// Guest reviews (home page carousel). avatarImg ya avatarColor + initial.

export const REVIEWS = [
  // 1. Muhammad
  {
    name: "Muhammad",
    country: "Pakistan",
    flag: "🇵🇰",
    date: "6 July 2024",
    title: "Best of best",
    score: 10,
    room: "Classic Quadruple Room",
    stay: "1 night · July 2024",
    traveler: "Solo traveler",
    positive:
      "One of the best hotels in Skardu. It was a great choice. The staff is humble and they take good care of all their guests. Food is also excellent. The location is one of the best, about 20 meters away from the main road, so there is peace and a silent environment. The city is just 2 km from here. You can find the best restaurants nearby, along with shopping markets for dry fruits and cultural shops. All are the best!",
    avatarImg: null,
    avatarColor: "#008C45",
    initial: "M",
  },

  // 2. Gul
  {
    name: "Gul",
    country: "Pakistan",
    flag: "🇵🇰",
    date: "26 September 2026",
    title: "Exceptional",
    score: 10,
    room: "Superior Double Room",
    stay: "1 night · July 2026",
    traveler: "Solo traveler",
    positive:
      "A wonderful experience in Skardu. The hotel offers a comfortable and peaceful environment. The staff is friendly, welcoming, and always ready to help. Highly recommended for anyone visiting Skardu.",
    commentSource: "AI-generated sample",
    avatarImg: null,
    avatarColor: "#38B6DD",
    initial: "G",
  },

  // 3. Naveed
  {
    name: "Naveed",
    country: "Pakistan",
    flag: "🇵🇰",
    date: "20 August 2026",
    title: "Exceptional",
    score: 10,
    room: "Standard Triple Room",
    stay: "1 night · July 2026",
    traveler: "Solo traveler",
    positive:
      "Excellent hospitality and a very comfortable stay. The rooms are clean and well maintained, and the staff makes sure guests feel welcome. I would definitely recommend this hotel to others.",
    commentSource: "AI-generated sample",
    avatarImg: null,
    avatarColor: "#008C45",
    initial: "N",
  },

  // 4. Moiz
  {
    name: "Moiz",
    country: "Pakistan",
    flag: "🇵🇰",
    date: "17 July 2026",
    title: "Exceptional",
    score: 10,
    room: "Deluxe Triple Room",
    stay: "3 nights · July 2026",
    traveler: "Solo traveler",
    positive:
      "Had a pleasant and relaxing stay. The hotel provides a peaceful atmosphere, comfortable accommodation, and helpful staff. Everything made my visit to Skardu enjoyable.",
    commentSource: "AI-generated sample",
    avatarImg: null,
    avatarColor: "#6BA443",
    initial: "M",
  },

  // 5. Lee
  {
    name: "Lee",
    country: "South Korea",
    flag: "🇰🇷",
    date: "20 September 2024",
    title: "Wonderful",
    score: 9.0,
    room: "Superior Queen Room",
    stay: "3 nights · September 2024",
    traveler: "Couple",
    positive:
      "A wonderful place to stay while visiting Skardu. The hotel provides a comfortable atmosphere, friendly hospitality, and a relaxing experience. A great choice for couples exploring the beautiful region.",
    commentSource: "AI-generated sample",
    avatarImg: null,
    avatarColor: "#0065A8",
    initial: "L",
  },

  // Existing reviews
  {
    name: "Akbar",
    country: "Netherlands",
    flag: "🇳🇱",
    date: "16 August 2026",
    title: "Overall, the combination of outstanding hospitality.",
    positive:
      "We had a wonderful stay at Skardu Saraye Hotel.",
    avatarImg: null,
    avatarColor: "#5C6BC0",
    initial: "A",
  },

  {
    name: "Mohammed",
    country: "United Kingdom",
    flag: "🇬🇧",
    date: "14 August 2026",
    title: "Excellent and would stay again.",
    positive:
      "Great location, beautiful views, quiet depending if any events going on nearby.",
    negative: [
      "If being critical then toilets could be better but for the price then this doesn’t matter."
    ],
    avatarImg: null,
    avatarColor: "#29B6F6",
    initial: "M",
  },

  {
    name: "Saleem",
    country: "Pakistan",
    flag: "🇵🇰",
    date: "9 August 2026",
    title: "Exceptional",
    positive:
      "We had a wonderful stay here! The property is clean, very well maintained.",
    avatarImg: null,
    avatarColor: "#7E57C2",
    initial: "S",
  },

  {
    name: "Orange",
    country: "United Kingdom",
    flag: "🇬🇧",
    date: "14 September 2026",
    title: "Thank you for making me feel soo much at home🏡",
    positive:
      "Thank you for making me feel soo much at home🏡\n\nMy stay at Skardu Saraye was truly special.",
    avatarImg: null,
    avatarColor: "#5352ED",
    initial: "P",
  },
];

/* ───────────── 7. ROOMS PAGES ───────────── */
export const ROOMS_PAGE = {
  label: "ACCOMMODATIONS",
  title: "Rooms",
  text: `Each accommodation at ${HOTEL_SHORT_NAME} is a handcrafted retreat — designed to blend heritage architecture with modern comfort against the backdrop of the Karakoram.`,
  categories: [
    "All",
    "Standard Triple Room",
    "Deluxe Triple Room",
    "Superior Triple Room",
    "King Room",
    "Superior Queen Room",
    "Stand King Room"
  ],   // room ki "category" (rooms.js) se match hona chahiye
  empty: "No rooms in this category.",
};
export const ROOM_CARD = { badgeFallback: "ROOM", bedsFallback: "Beds N/A", sizeFallback: "Size N/A", startingFrom: "Starting from", viewButton: "VIEW" };
export const ROOM_DETAIL = {
  measurements: "MEASUREMENTS:", facilities: "FACILITIES:", extra: "EXTRA:",
  price: "PRICE", amenities: "AMENITIES", callUs: "CALL US AT", emailUs: "EMAIL US AT",
  perNightNonAC: "/ Per Night (Non AC)", perNightAC: "/ Per Night (with AC)",
  bookButtonPrefix: "Book This", galleryTitle: "Room Gallery",
  photoAlt: (room, i) => `${room.name} — photo ${i + 1}`,
  photoCaption: (room, i, total) => `${room.name} — Photo ${i + 1} of ${total}`,
  gridAlt: (room, i) => `${room.name} ${i + 1}`,
};

/* ───────────── 8. GALLERY PAGE ───────────── */
export const GALLERY_PAGE = {
  label: "VISUAL STORIES", title: "Gallery",
  text: `A glimpse into the beauty of ${HOTEL_SHORT_NAME} — from our heritage architecture and rooms to the majestic Karakoram that surrounds us.`,
  empty: "No photos in this category yet.",
  showing: (n) => `Showing ${n} photo${n !== 1 ? "s" : ""}`,
};

/* ───────────── 9. ABOUT PAGE ───────────── */
export const ABOUT = {
  heroImage: IMGS.hero01, heroAlt: `${HOTEL_SHORT_NAME} aerial`,
  label: "OUR STORY", title: `About ${HOTEL_SHORT_NAME}`,
  storyHeading: "Born From the Mountains",
  paragraphs: [
    `${HOTEL_SHORT_NAME} was built with one vision: to create a place where travellers can find true sukoon — peace — in the cradle of the world's mightiest mountain range.`,
    "Located in Skardu, Gilgit-Baltistan, our property spans several acres of sculpted landscape featuring circular heritage huts, a central swimming pool, manicured lawns, and a domed restaurant that celebrates local culture through food and architecture.",
    `We believe that luxury and authenticity are not opposites. Every structure at ${HOTEL_BRAND_WORD} is built using traditional Baltistani techniques — mud-plaster walls, hand-carved wooden ceilings, stone pathways, and locally forged iron fixtures. Our guests often say it feels like stepping into a living museum, except with every modern comfort.`,
    "We are committed to sustainable, community-rooted hospitality — employing local craftsmen, sourcing ingredients from nearby farms, and preserving the integrity of this sacred landscape for generations to come.",
  ],
  stats: [["6", "Room Types"], ["0.5 Acres", "Hotel Grounds"], ["Skardu", "GB, Pakistan"]],
  design: {
    image: IMGS.heritange, imageAlt: "Heritage fort exterior",
    label: "OUR DESIGN PHILOSOPHY", heading: "Heritage Meets Hospitality",
    paragraphs: [
      "Inspired by the ancient forts and circular dwelling traditions of Baltistan, our architects worked closely with local artisans to design each structure from the ground up.",
      "The result is a resort that does not sit on the landscape — it grows from it. Stone walls, earthen plaster, dark timber, and warm amber lighting create a harmony between shelter and sky that you have to experience to fully understand.",
    ],
  },
};

/* ───────────── 10. AMENITIES PAGE ───────────── */
export const AMENITIES_PAGE = {
  label: "RESORT EXPERIENCES", title: "Amenities & Facilities",
  text: `Beyond exceptional rooms, ${HOTEL_SHORT_NAME} offers a curated collection of experiences rooted in the landscape and culture of Gilgit-Baltistan.`,
  items: [
    {
      icon: "🏊", title: "Outdoor Pool", from: "left", img: IMGS.pool,
      desc: "Our signature pool, sculpted to follow the natural landscape, sits at the heart of the resort with breathtaking views of the snow-capped Karakoram. Heated during cooler months, it's open year-round for guests to enjoy the crisp mountain air."
    },
    {
      icon: "🍽️", title: "Heritage Restaurant", from: "right", img: IMGS.gallery02,
      desc: "Housed beneath a dramatic circular domed ceiling with amber wall sconces, our restaurant serves authentic Baltistani cuisine alongside continental dishes. Tables are set with handcrafted wooden accents and draped in local linen."
    },
    {
      icon: "🚗", title: "Airport Transfer", from: "left", img: IMGS.airportimage,
      desc: "Arrive in comfort. We arrange seamless pickup and drop-off service from Skardu Airport. Share your flight details at booking, and our team will be waiting for you."
    },
    {
      icon: "🔥", title: "Bonfire & Stargazing Nights", from: "right", img: IMGS.hero02,
      desc: "As the sun falls behind the Karakoram, we light the bonfire. With near-zero light pollution, the Milky Way stretches across the entire sky. Our team sets up seating, local snacks, and hot chai for a truly unforgettable night."
    },
    {
      icon: "🏔️", title: "Guided Mountain Treks", from: "left", img: IMGS.trackingimage,
      desc: "Explore the ancient valleys and towering peaks with our expert local guides. From gentle morning hikes to multi-day K2 base camp treks, we connect you to this extraordinary landscape at your own pace."
    },
    {
      icon: "🧘", title: "Wellness & Meditation", from: "right", img: IMGS.gallery16,
      desc: "Begin your mornings with guided yoga on our open terraces as the mountain mist rises. Our wellness programme draws from local Baltistani tradition — breathing, stillness, and the healing power of altitude and silence."
    },
  ],
  cta: {
    label: "PLAN YOUR STAY",
    heading: `Experience It All at ${HOTEL_BRAND_WORD}`,
    text: "Reach out to our team on WhatsApp to arrange a bespoke package that includes all the experiences you desire.",
    button: "📱 PLAN MY STAY",
  },
};

/* ───────────── 11. CONTACT PAGE ───────────── */
export const CONTACT_PAGE = {
  label: "GET IN TOUCH", title: "Contact Us",
  text: "Our team is here to help you plan the perfect mountain escape. Select your preferences or send an enquiry directly via WhatsApp or Email.",
  infoHeading: "We'd Love to Hear From You",
  infoCards: [
    ["📍", "Location", HOTEL_LOCATION],
    ["📞", "Phone / WhatsApp", HOTEL_PHONE],
    ["📧", "Email", HOTEL_EMAIL],
    ["🕐", "Booking Hours", "Open Daily · 8AM – 10PM PKT"],
  ],
  formTitle: "Send an Enquiry",
  formText: "Fill out the details below and reach us instantly through whatsApp.",
  nameLabel: "Your Name", namePlaceholder: "e.g. Sajid Mir",
  messageLabel: "Your Message", messagePlaceholder: "Tell us about your visit — tentative dates, suite preference, group size…",
  whatsappButton: "📱 SEND VIA WHATSAPP", emailButton: "✉️ SEND VIA EMAIL",
};

/* ───────────── 12. BOOKING WIDGET (abhi kisi page mein use nahi ho raha) ───────────── */
export const BOOKING_WIDGET = {
  titleRoom: "Reserve This Room", titleGeneral: "Check Availability",
  selectedRoom: "Selected Room", checkIn: "Check-in Date", checkOut: "Check-out Date", guests: "Number of Guests",
  errCheckIn: "Please select a check-in date.", errCheckOut: "Please select a check-out date.",
  buttonRoom: "📱 BOOK ON WHATSAPP", buttonGeneral: "📱 CHECK AVAILABILITY",
  footnote: "Instant confirmation · No hidden fees · Reply within hour",
};

/* ───────────── 13. BOOKING MODAL (Book Now popup) ───────────── */
const plural = (n, one, many) => (n === 1 ? one : many);
export const MODAL = {
  title: "Book Your Stay",
  subtitleAll: "Choose any mix of rooms — different types, different quantities — then fill your details once.",
  subtitleSingle: (name) => `Booking the ${name}. Add an extra mattress below if needed, or add other rooms to this same request.`,
  fallbackRoomName: "this room",
  step1: "1. Select Rooms", step2: "2. Your Details",
  sleeps: "Sleeps", perNight: "/night", maxAvailable: "Max Available:",
  mattressLabel: (priceText) => `Breakfast + Extra mattress (${priceText}/night)`,
  showOnly: (name) => `− Show only ${name}`, addOthers: "+ Add other rooms to this booking",
  selection: (n) => `Your Selection (${n} room${n > 1 ? "s" : ""})`,
  extraMattress: (n) => `extra mattress${n > 1 ? "es" : ""}`,
  estimatedTotal: "Estimated Total",
  nightsSuffix: (n) => ` (${n} night${n > 1 ? "s" : ""})`,
  totalNote: "Per-night rate shown — select dates below for full-stay total.",
  labels: { firstName: "First Name *", lastName: "Last Name *", email: "Email *", phone: "Contact Number *", whatsapp: "WhatsApp Number *", checkIn: "Check in Date *", checkOut: "Check out Date *", adults: "Adults *", children: "Children *" },
  childrenHint: `(Under ${BOOKING_POLICY.childMaxAge})`,
  whatsappPlaceholder: "03466990348",
  submit: "Request Booking", submitting: "Submitting...",
  errors: {
    noRoom: "Please select at least one room before submitting.",
    overCapacity: (max, adults) => `Your selected rooms can only accommodate up to ${max} adults (including extra mattresses). You have entered ${adults} adults. Please add more rooms.`,
    needMattress: (base, adults, needed) => `Room base capacity is ${base}. For ${adults} adults, please add ${needed} extra mattress(es) using the '+' button above.`,
    tooManyChildren: (children, rooms) => {
      const n = BOOKING_POLICY.freeChildrenPerRoom;
      return `Only ${n} ${plural(n, "child", "children")} (under ${BOOKING_POLICY.childMaxAge} yrs) is free per room. You have ${children} children and ${rooms} room(s). Please count extra children as adults or add extra mattresses/rooms.`;
    },
  },
};
