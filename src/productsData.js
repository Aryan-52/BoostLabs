const images = import.meta.glob("/src/assets/*.{png,jpg,jpeg,webp}", {
  eager: true,
});

const map = {};
for (const path in images) {
  const name = path.split("/").pop().toLowerCase();
  map[name] = images[path].default;
}

const pick = (arr) => {
  for (const name of arr) {
    if (!name) continue;
    const key = name.toLowerCase();
    if (map[key]) return map[key];
  }
  return map["placeholder.jpg"];
};

const products = [
  {
    id: 1,
    name: "Turbocharger Kit – 991 GT3",
    model: "GT3",
    price: 149999,
    image: pick(["turbo_kit.png"]),
    short: "Boost +80 HP with this high-flow turbo.",
    specs: ["Max PSI 28", "Stainless manifold", "Anti-lag ready"],
    compatibility: "Fits Porsche 911 GT3 (2014–2019)",
  },
  {
    id: 2,
    name: "Titanium Exhaust System – 911 Turbo S",
    model: "Turbo S",
    price: 99999,
    image: pick(["exhaust.png"]),
    short: "Lightweight titanium exhaust with aggressive tone.",
    specs: ["6.2kg weight", "Dual outlet", "Track legal"],
    compatibility: "Fits Porsche 911 Turbo S (2012–2020)",
  },
  {
    id: 3,
    name: "Carbon Fiber Rims – 20 inch",
    model: "911",
    price: 79999,
    image: pick(["rims_set.png"]),
    short: "Ultra-light carbon rims for best handling.",
    specs: ["20 inch", "High durability", "Heat resistant"],
    compatibility: "Fits most Porsche 911 models",
  },
  {
    id: 4,
    name: "Adjustable Sport Suspension",
    model: "GT3",
    price: 59999,
    image: pick(["suspension.png"]),
    short: "Track-focused adjustable suspension.",
    specs: ["Aluminum body", "Adjustable damping"],
    compatibility: "Fits Porsche GT3 / GT3 RS",
  },
  {
    id: 5,
    name: "Ceramic Brake Kit – Front",
    model: "GT3",
    price: 69999,
    image: pick(["brake_kit.png"]),
    short: "High-performance ceramic brake system.",
    specs: ["Ceramic composite", "Heat tolerant"],
    compatibility: "Fits Porsche 911 / GT3 (2011–2020)",
  },
];

export default products;
