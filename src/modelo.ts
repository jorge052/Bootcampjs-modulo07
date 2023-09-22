interface Partida {
  puntosTotales: number;
  siguienteCarta: number;
  urlCarta: string;
}

export let partida: Partida = {
  puntosTotales: 0,
  siguienteCarta: 0,
  urlCarta:
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas",
};
