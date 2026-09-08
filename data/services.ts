export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  category:
    | "POP"
    | "Gypsum"
    | "PVC"
    | "Grid"
    | "Partitions"
    | "Wall Panels";
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "pop-false-ceiling",
    name: "POP False Ceiling",
    shortDescription:
      "Custom POP false ceiling designs with quality materials, skilled workmanship and smooth professional finishing.",
    description:
      "Complete POP false ceiling work for homes, offices, shops and commercial spaces, including material, skilled labour, installation and smooth finishing.",
    image: "/images/service-pop-ceiling.svg",
    category: "POP",
    highlights: [
      "Custom designs",
      "Smooth finishing",
      "Material included",
      "Residential & commercial",
    ],
  },

  {
    slug: "gypsum-false-ceiling",
    name: "Gypsum False Ceiling",
    shortDescription:
      "Modern gypsum false ceiling solutions with quality boards, strong framing and clean professional finishing.",
    description:
      "Professional gypsum false ceiling installation using quality boards and proper framing, ideal for bedrooms, living rooms, offices and commercial interiors.",
    image: "/images/service-gypsum-ceiling.svg",
    category: "Gypsum",
    highlights: [
      "Quality gypsum boards",
      "Strong framing",
      "Modern designs",
      "Clean finishing",
    ],
  },

  {
    slug: "pvc-false-ceiling",
    name: "PVC False Ceiling",
    shortDescription:
      "Durable PVC false ceiling installation with quality panels, accessories, skilled labour and neat finishing.",
    description:
      "Complete PVC false ceiling work with quality panels, accessories and professional installation, offering a stylish and easy-to-maintain ceiling solution.",
    image: "/images/service-pvc-ceiling.svg",
    category: "PVC",
    highlights: [
      "Moisture resistant",
      "Low maintenance",
      "Quick installation",
      "Multiple designs",
    ],
  },

  {
    slug: "grid-false-ceiling",
    name: "Grid False Ceiling",
    shortDescription:
      "Professional grid ceiling installation with complete framework, ceiling tiles, materials, labour and finishing.",
    description:
      "Grid false ceiling solutions for offices, shops and commercial spaces, including complete framework, ceiling tiles, material supply and professional installation.",
    image: "/images/service-grid-ceiling.svg",
    category: "Grid",
    highlights: [
      "Office & commercial",
      "Easy service access",
      "Strong framework",
      "Clean installation",
    ],
  },

  {
    slug: "fluted-false-ceiling",
    name: "Fluted False Ceiling",
    shortDescription:
      "Modern fluted false ceiling designs with premium textures, quality panels and professional installation.",
    description:
      "Fluted false ceilings add depth, texture and a contemporary look to interiors. We provide complete material, skilled labour and professional installation for residential and commercial spaces.",
    image: "/images/service-fluted-ceiling.svg",
    category: "Wall Panels",
    highlights: [
      "Modern fluted design",
      "Premium texture",
      "Custom installation",
      "Modern interiors",
    ],
  },

  {
    slug: "vox-ceiling-outside-passage",
    name: "VOX Ceiling – Outside Passage",
    shortDescription:
      "Stylish and durable VOX ceiling solutions for outside passages, balconies and covered exterior areas.",
    description:
      "We provide VOX ceiling installation for outside passages, balconies and covered exterior spaces. The work includes quality VOX panels, required accessories, skilled labour and professional installation for a clean and modern finish.",
    image: "/images/service-vox-ceiling.svg",
    category: "Wall Panels",
    highlights: [
      "Outside passage",
      "Modern appearance",
      "Durable panels",
      "Professional installation",
    ],
  },

  {
    slug: "gypsum-partition",
    name: "Gypsum Partition",
    shortDescription:
      "Neat gypsum partition solutions with quality boards, proper framing, skilled installation and professional finishing.",
    description:
      "Complete gypsum partition work for homes, offices, shops and commercial interiors using quality boards and proper framing for clean and practical space division.",
    image: "/images/service-gypsum-partition.svg",
    category: "Partitions",
    highlights: [
      "Quality boards",
      "Strong framing",
      "Home & office",
      "Neat finishing",
    ],
  },

  {
    slug: "fluted-wall-panel",
    name: "Fluted Wall Panel",
    shortDescription:
      "Premium fluted wall panel installation for stylish accent walls with modern texture and professional finishing.",
    description:
      "Transform plain walls with modern fluted panels that add depth, texture and a premium appearance. Ideal for living rooms, bedrooms, offices, reception areas and commercial interiors.",
    image: "/images/service-fluted-wall-panel.svg",
    category: "Wall Panels",
    highlights: [
      "Premium texture",
      "Accent walls",
      "Modern designs",
      "Easy maintenance",
    ],
  },

  {
    slug: "pop-moulding-cornice",
    name: "POP Moulding & Cornice",
    shortDescription:
      "Decorative POP moulding, cornice and ceiling border work with detailed designs and smooth professional finishing.",
    description:
      "Enhance your ceiling and walls with decorative POP moulding, cornice and ceiling borders. We provide custom designs, quality material, skilled workmanship and detailed finishing.",
    image: "/images/service-moulding-cornice.svg",
    category: "POP",
    highlights: [
      "Decorative profiles",
      "Ceiling borders",
      "Custom designs",
      "Detailed finishing",
    ],
  },

  {
    slug: "pop-flower-design",
    name: "POP Flower Design",
    shortDescription:
      "Beautiful custom POP flower designs for ceilings and walls, crafted with detailed workmanship and smooth finishing.",
    description:
      "Add a decorative touch to your interiors with custom POP flower designs. We create detailed ceiling and wall flower patterns with quality material, skilled workmanship and smooth professional finishing.",
    image: "/images/service-pop-flower.svg",
    category: "POP",
    highlights: [
      "Custom flower designs",
      "Decorative ceilings",
      "Detailed workmanship",
      "Smooth finishing",
    ],
  },
];