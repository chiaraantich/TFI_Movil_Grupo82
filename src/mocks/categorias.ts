import type { Categoria } from "@/tipos";

export const categoriasMock: Categoria[] = [
  { id: "cat-playas", nombre: "Playas", icono: "sunny-outline", color: "#0284C7", orden: 1 },
  { id: "cat-termas", nombre: "Termas", icono: "water-outline", color: "#0D9488", orden: 2 },
  { id: "cat-museos", nombre: "Museos y patrimonio", icono: "business-outline", color: "#8E5A4A", orden: 3 },
  { id: "cat-gastronomia", nombre: "Gastronomía", icono: "restaurant-outline", color: "#C2410C", orden: 4 },
  { id: "cat-artesanias", nombre: "Artesanías", icono: "color-palette-outline", color: "#7C3AED", orden: 5 },
  { id: "cat-naturaleza", nombre: "Naturaleza", icono: "leaf-outline", color: "#15803D", orden: 6 },
  { id: "cat-alojamiento", nombre: "Alojamiento", icono: "bed-outline", color: "#475569", orden: 7 },
];