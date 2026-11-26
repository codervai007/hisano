// English copy. Each export overrides the Japanese one of the same name in
// site.ts / labels.ts; images and links are taken from the Japanese entries
// so they stay in one place.
import * as labels from "./labels";
import * as ja from "./site";

const site = {
  ...ja.site,
  description:
    "HISANO offers safe, convenient health foods through a range of online shops. We deliver free of charge anywhere in Japan, so you can get our products without any extra cost.",
};

// English names and prices, by product slug.
const enProducts: Record<string, { name: string; price: string }> = {
  "nmn-36000": { name: "HISANO PREMIUM NMN 36000", price: "¥49,680 (tax incl.)" },
  "okinawa-fucoidan": { name: "Okinawa Fucoidan Premium", price: "¥22,680 (tax incl.)" },
  "fucoidan": { name: "Fucoidan Premium", price: "¥38,000 (tax incl.)" },
  "ginkgo-dha": { name: "HISANO Ginkgo SQ DHA Omega 3-6-9 Premium", price: "¥19,440 (tax incl.)" },
  "bifidus": { name: "HISANO Bifidobacteria Premium+", price: "¥5,940 (tax incl.)" },
  "anserine": { name: "HISANO Anserine Premium+", price: "¥16,740 (tax incl.)" },
  "shark-cartilage": { name: "Shark Cartilage Power Plus", price: "¥19,332 (tax incl.)" },
  "cordyceps": { name: "Cordyceps Premium Class", price: "¥18,252 (tax incl.)" },
  "oyster-maca": { name: "HISANO Oyster Maca Premium", price: "¥17,820 (tax incl.)" },
  "nattokinase": { name: "HISANO NANO Nattokinase", price: "¥19,440 (tax incl.)" },
  "kaicho-enzyme": { name: "HISANO NANO Kaicho Enzyme", price: "¥13,800 (tax incl.)" },
  "liver-extract": { name: "HISANO Liver Extract Sei NANO Premium", price: "¥19,440 (tax incl.)" },
  "senobi": { name: "HISANO NANO Senobi Kakumei", price: "¥16,990 (tax incl.)" },
};

export const en = {
  site,

  nav: [
    { label: "Products", href: "/product" },
    { label: "About us", href: "/about" },
    { label: "Brochure", href: "/download" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    title: "One more sip, with a little more care.",
    text: "Getting every nutrient you need from meals alone takes time and effort. In answer to our customers, we make health foods that fit each person.",
  },

  heroBanners: [
    {
      ...ja.heroBanners[0],
      alt: "Healthy, beautiful days with nature's gifts. Future health and beauty, from within. HISANO. Carefully chosen natural ingredients; sound research and quality control; support for everyday health; beauty that shines from within.",
    },
    {
      ...ja.heroBanners[1],
      alt: "Healthy, beautiful days with nature's gifts. Future health and beauty, from within. HISANO. Supporting healthy days; nurturing beauty from within; staying lively and well, always.",
    },
  ],
  heroTitle: "Healthy, beautiful days with nature's gifts.",

  intro: {
    title: "Safe, convenient health foods",
    text: site.description,
  },

  featuredHeading: "Products made with a healthy life in mind",
  featured: [
    {
      ...ja.featured[0],
      badge: "Popular",
      name: "Shark Cartilage Power Plus",
      text: "Pure shark cartilage, made from shark cartilage powder alone. Chondroitin is found in foods such as chicken bones, but a shark's whole skeleton is cartilage, which makes it an especially efficient source of chondroitin.",
    },
    {
      ...ja.featured[1],
      badge: "Popular",
      name: "Cordyceps Premium Class",
      text: "Cordyceps Premium Class is made in Japan with 100% cordyceps, for peace of mind. Cordyceps is rich in cordycepin, beta-glucan, vitamins, minerals and 18 kinds of amino acids.",
    },
  ],

  detailLabel: "View details",

  productsHeading: "Our products",
  products: ja.products.map((p) => ({ ...p, ...enProducts[p.slug] })),

  rakuten: {
    ...ja.rakuten,
    text: "Buy HISANO products on Rakuten Ichiba",
    button: "Open the shop",
  },

  backToProducts: "Back to all products",
  priceLabel: "Manufacturer's suggested retail price",
  moreLabel: "See all products",
  showMore: "Show more",

  benefits: [
    {
      label: "Free shipping",
      title: "Anywhere in Japan",
      text: "We deliver free of charge anywhere in Japan. These are products you use every day, so we want you to pick them up without any extra burden, and never have to think about shipping costs.",
    },
    {
      label: "Secure shopping",
      title: "Shop with peace of mind",
      text: "Our shop uses advanced security measures to give you a safe online shopping environment. We take the greatest care with your personal information, so you can shop with confidence.",
    },
    {
      label: "Customer satisfaction",
      title: "Working to satisfy every customer",
      text: "We listen closely to our customers and keep improving. From product quality to delivery and customer support, we work to make sure you are satisfied in every way.",
    },
    {
      label: "Customer support",
      title: "Quick responses",
      text: "Our customer support team is here so you can shop with peace of mind. We answer phone and email enquiries quickly, so please feel free to get in touch.",
    },
  ],

  cta: {
    text: "For more about our products, please contact us",
    download: "Request a brochure",
    contact: "Contact us",
  },

  about: {
    ...ja.about,
    heroTitle: "We support your health, every day.",
    heroText:
      "To us, health is essential: it fills each day and makes the future richer. To support that, HISANO is dedicated to offering products suited to each person's needs, in a form you can rely on and keep up for the long term.",
    tagline:
      "Many of our health foods are loved in Japan and abroad. HISANO products bring you peace of mind and high quality.",
    factoryImage: { ...ja.about.factoryImage, alt: "AMS Life Science head-office factory" },
    production: {
      heading: "How we make our products",
      title: "Products you can use with confidence",
      text: "We will keep delivering products you can choose with confidence. We stay close to your health, protect the quality you trust, and work to make products that add to your everyday life.",
      factory:
        "HISANO health foods are proudly made at the AMS Life Science head-office factory. The factory is one of HISANO's main production sites and holds GMP (Good Manufacturing Practices) certification, the standard required for making high-quality products. GMP sets strict rules for a thorough quality-control process that keeps products safe and of high quality. At the factory, every step from manufacturing to inspection follows these standards closely. We keep to the highest quality standards so that we can deliver products you can use with confidence.",
    },
    sales: {
      heading: "Sales",
      title: "Sold online and in stores",
      text: "Our products are sold online and in stores. We also welcome enquiries about sales agency and wholesale, so please get in touch.",
    },
  },

  contactPage: {
    title: "Contact",
    lead: "Thank you for your interest. Please tell us about your enquiry below.",
    submit: "Send",
  },

  downloadPage: {
    title: "Request a brochure",
    lead: "Fill in the form below and you can download the brochure after sending it.",
    submit: "Request brochure",
  },

  formLabels: {
    name: "Name",
    email: "Email address",
    tel: "Phone number",
    company: "Company",
    message: "Your enquiry",
    consent: "I agree to the privacy policy",
    sending: "Sending…",
    done: "Sent. Thank you.",
    error: "Your message couldn't be sent. Please wait a moment and try again.",
    needKey: "The form's destination hasn't been set up yet.",
  },

  footer: {
    privacy: "Privacy policy",
    operator: "Operating company",
  },

  privacy: {
    title: "Privacy policy",
    body: "1. Definition of personal information\n\n\"Personal information\" means information about a living individual that can identify a specific person by the name, date of birth or other details it contains, including information that can easily be matched with other information and thereby identify a specific person.\n\n2. Collection of personal information\n\nOur shop may collect customers' personal information when they buy products or contact us. When we do, we state the purpose of use and collect it by lawful and fair means.\n\nThe personal information our shop collects is as follows.\n\na) Name and its reading (furigana)\n\nb) Address\n\nc) Phone number\n\nd) Email address\n\ne) Password\n\nf) Delivery address details\n\ng) The history and content of your transactions with our shop\n\nh) Information that can identify a specific person when the above are combined\n\n3. Use of personal information\n\nOur shop uses the personal information customers entrust to us for the following purposes.\n\na) Confirming and checking orders\n\nb) Confirming and checking shipments\n\nc) Replying to enquiries\n\nExcept in the cases below, our shop will not disclose or provide personal information to third parties without the customer's consent.\n\na) Where required by law, or where we need to cooperate with a national agency, a local government or a party commissioned by them in carrying out duties set by law\n\nb) Where it is necessary to protect a person's life, body or property and it is difficult to obtain the person's consent\n\nc) Where personal data is exchanged with affiliated companies of the company that operates our shop\n\n4. Security of personal information\n\nThe service provider takes reasonable organisational, physical, human and technical measures to keep the personal information customers entrust to us secure, and our shop handles it appropriately in line with the relevant laws, working to prevent unauthorised access to personal data and the loss, alteration or leakage of personal information.\n\n5. Correction and deletion of personal information\n\nTo correct or delete the personal information you have entrusted to us, please let us know through the contact details below. If you have registered as a user, you can also correct your personal information from \"My account\" in the site menu.\n\n6. Use of cookies\n\nWe may use cookies to provide you with a better service. Cookies do not allow us to collect information that identifies you personally, and they do not infringe your privacy.\n\n* Cookies are information sent from a server computer to your browser and stored on the hard disk of the computer you are using.\n\n7. Use of SSL\n\nWhen you enter personal information, we use SSL (Secure Sockets Layer) technology for security, to prevent that information from being intercepted, interfered with or altered.\n\n* SSL encrypts information to prevent eavesdropping and tampering during sending and receiving. Using SSL lets you send information more safely.\n\n8. Contact\n\nPlease see our notation based on the Act on Specified Commercial Transactions.\n\n9. Changes to this privacy policy\n\nWhen our shop changes the personal information it collects, its purposes of use or any other part of this privacy policy, the change is announced by updating this page.\n\nThis English translation is provided for convenience. If it differs from the Japanese version, the Japanese version prevails.",
  },

  // labels.ts
  menuLabels: {
    open: "Open menu",
    close: "Close menu",
    nav: "Menu",
  },
  footerLabels: {
    menu: "Menu",
    info: "Information",
    rakuten: "Rakuten shop",
  },
  ui: {
    ...labels.ui,
    mainNav: "Main",
    toTop: "Back to top",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    themeLight: "Light mode",
    themeDark: "Dark mode",
    langSwitch: "Change language",
  },
  formSubjects: {
    contact: "HISANO お問い合わせ (English)",
    download: "HISANO 資料請求 (English)",
  },
};
