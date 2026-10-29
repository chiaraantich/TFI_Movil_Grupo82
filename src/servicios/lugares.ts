import type { Lugar, RespuestaLista } from "@/tipos";
import { lugaresMock } from "@/mocks/lugares";
import { simularRed } from "@/mocks/simulacion";

export async function obtenerLugares(): Promise<RespuestaLista<Lugar>> {
  await simularRed();
  const activos = lugaresMock.filter((lugar) => lugar.activo);
  return {
    datos: activos,
    meta: { total: activos.length, pagina: 1, porPagina: 20 },
  };
}

export async function obtenerLugar(id: string): Promise<Lugar> {
  await simularRed();
  const lugar = lugaresMock.find((l) => l.id === id);
  if (!lugar) {
    throw new Error("No existe ese lugar.");
  }
  return lugar;
}