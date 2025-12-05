
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Giovanni Rossi",
    role: "Maestro Zapatero",
    bio: "40 años de experiencia moldeando cuero. Sus manos conocen secretos que ninguna máquina puede replicar.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Isabella Moretti",
    role: "Directora Creativa",
    bio: "Visionaria formada en Milán, fusiona la silueta clásica con la audacia contemporánea.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Marco Vivaldi",
    role: "Especialista en Pieles",
    bio: "Viaja personalmente a las curtiembres para seleccionar cada hoja de cuero utilizada en nuestro taller.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Sofia Conti",
    role: "Jefa de Patronaje",
    bio: "Arquitecta de la comodidad, asegura que la elegancia nunca comprometa la ergonomía.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Selección del Cuero",
    description: "Solo el 10% superior de las pieles de curtiembres europeas supera nuestro riguroso control de calidad. Buscamos la perfección en el grano y la textura.",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Corte y Cosido",
    description: "Nuestros maestros artesanos cortan cada pieza a mano, asegurando que el patrón fluya naturalmente. Las costuras son reforzadas para durar décadas.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "El Montaje Goodyear",
    description: "La suela se une mediante la técnica Goodyear Welt, permitiendo que el zapato respire y pueda ser resuelto indefinidamente.",
    image: "https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Acabado y Pátina",
    description: "Cada par recibe un tratamiento final de cremas y ceras naturales, aplicadas manualmente para lograr ese brillo profundo y característico.",
    image: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?auto=format&fit=crop&q=80&w=800"
  }
];

export const HISTORY_MILESTONES: Milestone[] = [
  {
    year: "1924",
    title: "La Fundación",
    description: "Alessandro Romano abre su pequeño taller en Florencia, con la visión de calzar a la nobleza europea."
  },
  {
    year: "1956",
    title: "El Salto Internacional",
    description: "La marca llega a Nueva York, convirtiéndose en el símbolo de estatus para los ejecutivos de Wall Street."
  },
  {
    year: "1989",
    title: "Innovación Tradicional",
    description: "Se introduce la línea 'Soberbio', combinando técnicas del siglo XIX con hormas modernas."
  },
  {
    year: "2024",
    title: "Un Siglo de Excelencia",
    description: "Celebramos 100 años manteniendo intactos los procesos manuales que nos definieron."
  }
];
