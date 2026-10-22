import type { Lugar, RespuestaLista } from "@/tipos";
import { lugaresMock } from "@/mocks/lugares";

const demora = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function obtenerLugares(): Promise<RespuestaLista<Lugar>> {
  await demora();
  return {
    datos: lugaresMock,
    meta: { total: lugaresMock.length, pagina: 1, porPagina: 20 },
  };
}

export async function obtenerLugar(id: string): Promise<Lugar> {
  await demora();
  const lugar = lugaresMock.find((l) => l.id === id);
  if (!lugar) throw new Error("LUGAR_NO_ENCONTRADO");
  return lugar;
}