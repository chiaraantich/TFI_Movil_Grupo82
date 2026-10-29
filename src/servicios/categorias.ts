import type { Categoria, RespuestaLista } from "@/tipos";
import { categoriasMock } from "@/mocks/categorias";
import { simularRed } from "@/mocks/simulacion";

export async function obtenerCategorias(): Promise<RespuestaLista<Categoria>> {
  await simularRed();
  return {
    datos: categoriasMock,
    meta: { total: categoriasMock.length, pagina: 1, porPagina: 20 },
  };
}