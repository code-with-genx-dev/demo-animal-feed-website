/**
 * Centralized Business Configuration
 * 
 * Reusability Guarantee:
 * You can completely rebrand this website by changing the values in this file
 * without touching any React component markup or layout code.
 */

export const businessConfig = {
  name: "Sri Lakshmi Animal Feeds",
  shortName: "Sri Lakshmi Feeds",
  tagline: "Quality Feed for Better Growth",
  description:
    "Reliable cattle, poultry, and livestock feed products for farmers, retailers, and commercial dairy/poultry businesses. Wholesale & retail supply with trusted doorstep delivery.",

  // If set to null or empty string, BusinessLogo automatically renders the styled dynamic text logo
  logo: "", 

  phone: "+91 98765 43210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "contact@srilakshmifeeds.com",

  address: {
    street: "142/3 Main Road, Near Cooperative Bank",
    locality: "Anthiyur",
    district: "Erode",
    region: "Tamil Nadu",
    postalCode: "638501",
    country: "India",
    formatted: "142/3 Main Road, Anthiyur, Erode, Tamil Nadu - 638501"
  },

  // Direct Google Maps search / direction link
  googleMapsUrl: "https://maps.google.com/?q=Anthiyur,+Erode,+Tamil+Nadu",
  embedMapQuery: "Anthiyur, Tamil Nadu",

  workingHours: {
    weekdays: "8:30 AM - 7:30 PM",
    saturday: "8:30 AM - 7:30 PM",
    sunday: "9:00 AM - 1:30 PM",
    note: "Open all 7 days for farmers and bulk dispatch"
  },

  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/919876543210"
  },

  theme: {
    primary: "#1b4332",
    secondary: "#2d6a4f",
    accent: "#d97706",
    surface: "#ffffff"
  },

  seo: {
    title: "Sri Lakshmi Animal Feeds | Quality Cattle, Poultry & Livestock Feed Supplier",
    description: "High-protein cattle feed, balanced poultry mash, pellets, and livestock nutrition in Anthiyur, Erode. Wholesale & retail prices with prompt farm delivery.",
    keywords: "cattle feed, poultry feed, dairy feed, animal nutrition, dairy farming erode, anthiyur feeds, bulk animal feed supplier",
    siteUrl: "https://srilakshmifeeds.com",
    ogImage: "https://picsum.photos/seed/animal-feed-hero/1200/630"
  },

  features: [
    "100% Lab-Tested Nutrition",
    "Balanced Energy & Protein Ratio",
    "Wholesale & Retail Packing Available",
    "Doorstep Farm Delivery Available"
  ]
};

/**
 * Generate a dynamic WhatsApp direct chat link with pre-filled text
 */
export const getWhatsAppUrl = (
  customMessage = "Hi, I would like to enquire about your animal feed products."
) => {
  const cleanNumber = businessConfig.whatsapp.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(customMessage)}`;
};

/**
 * Generate clean tel: link
 */
export const getPhoneUrl = () => {
  const cleanPhone = businessConfig.phone.replace(/[^0-9+]/g, "");
  return `tel:${cleanPhone}`;
};

/**
 * Generate LocalBusiness JSON-LD structured data dynamically
 */
export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessConfig.name,
    "image": businessConfig.seo.ogImage,
    "telephone": businessConfig.phone,
    "email": businessConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessConfig.address.street,
      "addressLocality": businessConfig.address.locality,
      "addressRegion": businessConfig.address.region,
      "postalCode": businessConfig.address.postalCode,
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:30",
        "closes": "19:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "09:00",
        "closes": "13:30"
      }
    ],
    "url": businessConfig.seo.siteUrl,
    "priceRange": "₹₹"
  };
};
