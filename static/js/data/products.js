export const PRODUCTS = [
  {
    id: 5,
    name: "Exterior Paint Set",
    price: 45.99,
    category: "Paint & Coatings",
    rating: 3.5,
    images: [
      "https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?w=600",
      "https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?w=600",
      "https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?w=600"
    ],
    subtitle: "Professional-grade exterior paint",
    description: "Professional-grade exterior paint set designed to withstand harsh weather conditions. This premium paint offers excellent coverage, durability, and color retention. Perfect for residential and commercial exterior surfaces.",
    extendedDescription: "Professional-grade exterior paint set designed to withstand harsh weather conditions. Excellent coverage, durability, and color retention for residential and commercial exterior surfaces. Coverage: up to 400 sq ft per gallon. Dry time: touch dry in 1 hour, recoat in 4 hours. Finish: satin low-sheen. VOC compliant for residential use.",
    specifications: [
      { label: "Volume", value: "5 gallons total" },
      { label: "Type", value: "100% Acrylic Latex" },
      { label: "Coverage", value: "400 sq ft per gallon" },
      { label: "Finish", value: "Satin" },
      { label: "Dry Time", value: "2-4 hours" },
      { label: "Colors", value: "Assorted neutral tones" }
    ]
  },
  {
    id: 6,
    name: "Plywood Sheets",
    price: 52.99,
    category: "Wood & Lumber",
    rating: 4.5,
    relatedProductIds: [2],
    images: [
      "https://images.unsplash.com/photo-1704167674713-649193461719?w=600",
      "https://images.unsplash.com/photo-1704167674713-649193461719?w=600",
      "https://images.unsplash.com/photo-1704167674713-649193461719?w=600"
    ],
    subtitle: "Construction-grade plywood",
    description: "Versatile construction-grade plywood sheets suitable for a wide range of applications. These sheets are engineered for strength and dimensional stability, perfect for subfloors, roofing, walls, and general construction.",
    extendedDescription: "Versatile construction-grade plywood sheets suitable for a wide range of applications. These sheets are engineered for strength and dimensional stability, perfect for subfloors, roofing, walls, and general construction. Thickness: 23/32 in (18 mm) nominal. Grade: CDX structural. Dimensions: 4 ft x 8 ft sheet. Moisture-resistant adhesive bonding.",
    specifications: [
      { label: "Dimensions", value: "4' x 8'" },
      { label: "Thickness", value: "3/4 inch" },
      { label: "Grade", value: "CDX" },
      { label: "Plies", value: "7-ply construction" },
      { label: "Exposure", value: "Exterior grade" },
      { label: "Veneer", value: "Softwood" }
    ]
  },
  {
    id: 1,
    name: "Premium Cement Bags",
    price: 24.99,
    category: "Cement & Concrete",
    rating: 5.0,
    images: [
      "https://images.unsplash.com/photo-1718117075248-3d3c3cd65264?w=600",
      "https://images.unsplash.com/photo-1718117075248-3d3c3cd65264?w=600",
      "https://images.unsplash.com/photo-1718117075248-3d3c3cd65264?w=600"
    ],
    subtitle: "High-strength Portland cement mix",
    description: "High-quality Portland cement bags designed for heavy-duty construction projects. Our premium cement offers exceptional strength, durability, and workability. Ideal for foundations, structural work, and general concrete applications. Each bag contains precisely measured and tested cement that meets international quality standards.",
    extendedDescription: "High-strength Portland cement mix for foundations, slabs, and masonry. Consistent setting time and excellent workability for professional and DIY projects. Weight: 94 lb (42.6 kg) per bag. Compressive strength: 4000 psi at 28 days. ASTM C150 Type I/II. Store in a dry, covered area.",
    specifications: [
      { label: "Weight", value: "50 lbs per bag" },
      { label: "Type", value: "Portland Cement Type I/II" },
      { label: "Compressive Strength", value: "3500 PSI at 28 days" },
      { label: "Setting Time", value: "2-4 hours initial set" },
      { label: "Coverage", value: "Approximately 0.45 cubic feet" },
      { label: "Storage Life", value: "6 months in sealed bag" }
    ]
  },
  {
    id: 2,
    name: "Premium Lumber Planks",
    price: 89.99,
    category: "Wood & Lumber",
    rating: 4.5,
    relatedProductIds: [6],
    images: [
      "https://images.unsplash.com/photo-1764025390519-1ccc15d719a8?w=600",
      "https://images.unsplash.com/photo-1764025390519-1ccc15d719a8?w=600",
      "https://images.unsplash.com/photo-1764025390519-1ccc15d719a8?w=600"
    ],
    subtitle: "Kiln-dried lumber planks",
    description: "Premium kiln-dried lumber planks perfect for all your woodworking and construction needs. These high-grade wooden planks are carefully selected for strength and appearance. Suitable for framing, decking, furniture making, and various carpentry projects.",
    extendedDescription: "Premium kiln-dried lumber planks perfect for all your woodworking and construction needs. These high-grade wooden planks are carefully selected for strength and appearance. Suitable for framing, decking, furniture making, and various carpentry projects. Species: #2 prime dimensional. Dimensions: 2 in x 10 in x 12 ft. Moisture content: kiln-dried to ~15%. Planed smooth on four sides.",
    specifications: [
      { label: "Dimensions", value: "2\" x 6\" x 8'" },
      { label: "Wood Type", value: "Douglas Fir" },
      { label: "Grade", value: "Premium Select" },
      { label: "Moisture Content", value: "15% kiln-dried" },
      { label: "Treatment", value: "Pressure-treated option available" },
      { label: "Quantity", value: "Sold individually" }
    ]
  },
  {
    id: 3,
    name: "Red Clay Bricks",
    price: 0.89,
    category: "Bricks & Blocks",
    rating: 4.0,
    images: [
      "https://images.unsplash.com/photo-1761358270922-5a4df4ab9782?w=600",
      "https://images.unsplash.com/photo-1761358270922-5a4df4ab9782?w=600",
      "https://images.unsplash.com/photo-1761358270922-5a4df4ab9782?w=600"
    ],
    subtitle: "Classic red clay bricks",
    description: "Traditional red clay bricks manufactured to the highest standards. These durable bricks are perfect for walls, patios, pathways, and architectural features. Fire-hardened for exceptional strength and weather resistance.",
    extendedDescription: "Traditional red clay bricks manufactured to the highest standards. These durable bricks are perfect for walls, patios, pathways, and architectural features. Fire-hardened for exceptional strength and weather resistance. Standard modular size: 2-1/4 x 3-5/8 x 7-5/8 in. Compressive strength: 3000 psi minimum. Absorption: under 17%. Sold per individual brick.",
    specifications: [
      { label: "Dimensions", value: "8\" x 4\" x 2.25\"" },
      { label: "Material", value: "Fire-hardened clay" },
      { label: "Compressive Strength", value: "3000+ PSI" },
      { label: "Water Absorption", value: "Less than 8%" },
      { label: "Color", value: "Classic red" },
      { label: "Weight", value: "4.5 lbs per brick" }
    ]
  },
  {
    id: 4,
    name: "Steel I-Beams",
    price: 349.99,
    category: "Steel & Metal",
    rating: 5.0,
    images: [
      "https://images.unsplash.com/photo-1707236527163-bd3478178466?w=600",
      "https://images.unsplash.com/photo-1707236527163-bd3478178466?w=600",
      "https://images.unsplash.com/photo-1707236527163-bd3478178466?w=600"
    ],
    subtitle: "Structural steel I-beams",
    description: "Heavy-duty structural steel I-beams engineered for maximum load-bearing capacity. These professional-grade beams are essential for large construction projects, building frames, and structural support applications.",
    extendedDescription: "Heavy-duty structural steel I-beams engineered for maximum load-bearing capacity. These professional-grade beams are essential for large construction projects, building frames, and structural support applications. Profile: W8x18 wide flange. Length: 20 ft stock length. Yield strength: 50 ksi ASTM A992. Primed for corrosion protection.",
    specifications: [
      { label: "Length", value: "20 feet" },
      { label: "Profile", value: "W10x49" },
      { label: "Material", value: "ASTM A992 Grade 50 Steel" },
      { label: "Weight", value: "980 lbs" },
      { label: "Yield Strength", value: "50 ksi" },
      { label: "Finish", value: "Mill finish" }
    ]
  }
];
