import {
  devolverUrlCarta,
  generarNumeroAleatorio,
  generarCarta,
  sumarPuntuacion,
  devolverPuntos,
} from "./motor";

import { partida } from "./modelo";

// funcion principal
export const dameCarta = () => {
  const numeroAletorio = generarNumeroAleatorio();
  const carta = generarCarta(numeroAletorio);
  mostrarCarta(carta);
  const puntos = devolverPuntos(carta);
  sumarPuntuacion(puntos);
  mostrarMensaje(`${partida.puntosTotales}`);
  revisarMano(); // para ui
};

export const partidaGanada = () => {
  mostrarMensaje(`partida ganada ${partida.puntosTotales}`);
  deshabilitarBotonNuevaCarta(true);
  mostrarBotonNuevaPartida();
  deshabilitarBotonPlantarse(true);
};

export const partidaPerdida = () => {
  mostrarMensaje(`partida perdida ${partida.puntosTotales}`);
  deshabilitarBotonNuevaCarta(true);
  mostrarBotonNuevaPartida();
  deshabilitarBotonPlantarse(true);
};

export function iniciarNuevaPartida() {
  partida.puntosTotales = 0;
  deshabilitarBotonNuevaCarta(false);
  deshabilitarBotonPlantarse(false);
  mostrarCarta(0);
  mostrarMensaje("0");

  const elementoImagen = document.getElementById("cartaImagen");
  if (
    elementoImagen !== null &&
    elementoImagen !== undefined &&
    elementoImagen instanceof HTMLImageElement
  ) {
    const urlImagen =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    elementoImagen.src = urlImagen;
  }
}

export const mensajesPlantarse = () => {
  if (partida.puntosTotales < 4) {
    mostrarMensaje("Has sido muy conservador");
  } else if (partida.puntosTotales >= 4 && partida.puntosTotales < 6) {
    mostrarMensaje("Te ha entrado el canguelo eh?");
  } else if (partida.puntosTotales >= 6 && partida.puntosTotales <= 7) {
    mostrarMensaje("Casi casí...");
  } else if (partida.puntosTotales === 7.5) {
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
  } else {
    console.log("error");
  }
};

export const mostrarMensaje = (mensaje: string) => {
  const elementoCabecera = document.getElementById("mostrarPuntuacion");
  if (
    elementoCabecera !== null &&
    elementoCabecera !== undefined &&
    elementoCabecera instanceof HTMLHeadingElement
  ) {
    elementoCabecera.textContent = mensaje;
  }
};

export const mostrarCarta = (carta: number) => {
  const elementoImg = document.getElementById("cartaImagen");
  if (
    elementoImg !== null &&
    elementoImg !== undefined &&
    elementoImg instanceof HTMLImageElement
  ) {
    const urlImagen = devolverUrlCarta(carta);
    elementoImg.src = urlImagen;
  }
};

export function mostrarBotonSabermas() {
  if (
    saberMasButton !== null &&
    saberMasButton !== undefined &&
    saberMasButton instanceof HTMLButtonElement
  ) {
    saberMasButton.addEventListener("click", mostrarSiguienteCarta);
    saberMasButton.style.display = "block";
  }
}

// Habilitar y deshabilitar botones

export const deshabilitarBotonNuevaCarta = (estaDeshabilitado: boolean) => {
  const botonPedirCarta = document.getElementById("dameCarta");
  if (
    botonPedirCarta !== null &&
    botonPedirCarta !== undefined &&
    botonPedirCarta instanceof HTMLButtonElement
  ) {
    botonPedirCarta.disabled = estaDeshabilitado;
  }
};

export const deshabilitarBotonPlantarse = (estaDeshabilitado: boolean) => {
  const plantarseboton = document.getElementById("plantarse");
  if (
    plantarseboton !== null &&
    plantarseboton !== undefined &&
    plantarseboton instanceof HTMLButtonElement
  ) {
    plantarseboton.disabled = estaDeshabilitado;
  }
};

export const deshabilitarBotonSabermas = (estaDeshabilitado: boolean) => {
  const saberMasButton = document.getElementById("saberMas");
  if (
    saberMasButton !== null &&
    saberMasButton !== undefined &&
    saberMasButton instanceof HTMLButtonElement
  ) {
    saberMasButton.disabled = estaDeshabilitado;
  }
};

export const habilitarBotonNuevaPartida = (estaDeshabilitado: boolean) => {
  const nuevaPartidaButton = document.getElementById("plantarse");
  if (
    nuevaPartidaButton !== null &&
    nuevaPartidaButton !== undefined &&
    nuevaPartidaButton instanceof HTMLButtonElement
  ) {
    nuevaPartidaButton.disabled = estaDeshabilitado;
  }
};

export function mostrarBotonNuevaPartida() {
  if (
    nuevaPartidaButton !== null &&
    nuevaPartidaButton !== undefined &&
    nuevaPartidaButton instanceof HTMLButtonElement
  ) {
    nuevaPartidaButton.style.display = "block";
  }
}

// meter todos los botones en una sola funcion *tambien cualquier interaccion con html

export const nuevaCarta = document.getElementById("dameCarta");
export const plantarseboton = document.getElementById("plantarse");
export const saberMasButton = document.getElementById("saberMas");
export const nuevaPartidaButton = document.getElementById("nuevaPartida");

// Funcion para mostrar cartas

export function mostrarSiguienteCarta() {
  partida.siguienteCarta = generarNumeroAleatorio();
  mostrarCarta(partida.siguienteCarta);
  const numeroAletorio = generarNumeroAleatorio();
  const carta = generarCarta(numeroAletorio);
  mostrarCarta(carta);
  const puntos = devolverPuntos(carta);
  sumarPuntuacion(puntos);
  mostrarMensaje(`${partida.puntosTotales}`);
  revisarMano();
  deshabilitarBotonSabermas(true);
  deshabilitarBotonPlantarse(true);
} // para ui

// Bloque de codigo para plantarse

export function plantarse() {
  mensajesPlantarse();
  mostrarBotonSabermas();
  deshabilitarBotonPlantarse(true);
  deshabilitarBotonNuevaCarta(true);
  habilitarBotonNuevaPartida(false);
  mostrarBotonNuevaPartida();
  deshabilitarBotonSabermas(false);
} // para ui

export const revisarMano = () => {
  if (partida.puntosTotales === 7.5) {
    partidaGanada();
  } else if (partida.puntosTotales > 7.5) {
    partidaPerdida();
  }
}; // para ui

export const eventosBotones = () => {
  if (
    nuevaCarta !== null &&
    nuevaCarta !== undefined &&
    nuevaCarta instanceof HTMLButtonElement
  ) {
    nuevaCarta.addEventListener("click", dameCarta);
  }

  if (
    plantarseboton !== null &&
    plantarseboton !== undefined &&
    plantarseboton instanceof HTMLButtonElement
  ) {
    plantarseboton.addEventListener("click", plantarse);
  }

  if (
    nuevaPartidaButton !== null &&
    nuevaPartidaButton !== undefined &&
    nuevaPartidaButton instanceof HTMLButtonElement
  ) {
    nuevaPartidaButton.addEventListener("click", iniciarNuevaPartida);
  }
};
