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
let mazos = require("../src/deck");

describe("Test unitarios para clase Mazo(Deck):",
function() {
  /**
    * @description Expect para comprobar el correcto funcionamiento de clase mazo
  */
  let mazo = new mazos.Deck;
  describe("Probando constructor de la clase mazo", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento del constructor de
     * la clase mazo
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando que mazo tiene constructor", function() {
      expect(mazo).has.a.property('constructor');
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento del metodo imprimir
    * de la clase mazo, utilizado para comprobar el correcto funcionamiento del
    * construtor
  */
  describe("Probando constructor de la clase mazo", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento del metodo imprimir
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcion para imprimir de la clase mazo", function() {
      expect(mazo.write()).to.equal("Ace of SPADES2 of SPADES3 of SPADES4 of SPADES5 of SPADES6 of SPADES7 of SPADES8 of SPADES9 of SPADES10 of SPADESJack of SPADESQueen of SPADESKing of SPADESAce of HEARTS2 of HEARTS3 of HEARTS4 of HEARTS5 of HEARTS6 of HEARTS7 of HEARTS8 of HEARTS9 of HEARTS10 of HEARTSJack of HEARTSQueen of HEARTSKing of HEARTSAce of DIAMONDS2 of DIAMONDS3 of DIAMONDS4 of DIAMONDS5 of DIAMONDS6 of DIAMONDS7 of DIAMONDS8 of DIAMONDS9 of DIAMONDS10 of DIAMONDSJack of DIAMONDSQueen of DIAMONDSKing of DIAMONDSAce of CLUBS2 of CLUBS3 of CLUBS4 of CLUBS5 of CLUBS6 of CLUBS7 of CLUBS8 of CLUBS9 of CLUBS10 of CLUBSJack of CLUBSQueen of CLUBSKing of CLUBS");
    });
  });
});