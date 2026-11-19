// data/rooms.js
import { IMGS } from "../assets/images.js";
const COMMON_AMENITIES = [
  "Breakfast included",
  "High-speed Free Wi-Fi",
  "Free Parking available on premises",
  "Electricity and Generator backup 24/7",
  "Reliable hot water supply at all times",
  "Complimentary water & refreshments on arrival",
  "24-hour security",
];
export const ROOMS = [
  {
    id: "Room_One",
    name: "Standard Triple Room",
    category: "Standard Triple",
    price: "PKR  7,196",
    // priceAC: "PKR 9,000", // <-- UPDATE THIS PRICE AS PER YOUR REAL AC RATE
    priceNum: 7196,
    // priceACNum: 9000,
    inventory: 9,      // Non-AC Total Rooms
    // inventoryAC: 2,    // AC Total Rooms
    beds: "1 twin bed and 1 king bed",
    size: "25 m²",
    view: "Mountain View",
    capacity: 2,       // Base guests without mattress
    maxMattress: 1,    // Max 1 extra mattress allowed (Total 3 guests max)
    mattressPrice: 3000,
    heroImg: IMGS.executivevilla01,
    gallery: [
      IMGS.executivevilla01,
      IMGS.executivevilla02,
      IMGS.executivevilla03,
      IMGS.executivevilla04,
      IMGS.executivevilla05,
      IMGS.executivevilla06,
    ],
    desc: "A cozy and elegant space perfectly suited for a peaceful getaway.",
    longDesc: "The Room One is ideal for those looking for comfort and simplicity. With soft interiors, clean finishes, and breathtaking glimpses of the surrounding mountains, it offers just the right balance of ease and connection to the landscape. Everything you need, thoughtfully in place.",
    measurements: [
      "Total Area: 25 m²",
      "Bedroom: 1 twin bed and 1 king bed"
    ],
    facilities: [
      "Breakfast included",
      "Ensuite bathroom",
      "Landmark & Inner Courtyard View",
      "Private entrance",
      "Entire unit located on ground floor"
    ],
    amenities: COMMON_AMENITIES,
    extra: [
      "Heating (seasonal)",
      "Laundary service",
      "Extra mattress & breakfast — Rs 3,000 per person",
      "Bonfire / BBQ arrangements on request"
    ]
  },
  {
    id: "Room_Two",
    name: "Deluxe Triple Room",
    category: "Deluxe Triple",
    price: "PKR 8,883",
    //  priceAC: "PKR 22,000",
    priceNum: 8883,
    // priceACNum: 11000,
    inventory: 7,       // Non-AC Total Rooms
    // inventoryAC: 11,    // AC Total Rooms
    beds: "1 twin bed & 1 king bed",
    size: "26 m²",
    view: "Mountain & Pool View",
    capacity: 2,        // Base guests
    maxMattress: 2,     // Max 2 extra mattresses (Total 4 guests max)
    mattressPrice: 3000,
    heroImg: IMGS.deluxeluxarysuite01,
    gallery: [
      IMGS.deluxeluxarysuite01,
      IMGS.executivevilla02,
      IMGS.deluxeluxarysuite03,
      IMGS.deluxeluxarysuite04,
      IMGS.deluxeluxarysuite05,
      IMGS.deluxeluxarysuite06,
    ],
    desc: "Spacious and luxurious, designed for families or larger groups.",
    longDesc: "Unique round design, airy living space, and stylish lounge setup—ideal for up to 4 adults to unwind and enjoy a serene Skardu escape.",
    measurements: [
      "Total Area: 72 m²",
      "Bedroom 1: 1 Extra-large double bed / 2 Twins",
    ],
    facilities: [
      "Balcony with Mountain, Pool & Garden views",
      "Dedicated Seating Area & Desk",
      "Sofa & Electric kettle",
      "Ensuite bathroom",
      "Private entrance",
      "Entire unit located on ground floor"
    ],
    amenities: COMMON_AMENITIES,
    extra: [
      "Towels/sheets available (extra fee)",
      "Outdoor furniture & dining area",
      "Clothes rack & Drying rack"
    ]
  },
  {
    id: "Room_Three",
    name: "Superior Triple Room",
    category: "Superior Triple",
    price: "PKR 12,540",
    priceNum: 12540,
    inventory: 1,       // Only 1 room available
    beds: "1 king bed",
    size: "28 m²",
    view: "Panoramic View",
    capacity: 4,        // Base guests
    maxMattress: 1,     // 1 extra mattress (Total 5 guests max)
    mattressPrice: 3000,
    heroImg: IMGS.kingsuite01,
    gallery: [
      IMGS.kingsuite01,
      IMGS.kingsuite02,
      IMGS.kingsuite03,
      IMGS.kingsuite04,
      IMGS.kingsuite05,
      IMGS.kingsuite06,
    ],
    desc: "Our largest accommodation, offering multiple bedrooms for ultimate privacy.",
    longDesc: "The Room Three offers two separate bedrooms and a spacious living room. It's the perfect sanctuary for large families seeking the highest level of comfort and privacy in the Karakoram.",
    measurements: [
      "Total Area: 28 m²",
      "Bedroom 1: 1 king bed",
      "Bedroom 2: 1 king bed"
    ],
    facilities: [
      "Dedicated Seating Area",
      "Ensuite bathroom",
      "Free premium toiletries",
      "Landmark & Inner Courtyard View",
      "Private entrance"
    ],
    amenities: COMMON_AMENITIES,
    extra: [
      "Towels/sheets available (extra fee)",
      "Outdoor furniture & dining area",
      "Clothes rack & Drying rack"
    ]
  },
  {
    id: "Room-Four",
    name: "King Room",
    category: "King",
    price: "PKR 13,300",
    priceNum: 13300,
    inventory: 1,       // Assuming 1 unit, adjust if needed
    beds: " 2 twin beds & 1 king bed ",
    size: "31 m²",
    view: "Private Patio View",
    capacity: 8,        // 8 persons max
    maxMattress: 0,     // For now 0, as you mentioned "baad am daikhtay hy"
    mattressPrice: 3000,
    heroImg: IMGS.fbedchalet01,
    gallery: [
      IMGS.fbedchalet01,
      IMGS.deluxeluxarysuite02,
      IMGS.fbedchalet03,
      IMGS.fbedchalet04,
      IMGS.fbedchalet05,
      IMGS.fbedchalet06,

    ],
    desc: "Premium comfort featuring climate control and private patio access.",
    longDesc: "Room Four with a spacious multi-room layout, cozy central seating area, and a perfect setup for groups or families—offering comfort, privacy, and a relaxed stay.",
    measurements: [
      "Total Area: 31 m²",
      "Bedroom 1: 2 twin beds & 1 king bed",
      "Bedroom 2: 2 twin beds & 1 king bed",
      "Additional: Round communal seating area"
    ],
    facilities: [
      "Wardrobe/storage space",
      "Cozy central seating area",
      "Free premium toiletries",
      "Shower & En-suite Toilet",
      "Landmark & Inner Courtyard View",
      "Private entrance",
      "Entire unit located on ground floor"
    ],
    amenities: COMMON_AMENITIES,
    extra: [
      "Towels/sheets available (extra fee)",
      "Outdoor furniture & dining area",
      "Clothes rack & Drying rack"
    ]
  },
  {
    id: "Room-Five",
    name: "Superior Queen Room",
    category: "Superior Queen",
    price: "PKR 12,000",
    priceNum: 12000,
    inventory: 1,       // Assuming 1 unit, adjust if needed
    beds: " 1 twin bed & 1 king bed ",
    size: "28m²",
    view: "Private Patio View",
    capacity: 8,        // 8 persons max
    maxMattress: 0,     // For now 0, as you mentioned "baad am daikhtay hy"
    mattressPrice: 3000,
    heroImg: IMGS.queenroom01,
    gallery: [
      IMGS.queenroom01,
      IMGS.deluxeluxarysuite02,
      IMGS.deluxeluxarysuite06,
      IMGS.fbedchalet04,
      IMGS.kingsuite02,
      IMGS.fbedchalet06,

    ],
    desc: "Premium comfort featuring climate control and private patio access.",
    longDesc: "Room Four with a spacious multi-room layout, cozy central seating area, and a perfect setup for groups or families—offering comfort, privacy, and a relaxed stay.",
    measurements: [
      "Total Area: 28m²",
      "Bedroom 1: 1 twin bed & 1 king bed",
      "Bedroom 2: 1 twin bed & 1 king bed",
      "Additional: Round communal seating area"
    ],
    facilities: [
      "Wardrobe/storage space",
      "Cozy central seating area",
      "Free premium toiletries",
      "Shower & En-suite Toilet",
      "Landmark & Inner Courtyard View",
      "Private entrance",
      "Entire unit located on ground floor"
    ],
    amenities: COMMON_AMENITIES,
    extra: [
      "Towels/sheets available (extra fee)",
      "Outdoor furniture & dining area",
      "Clothes rack & Drying rack"
    ]
  },
  {
    id: "Room-Six",
    name: "Standard King Room",
    category: "Standard King",
    price: "PKR 8,636",
    priceNum: 8636,
    inventory: 1,       // Assuming 1 unit, adjust if needed
    beds: " 3 twin beds ",
    size: "28 m²",
    view: "Private Patio View",
    capacity: 8,        // 8 persons max
    maxMattress: 0,     // For now 0, as you mentioned "baad am daikhtay hy"
    mattressPrice: 3000,
    heroImg: IMGS.standardking01,
    gallery: [
      IMGS.standardking01,
      IMGS.deluxeluxarysuite02,
      IMGS.kingsuite04,
      IMGS.fbedchalet04,
      IMGS.queenroom01,
      IMGS.fbedchalet06,

    ],
    desc: "Premium comfort featuring climate control and private patio access.",
    longDesc: "Room Four with a spacious multi-room layout, cozy central seating area, and a perfect setup for groups or families—offering comfort, privacy, and a relaxed stay.",
    measurements: [
      "Total Area: 28m²",
      "Bedroom 1: 3 twin beds",
      "Bedroom 2: 3 twin beds",
      "Additional: Round communal seating area"
    ],
    facilities: [
      "Wardrobe/storage space",
      "Cozy central seating area",
      "Free premium toiletries",
      "Shower & En-suite Toilet",
      "Landmark & Inner Courtyard View",
      "Private entrance",
      "Entire unit located on ground floor"
    ],
    amenities: COMMON_AMENITIES,
    extra: [
      "Towels/sheets available (extra fee)",
      "Outdoor furniture & dining area",
      "Clothes rack & Drying rack"
    ]
  }
];

// Passing inventory data dynamically for the modal
export function getRoomVariants() {
  const variants = [];
  ROOMS.forEach(room => {
    if (room.priceAC) {
      variants.push({ key: `${room.id}::nonAC`, roomId: room.id, room, variantLabel: "Non AC", price: room.priceNum, inventory: room.inventory });
      variants.push({ key: `${room.id}::AC`, roomId: room.id, room, variantLabel: "With AC", price: room.priceACNum, inventory: room.inventoryAC });
    } else {
      variants.push({ key: `${room.id}::default`, roomId: room.id, room, variantLabel: null, price: room.priceNum, inventory: room.inventory });
    }
  });
  return variants;
}

export function defaultVariantKey(room) {
  return room.priceAC ? `${room.id}::nonAC` : `${room.id}::default`;
}

// ... GALLERY_CATEGORIES AND GALLERY_IMAGES STAY EXACTLY THE SAME ...
export const GALLERY_CATEGORIES = [
  { id: "all", label: "All Photos" },
  // { id: "exterior", label: "Resort Exterior" },
  // { id: "rooms", label: "Rooms" },
  // { id: "dining", label: "Dining" },
  // { id: "pool", label: "Pool & Grounds" },
  // { id: "events", label: "Events" },
];

export const GALLERY_IMAGES = [
  {
    id: "executivevilla01",
    src: IMGS.executivevilla02,
    alt: "Executive Villa",
    caption: "Executive Villa",
  },
  {
    id: "deluxeluxarysuite02",
    src: IMGS.fbedchalet01,
    alt: "Deluxe Luxury Suite",
    caption: "Deluxe Luxury Suite",
  },
  {
    id: "kingsuite01",
    src: IMGS.kingsuite02,
    alt: "King Suite",
    caption: "King Suite",
  },
  {
    id: "fbedchalet03",
    src: IMGS.fbedchalet04,
    alt: "Four Bed Chalet",
    caption: "Four Bed Chalet",
  },
  {
    id: "executivevilla04",
    src: IMGS.executivevilla04,
    alt: "Executive Villa",
    caption: "Executive Villa",
  },
  {
    id: "deluxeluxarysuite05",
    src: IMGS.deluxeluxarysuite03,
    alt: "Deluxe Luxury Suite",
    caption: "Deluxe Luxury Suite",
  },
  {
    id: "kingsuite04",
    src: IMGS.kingsuite03,
    alt: "King Suite",
    caption: "King Suite",
  },
  {
    id: "fbedchalet06",
    src: IMGS.fbedchalet02,
    alt: "Four Bed Chalet",
    caption: "Four Bed Chalet",
  },
  {
    id: "executivevilla06",
    src: IMGS.executivevilla03,
    alt: "Executive Villa",
    caption: "Executive Villa",
  },
];