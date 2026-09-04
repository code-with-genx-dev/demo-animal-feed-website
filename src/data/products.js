/**
 * Centralized Product Categories and Featured Products
 * 
 * You can customize or add new categories and products here.
 * All cards on the website are dynamically rendered from this array.
 */

export const categories = [
  {
    id: "cattle-feed",
    name: "Cattle Feed",
    shortDescription: "High-yield milk production & balanced bypass protein cattle feed pellets and mash.",
    image: "https://picsum.photos/seed/cattle-feed-category/800/600",
    imageAlt: "High quality dairy cattle feed pellets in bags for increased milk yield",
    itemCount: "8 Varieties Available",
    highlights: ["Boosts Milk Yield", "Bypass Protein 22%", "Mineral Enriched"]
  },
  {
    id: "poultry-feed",
    name: "Poultry Feed",
    shortDescription: "Nutritionally balanced broiler starter, grower, finisher and layer mash for fast weight gain.",
    image: "https://picsum.photos/seed/poultry-feed-category/800/600",
    imageAlt: "Clean poultry feed grains and crumbles for broilers and country chicken",
    itemCount: "6 Varieties Available",
    highlights: ["High FCR Efficiency", "Immunity Boosters", "Even Particle Size"]
  },
  {
    id: "goat-feed",
    name: "Goat & Sheep Feed",
    shortDescription: "Energy-dense feed concentrates formulated for rapid weight gain and lean meat development.",
    image: "https://picsum.photos/seed/goat-feed-category/800/600",
    imageAlt: "Nutritious goat and sheep pellet feed for healthy stall-fed farming",
    itemCount: "4 Varieties Available",
    highlights: ["Stall-Fed Specially Formulated", "Prevents Acidosis", "Rapid Weight Gain"]
  },
  {
    id: "livestock-feed",
    name: "Livestock & Calves Feed",
    shortDescription: "Essential calf starters, dairy mineral mixtures, calcium supplements, and bypass fat.",
    image: "https://picsum.photos/seed/livestock-feed-category/800/600",
    imageAlt: "Livestock supplements, mineral mixture, and calf growth ration feed",
    itemCount: "5 Varieties Available",
    highlights: ["Digestive Enzymes", "Calcium & Phosphorus", "Healthy Bone Growth"]
  }
];

export const featuredProducts = [
  {
    id: "prod-1",
    name: "High Yield Dairy Pellet 24%",
    category: "Cattle Feed",
    categoryId: "cattle-feed",
    badge: "Popular",
    description: "Premium balanced pellet feed with 24% crude protein and bypass fat for crossbred dairy cows to maximize daily milk yield.",
    packaging: "50 kg Bag",
    specs: ["24% Crude Protein", "Min 3.5% Fat", "Enriched with Chelated Minerals"],
    image: "https://picsum.photos/seed/dairy-pellet-feed/800/600",
    imageAlt: "50kg bag of High Yield Dairy Pellet Feed 24% for cattle",
    enquiryText: "Hi, I want to enquire about the price and availability of High Yield Dairy Pellet 24% (50kg bag)."
  },
  {
    id: "prod-2",
    name: "Broiler Starter Crumbs",
    category: "Poultry Feed",
    categoryId: "poultry-feed",
    badge: "Best Seller",
    description: "Easily digestible micro-crumbs packed with essential amino acids, vitamins, and prebiotics for rapid chick weight growth in days 1-14.",
    packaging: "50 kg Bag",
    specs: ["22% Crude Protein", "High Methionine & Lysine", "Anti-Coccidial Protection"],
    image: "https://picsum.photos/seed/broiler-starter-feed/800/600",
    imageAlt: "Broiler starter crumbs poultry feed bag for high chick survival",
    enquiryText: "Hi, I would like a quote for Broiler Starter Crumbs (50kg bags) for my poultry farm."
  },
  {
    id: "prod-3",
    name: "Milk Booster Mash Extra",
    category: "Cattle Feed",
    categoryId: "cattle-feed",
    badge: "High Demand",
    description: "Traditional nutrient-dense mash feed made with crushed grains, oil cakes, and bran for sustained milk fat percentage and SNF boost.",
    packaging: "40 kg & 50 kg Bag",
    specs: ["Boosts Fat & SNF", "Cotton Seed Cake Blend", "High Palatability"],
    image: "https://picsum.photos/seed/milk-booster-mash/800/600",
    imageAlt: "Traditional cattle mash feed with crushed grains and mineral mix",
    enquiryText: "Hi, please share wholesale rate for Milk Booster Mash Extra (40/50kg)."
  },
  {
    id: "prod-4",
    name: "Stall-Fed Goat Fattener Pellets",
    category: "Goat Feed",
    categoryId: "goat-feed",
    badge: "Recommended",
    description: "Specially steam-pelleted formula for Boer, Tellicherry, and Sirohi goats for optimum muscle growth and healthy digestion.",
    packaging: "25 kg & 50 kg Bag",
    specs: ["18% Digestible Protein", "Prevents Urinary Calculi", "Faster Growth Cycle"],
    image: "https://picsum.photos/seed/goat-fattener-pellet/800/600",
    imageAlt: "Steam pelleted feed for stall-fed goat and sheep fattening",
    enquiryText: "Hi, I am looking to purchase Stall-Fed Goat Fattener Pellets for my goat farm."
  },
  {
    id: "prod-5",
    name: "Country Chicken Layer Mash",
    category: "Poultry Feed",
    categoryId: "poultry-feed",
    badge: "Top Rated",
    description: "Complete nutrition mash for country chicken and commercial layers to ensure consistent egg laying, strong eggshells, and bright yolks.",
    packaging: "50 kg Bag",
    specs: ["Organic Calcium Fortified", "17.5% Protein", "Higher Laying Percentage"],
    image: "https://picsum.photos/seed/country-chicken-feed/800/600",
    imageAlt: "Egg layer mash feed with calcium grit for poultry",
    enquiryText: "Hi, I want details on Country Chicken Layer Mash feed bags and pricing."
  },
  {
    id: "prod-6",
    name: "Calf Starter Growth Ration",
    category: "Livestock Feed",
    categoryId: "livestock-feed",
    badge: "Essential",
    description: "Early rumen development starter formula for dairy calves from 2 weeks of age, promoting early weaning and sturdy immunity.",
    packaging: "25 kg Bag",
    specs: ["20% Digestible Milk Protein", "Vitamin AD3E Enriched", "Rapid Rumen Development"],
    image: "https://picsum.photos/seed/calf-starter-ration/800/600",
    imageAlt: "Calf starter ration feed for healthy early dairy calf development",
    enquiryText: "Hi, I want to enquire about Calf Starter Growth Ration (25kg bags)."
  }
];
