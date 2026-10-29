// Controla cómo "responde" la red falsa mientras no tenemos API.
export const CONFIG_SIMULACION = {
  demoraMs: 500, // tiempo que tarda cada respuesta
  fallar: false, // poné true para probar el estado de error
};

export async function simularRed(): Promise<void> {
  await new Promise((resolver) => setTimeout(resolver, CONFIG_SIMULACION.demoraMs));
  if (CONFIG_SIMULACION.fallar) {
    throw new Error("No pudimos conectarnos. Revisá tu conexión.");
  }
}