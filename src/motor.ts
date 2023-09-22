import { partida } from "./modelo";

// generar numero aleatorio funcion

export const generarNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};
// Bloque de codigo para obtener nueva carta y Game over

export const generarCarta = (numeroAletorio: number): number =>
  numeroAletorio > 7 ? numeroAletorio + 2 : numeroAletorio;
// usar ternario

export const devolverPuntos = (carta: number): number =>
  carta <= 7 ? carta : 0.5;

// usar ternario

export function sumarPuntuacion(puntos: number) {
  partida.puntosTotales += puntos; // Sumar el valor de la carta a la puntuación total
}

// Saber mas

export function devolverUrlCarta(carta: number): string {
  switch (carta) {
    case 1:
      return partida.urlCarta + "/copas/1_as-copas.jpg";

    case 2:
      return partida.urlCarta + "/copas/2_dos-copas.jpg";

    case 3:
      return partida.urlCarta + "/copas/3_tres-copas.jpg";

    case 4:
      return partida.urlCarta + "/copas/4_cuatro-copas.jpg";

    case 5:
      return partida.urlCarta + "/copas/5_cinco-copas.jpg";

    case 6:
      return partida.urlCarta + "/copas/6_seis-copas.jpg";

    case 7:
      return partida.urlCarta + "/copas/7_siete-copas.jpg";

    case 10:
      return partida.urlCarta + "/copas/10_sota-copas.jpg";

    case 11:
      return partida.urlCarta + "/copas/11_caballo-copas.jpg";

    case 12:
      return partida.urlCarta + "/copas/12_rey-copas.jpg";

    default:
      return partida.urlCarta + "/back.jpg";
  }
}
