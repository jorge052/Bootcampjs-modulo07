import { partida } from "./modelo";
import {
  generarNumeroAleatorio,
  generarCarta,
  devolverPuntos,
  sumarPuntuacion,
} from "./motor";
import { expect, vi } from "vitest";

describe("generarNumeroAleatorio", () => {
  it("Deberia devolver un numero entre el 1 al 10", () => {
    //arrange
    const numeroAleatorio = generarNumeroAleatorio();

    //act
    const resultado = numeroAleatorio;

    // assert
    expect(resultado).toBeGreaterThanOrEqual(1);
    expect(resultado).toBeLessThanOrEqual(10);
  });
});

describe("generarCarta", () => {
  it("deberia devolver una carta", () => {
    //arrange
    const carta1: number = 8;
    const carta2: number = 7;

    // act

    const cartaAleatoria1 = generarCarta(carta1); // para cartas mayor que 7 le suma 2 a la entrada
    const cartaAleatoria2 = generarCarta(carta2); // para cartas menor o igual a 7 devuelve el mismo numero.

    // assert

    expect(cartaAleatoria1).toBe(10);
    expect(cartaAleatoria2).toBe(7);
  });
});

describe("devolverPuntos", () => {
  it("deberia devolver una puntuacion mayor a 0.5 si el numero de la carta es igual o menor a 7 y 0.5 si la carta es mayor a 7", () => {
    //arrange
    const carta1: number = 3;
    const carta2: number = 9;

    // act

    const resultado1 = devolverPuntos(carta1); // para carta igual o menor a 7
    const resultado2 = devolverPuntos(carta2); // para carta mayor a 7

    // assert

    expect(resultado1).toBe(3);
    expect(resultado2).toBe(0.5);
  });
});

describe("sumarPuntuacion", () => {
  it("deberia sumar la puntuacion correctamente", () => {
    //arrange

    partida.puntosTotales = 0;

    // act
    const puntosAsumar: number = 5;
    sumarPuntuacion(puntosAsumar);
    // assert

    expect(partida.puntosTotales).toBe(5);
  });
});
