export type Project = {
  id: string;
  title: string;
  category: "POP" | "Gypsum" | "PVC" | "Grid" | "Partitions" | "Wall Panels";
  image: string;
};

export const projects: Project[] = [
  {
    id: "living-room-false-ceiling",
    title: "Modern Living Room False Ceiling",
    category: "POP",
    image: "/images/project-living-room-ceiling.svg"
  },
  {
    id: "bedroom-ceiling",
    title: "Bedroom Ceiling Design",
    category: "Gypsum",
    image: "/images/project-bedroom-ceiling.svg"
  },
  {
    id: "pop-ceiling-hall",
    title: "POP Ceiling — Hall",
    category: "POP",
    image: "/images/project-pop-ceiling.svg"
  },
  {
    id: "gypsum-ceiling-work",
    title: "Gypsum Ceiling Work",
    category: "Gypsum",
    image: "/images/project-gypsum-ceiling.svg"
  },
  {
    id: "pvc-ceiling-work",
    title: "PVC Ceiling Work",
    category: "PVC",
    image: "/images/project-pvc-ceiling.svg"
  },
  {
    id: "grid-ceiling-office",
    title: "Grid Ceiling — Office",
    category: "Grid",
    image: "/images/project-grid-ceiling.svg"
  },
  {
    id: "office-ceiling",
    title: "Commercial Office Ceiling",
    category: "Grid",
    image: "/images/project-office-ceiling.svg"
  },
  {
    id: "partition-work",
    title: "POP Partition Work",
    category: "Partitions",
    image: "/images/project-partition-work.svg"
  },
  {
    id: "fluted-wall",
    title: "Fluted Panel Accent Wall",
    category: "Wall Panels",
    image: "/images/project-fluted-wall.svg"
  },
  {
    id: "vox-panel",
    title: "VOX Panel Wall",
    category: "Wall Panels",
    image: "/images/project-vox-panel.svg"
  },
  {
    id: "modern-interior-ceiling",
    title: "Modern Interior Ceiling",
    category: "POP",
    image: "/images/project-modern-interior-ceiling.svg"
  },
  {
    id: "pooja-room-ceiling",
    title: "Pooja Room False Ceiling",
    category: "Gypsum",
    image: "/images/project-pooja-room-ceiling.svg"
  }
];
