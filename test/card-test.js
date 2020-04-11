/**
  * @copyright Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Asignatura: Programación de Aplicaciones Interactivas (PAI)
  * Curso: 3º Itinerario 1
  * Práctica 7 PAI - Mandelbrot. Numero complejos
  * @author: Christian Torres Gonzalez alu0101137902@ull.edu.es
  * @description: Programa que dado un lienzo de canvas, va a calcular, dada
  * una coordenada X e Y, que dada un numro de iteraciones, para cada coordenada,
  * y utilizando la función f(Zn) = Z(n-1)^2 + c, donde c es un numero complejo dado,
  * y zn-1 es el resultado de elevar al cuadrado la funcion para valor Zn-1. Para poder
  * llegar a un resultado deseado, debemos partir de la copndicion de que x e y, que son
  * las coordenadas del punto del lienzo de canvas que estamos tratando.
  * @since 28/03/2020
  * @file Fichero de implementacion de test unitarios
  * @version 1.0.0
*/

const expect = require("chai").expect;
let carta = require("../src/card");

describe("Test unitarios para clase carta:",
function() {
  let espadas = new carta.Card("SPADES", 10);
  describe("Probando constructor de la clase carta para palo ESPADA", function() {
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor retornado de getParteReal", function() {
      expect(espadas.getCardSuitName()).to.equal("SPADES");
    });
    it ("Comprobando valor retornado de getParteReal", function() {
      expect(espadas.getCardSuitValue()).to.equal(4);
    });
    it ("Comprobando valor retornado de getParteReal", function() {
      expect(espadas.getCardRank()).to.equal(10);
    });
  });
});