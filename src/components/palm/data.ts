/**
 * Palm Gift Card - Site data
 * Team phone numbers live in the data layer so they can be used in
 * WhatsApp / SMS hrefs without ever being rendered as visible text.
 */

export type TeamMember = {
  name: string;
  role: string;
  /** digits only, with country code, no '+' - used inside wa.me and sms: links.
   *  When null, this agent has no direct WhatsApp line (e.g. the boss is display-only). */
  phoneDigits: string | null;
  image: string;
  blurb: string;
  specialty: "boss" | "crypto" | "cards" | "transfers" | "general";
  senior?: boolean;
};

const defaultMessage = (name: string) =>
  `Hello ${name} from Palm Gift Card! I would like to know more about your gift card trading, crypto exchange, and money transfer services. Thank you.`;

const defaultMessageForBrand = (brand: string) =>
  `Hello Palm Gift Card! I would like to trade a ${brand} gift card. Please share your best rate. Thank you!`;

const defaultMessageForService = (service: string) =>
  `Hello Palm Gift Card! I am interested in your ${service} service. Can you walk me through how it works? Thank you!`;

export const team: TeamMember[] = [
  {
    name: "Sisi",
    role: "Founder & CEO",
    phoneDigits: null, // Boss is display-only - no direct WhatsApp line
    image: "/images/team-boss-sisi.png",
    blurb:
      "The face of Palmcard Trading Limited. Sisi leads Palm Gift Card with a vision for honest, fast, and borderless trading. For trades and enquiries, reach any of our agents below - they are quick, verified, and ready to help.",
    specialty: "boss",
  },
  {
    name: "Diana",
    role: "China Office Manager",
    phoneDigits: "8619101302426",
    image: "/images/team-diana.jpeg",
    blurb:
      "Heads our China desk, helping customers across mainland China with gift cards, crypto, and cross-border transfers. Fluent in Mandarin, Cantonese, and English.",
    specialty: "transfers",
    senior: true,
  },
  {
    name: "Lousie",
    role: "Senior Trade Agent",
    phoneDigits: "85253746855",
    image: "/images/team-boss-lousie.jpeg",
    blurb:
      "Senior agent handling high-volume trades and partnership enquiries. Reach Lousie for fast quotes, large blocks, and anything the rest of the team escalates.",
    specialty: "cards",
    senior: true,
  },
  {
    name: "Bernice",
    role: "Senior Trade Agent",
    phoneDigits: "85254235248",
    image: "/images/team-bernice.jpeg",
    blurb:
      "Verifies high-value trades with care and precision. Known for fast quotes, instant payouts, and an eagle eye for fraudulent cards.",
    specialty: "cards",
    senior: true,
  },
  {
    name: "Luna",
    role: "Senior Crypto Agent",
    phoneDigits: "85252361782",
    image: "/images/team-luna.jpeg",
    blurb:
      "Specializes in cryptocurrency - Bitcoin, Ethereum, and USDT. Reach Luna for live rates, large blocks, and instant settlement.",
    specialty: "crypto",
    senior: true,
  },
  {
    name: "Anna",
    role: "Trade Agent",
    phoneDigits: "85257791737",
    image: "/images/team-anna.jpeg",
    blurb:
      "Your go-to for Apple, Steam, and Amazon gift cards. Friendly, quick, and always happy to walk new customers through their first trade.",
    specialty: "cards",
  },
  {
    name: "Lisa",
    role: "Trade Agent",
    phoneDigits: "85244218900",
    image: "/images/team-lisa.jpeg",
    blurb:
      "Handles global money transfers and cross-border remittance with competitive exchange rates and same-day settlement.",
    specialty: "transfers",
  },
  {
    name: "Bella",
    role: "Trade Agent",
    phoneDigits: "85267613365",
    image: "/images/team-bella.jpeg",
    blurb:
      "Specialist in Visa, Walmart, and Google Play cards. Reach Bella for fast verification and instant payment.",
    specialty: "cards",
  },
  {
    name: "Evelyn",
    role: "Trade Agent",
    phoneDigits: "85246777662",
    image: "/images/team-evelyn.jpeg",
    blurb:
      "On call for Xbox, Nike, and Sephora cards. Patient with first-time sellers and always happy to answer any question.",
    specialty: "cards",
  },
  {
    name: "Elisa",
    role: "Trade Agent",
    phoneDigits: "85269025589",
    image: "/images/team-elisa.jpeg",
    blurb:
      "Covers eBay, Macy's, and a wide range of specialty gift cards. Quick to respond and easy to deal with.",
    specialty: "cards",
  },
];

export const boss = team[0];

/** All agents who actually have a WhatsApp line (excludes the boss who is display-only). */
export const agentsWithWhatsApp: TeamMember[] = team.filter(
  (m) => m.phoneDigits !== null
);

/** Pick the first agent with a WhatsApp line, useful when the boss has no number. */
export const firstAgent: TeamMember = agentsWithWhatsApp[0];

export const whatsappLink = (member: TeamMember) =>
  member.phoneDigits
    ? `https://wa.me/${member.phoneDigits}?text=${encodeURIComponent(defaultMessage(member.name))}`
    : "#";

export const whatsappLinkForBrand = (brand: string, member: TeamMember = firstAgent) =>
  member.phoneDigits
    ? `https://wa.me/${member.phoneDigits}?text=${encodeURIComponent(defaultMessageForBrand(brand))}`
    : "#";

export const whatsappLinkForService = (service: string, member: TeamMember = firstAgent) =>
  member.phoneDigits
    ? `https://wa.me/${member.phoneDigits}?text=${encodeURIComponent(defaultMessageForService(service))}`
    : "#";

export const smsLink = (member: TeamMember) =>
  member.phoneDigits ? `sms:${member.phoneDigits}` : "#";

/* ─── Brand catalogue (replaces the photo gallery) ─── */

export type BrandCategory = "All" | "Entertainment" | "Shopping" | "Gaming" | "Food" | "Crypto";

export type Brand = {
  name: string;
  category: Exclude<BrandCategory, "Crypto" | "All">;
};

export const brands: Brand[] = [
  { name: "Apple", category: "Entertainment" },
  { name: "Amazon", category: "Shopping" },
  { name: "Steam", category: "Gaming" },
  { name: "Google Play", category: "Entertainment" },
  { name: "Xbox", category: "Gaming" },
  { name: "PlayStation", category: "Gaming" },
  { name: "Visa", category: "Shopping" },
  { name: "Mastercard", category: "Shopping" },
  { name: "Walmart", category: "Shopping" },
  { name: "Target", category: "Shopping" },
  { name: "eBay", category: "Shopping" },
  { name: "Nike", category: "Shopping" },
  { name: "Adidas", category: "Shopping" },
  { name: "Sephora", category: "Shopping" },
  { name: "Ulta", category: "Shopping" },
  { name: "Macy's", category: "Shopping" },
  { name: "Bath & Body Works", category: "Shopping" },
  { name: "Best Buy", category: "Shopping" },
  { name: "Home Depot", category: "Shopping" },
  { name: "Lowe's", category: "Shopping" },
  { name: "Netflix", category: "Entertainment" },
  { name: "Spotify", category: "Entertainment" },
  { name: "iTunes", category: "Entertainment" },
  { name: "Disney", category: "Entertainment" },
  { name: "Roblox", category: "Gaming" },
  { name: "Fortnite", category: "Gaming" },
  { name: "League of Legends", category: "Gaming" },
  { name: "Steam Wallet", category: "Gaming" },
  { name: "Starbucks", category: "Food" },
  { name: "DoorDash", category: "Food" },
  { name: "Uber Eats", category: "Food" },
  { name: "Subway", category: "Food" },
  { name: "Chipotle", category: "Food" },
  { name: "Domino's", category: "Food" },
  { name: "GAP", category: "Shopping" },
  { name: "Zara", category: "Shopping" },
  { name: "Hollister", category: "Shopping" },
  { name: "Marshalls", category: "Shopping" },
  { name: "DSW", category: "Shopping" },
  { name: "Cabela's", category: "Shopping" },
  { name: "Academy", category: "Shopping" },
  { name: "Zales", category: "Shopping" },
  { name: "Shell", category: "Shopping" },
  { name: "Visa Prepaid", category: "Shopping" },
  { name: "American Express", category: "Shopping" },
  { name: "Vanilla", category: "Shopping" },
  { name: "OneVanilla", category: "Shopping" },
  { name: "Nordstrom", category: "Shopping" },
  { name: "GameStop", category: "Gaming" },
  { name: "Razer Gold", category: "Gaming" },
];

export const cryptoTokens = [
  { symbol: "BTC", name: "Bitcoin" },
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "USDT", name: "Tether" },
  { symbol: "BNB", name: "BNB" },
  { symbol: "SOL", name: "Solana" },
  { symbol: "XRP", name: "Ripple" },
  { symbol: "USDC", name: "USD Coin" },
  { symbol: "TRX", name: "Tron" },
];

export const transferCurrencies = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "NGN", name: "Nigerian Naira" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "AUD", name: "Australian Dollar" },
];

export const brandCategories: BrandCategory[] = [
  "All",
  "Entertainment",
  "Shopping",
  "Gaming",
  "Food",
];

/* ─── Gift card slideshow (real generated card images) ─── */

export type CardSlide = {
  brand: string;
  category: Exclude<BrandCategory, "Crypto" | "All">;
  image: string;
  tag: string;
};

export const cardSlides: CardSlide[] = [
  { brand: "Apple", category: "Entertainment", image: "/images/cards/apple.jpg", tag: "App Store & iTunes" },
  { brand: "Amazon", category: "Shopping", image: "/images/cards/amazon.jpg", tag: "Shopping" },
  { brand: "Steam", category: "Gaming", image: "/images/cards/steam.jpg", tag: "Gaming Wallet" },
  { brand: "Google Play", category: "Entertainment", image: "/images/cards/google-play.jpg", tag: "Apps & Games" },
  { brand: "Xbox", category: "Gaming", image: "/images/cards/xbox.jpg", tag: "Gaming" },
  { brand: "Visa", category: "Shopping", image: "/images/cards/visa.jpg", tag: "Prepaid" },
  { brand: "Walmart", category: "Shopping", image: "/images/cards/walmart.jpg", tag: "Shopping" },
  { brand: "Sephora", category: "Shopping", image: "/images/cards/sephora.jpg", tag: "Beauty" },
  { brand: "Nike", category: "Shopping", image: "/images/cards/nike.jpg", tag: "Sportswear" },
  { brand: "Netflix", category: "Entertainment", image: "/images/cards/netflix.jpg", tag: "Streaming" },
  { brand: "Starbucks", category: "Food", image: "/images/cards/starbucks.jpg", tag: "Coffee" },
  { brand: "eBay", category: "Shopping", image: "/images/cards/ebay.jpg", tag: "Marketplace" },
  { brand: "Spotify", category: "Entertainment", image: "/images/cards/spotify.jpg", tag: "Music Premium" },
  { brand: "PlayStation", category: "Gaming", image: "/images/cards/playstation.jpg", tag: "PSN Store" },
  { brand: "Macy's", category: "Shopping", image: "/images/cards/macy.jpg", tag: "Department Store" },
  { brand: "Best Buy", category: "Shopping", image: "/images/cards/bestbuy.jpg", tag: "Electronics" },
];
