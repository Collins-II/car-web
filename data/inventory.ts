export type Vehicle = {
  slug: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: "Automatic" | "Manual";
  fuel: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  body: "SUV" | "Sedan" | "Coupe" | "Wagon";
  color: string;
  image: string;
  badge?: string;
  description: string;
};

export const vehicles: Vehicle[] = [
  {
    slug: "porsche-911-carrera-gts",
    make: "Porsche",
    model: "911 Carrera GTS",
    year: 2023,
    price: 1890000,
    mileage: 12400,
    transmission: "Automatic",
    fuel: "Petrol",
    body: "Coupe",
    color: "Chalk",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
    badge: "JUST ARRIVED",
    description: "A beautifully specified 911 Carrera GTS, bringing everyday usability and unmistakable Porsche character together in one focused, rewarding package.",
  },
  {
    slug: "mercedes-benz-glc-300",
    make: "Mercedes-Benz",
    model: "GLC 300",
    year: 2024,
    price: 1540000,
    mileage: 6800,
    transmission: "Automatic",
    fuel: "Hybrid",
    body: "SUV",
    color: "Obsidian Black",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
    badge: "LOW MILEAGE",
    description: "An exceptionally composed luxury SUV with a refined cabin, intuitive technology and the reassuring presence Mercedes-Benz does so well.",
  },
  {
    slug: "bmw-4-series-coupe",
    make: "BMW",
    model: "4 Series 430i",
    year: 2023,
    price: 1325000,
    mileage: 15600,
    transmission: "Automatic",
    fuel: "Petrol",
    body: "Coupe",
    color: "Brooklyn Grey",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85",
    description: "A modern grand tourer with athletic proportions, effortless performance and a finish that feels special every time you get behind the wheel.",
  },
  {
    slug: "range-rover-evoque",
    make: "Land Rover",
    model: "Range Rover Evoque",
    year: 2022,
    price: 1175000,
    mileage: 22100,
    transmission: "Automatic",
    fuel: "Diesel",
    body: "SUV",
    color: "Santorini Black",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85",
    description: "Distinctive design meets genuine all-terrain capability in this carefully selected Evoque, presented in an understated, timeless specification.",
  },
  {
    slug: "audi-a6-avant",
    make: "Audi",
    model: "A6 Avant",
    year: 2023,
    price: 1460000,
    mileage: 9800,
    transmission: "Automatic",
    fuel: "Diesel",
    body: "Wagon",
    color: "Glacier White",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85",
    badge: "STAFF PICK",
    description: "Elegant, capable and quietly accomplished, the A6 Avant is a premium long-distance companion with space for everything that matters.",
  },
  {
    slug: "toyota-land-cruiser-prado",
    make: "Toyota",
    model: "Land Cruiser Prado",
    year: 2022,
    price: 1740000,
    mileage: 28600,
    transmission: "Automatic",
    fuel: "Diesel",
    body: "SUV",
    color: "Silver Metallic",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
    description: "A trusted icon, ready for the open road. This Prado offers the comfort, durability and sure-footed confidence to go further.",
  },
];

export function formatPrice(price: number) {
  return `ZMW ${price.toLocaleString("en-ZM")}`;
}
