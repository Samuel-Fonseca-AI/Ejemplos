export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

export const SHOE_DATA: Product[] = [
  {
    id: 1,
    name: "Oxford Clásico Noir",
    price: "$245.00",
    description: "Cuero genuino italiano con acabado pulido a mano.",
    image: "https://picsum.photos/seed/shoe1/600/800",
    category: "Formal"
  },
  {
    id: 2,
    name: "Mocasín Veneciano",
    price: "$189.00",
    description: "Comodidad sin esfuerzo con gamuza de primera calidad.",
    image: "https://picsum.photos/seed/shoe2/600/800",
    category: "Casual"
  },
  {
    id: 3,
    name: "Derby Real",
    price: "$310.00",
    description: "Construcción Goodyear Welted para una durabilidad eterna.",
    image: "https://picsum.photos/seed/shoe3/600/800",
    category: "Formal"
  },
  {
    id: 4,
    name: "Botín Chelsea Suede",
    price: "$275.00",
    description: "Silueta moderna con elásticos laterales reforzados.",
    image: "https://picsum.photos/seed/shoe4/600/800",
    category: "Botas"
  },
  {
    id: 5,
    name: "Monk Strap Doble",
    price: "$299.00",
    description: "Hebillas plateadas sobre cuero color coñac.",
    image: "https://picsum.photos/seed/shoe5/600/800",
    category: "Vanguardia"
  },
  {
    id: 6,
    name: "Loafer de Terciopelo",
    price: "$450.00",
    description: "Bordado artesanal para ocasiones de gala.",
    image: "https://picsum.photos/seed/shoe6/600/800",
    category: "Gala"
  }
];