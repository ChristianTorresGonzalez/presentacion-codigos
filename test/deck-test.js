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
let carta = require("../src/card");

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
    * @description Expect para comprobar el correcto funcionamiento del popCard, 
    * encargado de sacar la ultima carta del mazo, la mas superficial y retornarla
  */
  describe("Probando funcion popCard() para extraer ultima carta", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento del metodo popCard()
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    let lastCard = new carta.Card("CLUBS", "King");
    it ("Comprobando funcion extraer carta de la  clase mazo", function() {
      expect(console.log(mazo.popCard())).to.equal(console.log(lastCard));
    });
  });

  // /**
  //   * @description Expect para comprobar el correcto funcionamiento del addCard, 
  //   * encargado de añadir una nueva carta en la ultima posicion del mazo
  // */
  // describe("Probando funcion addCard() para añadir nueva carta", function() {
  //   /**
  //    * @description Expect para comprobar el correcto funcionamiento del metodo addCard()
  //    * @param {}
  //    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
  //   */
  //   let lastCard = new carta.Card("HEARTS", "16");
  //   it ("Comprobando funcion extraer carta de la  clase mazo", function() {
  //     mazo.addCard(lastCard);
  //     expect(console.log(mazo.popCard())).to.equal(console.log(lastCard));
  //   });
  // });
});