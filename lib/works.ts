export type Category = "Identity" | "Print" | "Motion";

export interface Work {
  id: string;
  title: string;
  client: string;
  category: Category;
  tag: string; // small descriptor shown in caption
  type: "image" | "video";
  src: string; // /assets/...
  poster?: string; // /assets/... — poster frame for videos
  width: number; // intrinsic — prevents layout shift
  height: number;
  padded?: boolean; // logos: show contained on a padded --card square
}

export const WORKS: Work[] = [
  { id: "bosttad", title: "Bosttad Group", client: "Bosttad Group", category: "Identity", tag: "Logo & Identity", type: "image", src: "/assets/logo-bosttad.png", width: 500, height: 500, padded: true },
  { id: "charlies-badge", title: "Charlie's Grills", client: "Charlie's Grills", category: "Identity", tag: "Primary Emblem", type: "image", src: "/assets/logo-charlies-badge.png", width: 500, height: 500, padded: true },
  { id: "charlies-flame", title: "Charlie's Grills", client: "Charlie's Grills", category: "Identity", tag: "Flame Mark", type: "image", src: "/assets/logo-charlies-flame.png", width: 500, height: 500, padded: true },
  { id: "donp", title: "Decade of No Pain", client: "DONP", category: "Identity", tag: "Streetwear Mark", type: "image", src: "/assets/brand-donp.png", width: 500, height: 500 },
  { id: "czysty", title: "Cleaning Services", client: "Czysty Cleaners", category: "Print", tag: "Service Flyer", type: "image", src: "/assets/flyer-czysty.png", width: 1414, height: 2000 },
  { id: "easter", title: "Easter Sunday", client: "Charlie's Grill", category: "Print", tag: "Social Graphic", type: "image", src: "/assets/social-charlies-easter.png", width: 1414, height: 2000 },
  { id: "bbq", title: "BBQ Night", client: "Charlie's Grill", category: "Print", tag: "Event Flyer", type: "image", src: "/assets/flyer-bbq.png", width: 850, height: 601 },
  { id: "sale", title: "Big Sale", client: "Retail Promo", category: "Motion", tag: "Promo Reel", type: "video", src: "/assets/motion-sale.mp4", poster: "/assets/motion-sale.jpg", width: 1080, height: 1920 },
  { id: "sale2", title: "Big Sale II", client: "Retail Promo", category: "Motion", tag: "Promo Reel", type: "video", src: "/assets/motion-sale2.mp4", poster: "/assets/motion-sale2.jpg", width: 1080, height: 1920 },
  { id: "donp-loop", title: "Decade of No Pain", client: "DONP", category: "Motion", tag: "Brand Loop", type: "video", src: "/assets/motion-donp1.mp4", poster: "/assets/motion-donp1.jpg", width: 500, height: 500 },
  { id: "donp-title", title: "Title Test", client: "DONP", category: "Motion", tag: "Title Motion", type: "video", src: "/assets/motion-donp2.mp4", poster: "/assets/motion-donp2.jpg", width: 1080, height: 1920 },
  { id: "crucifix", title: "Black Crucifix", client: "Music Visual", category: "Motion", tag: "Visualizer", type: "video", src: "/assets/motion-crucifix.mp4", poster: "/assets/motion-crucifix.jpg", width: 1080, height: 1920 },
];

export const CATEGORIES = ["All", "Identity", "Print", "Motion"] as const;
