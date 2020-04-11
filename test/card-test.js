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
  /**
    * @description Expect para comprobar el correcto funcionamiento de clase
    * carta para el palo Picas
  */
  let picas = new carta.Card("SPADES", 10);
  describe("Probando constructor de la clase carta para palo SPADES", function() {
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor nombre de palo", function() {
      expect(picas.getCardSuitName()).to.equal("SPADES");
    });
    it ("Comprobando valor de palo", function() {
      expect(picas.getCardSuitValue()).to.equal(4);
    });
    it ("Comprobando valor numerico de carta", function() {
      expect(picas.getCardRank()).to.equal(10);
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de clase
    * carta para el palo Corazones
  */
  let corazones = new carta.Card("HEARTS", 1);
  describe("Probando constructor de la clase carta para palo HEARTS", function() {
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor nombre de palo", function() {
      expect(corazones.getCardSuitName()).to.equal("HEARTS");
    });
    it ("Comprobando valor de palo", function() {
      expect(corazones.getCardSuitValue()).to.equal(3);
    });
    it ("Comprobando valor numerico de carta", function() {
      expect(corazones.getCardRank()).to.equal(1);
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de clase
    * carta para el palo Diamantes
  */
  let diamantes = new carta.Card("DIAMONDS", );
  describe("Probando constructor de la clase carta para palo DIAMONDS", function() {
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor nombre de palo", function() {
      expect(diamantes.getCardSuitName()).to.equal("DIAMONDS");
    });
    it ("Comprobando valor de palo", function() {
      expect(diamantes.getCardSuitValue()).to.equal(2);
    });
    it ("Comprobando valor numerico de carta", function() {
      expect(diamantes.getCardRank()).to.equal(5);
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de clase
    * carta para el palo Treboles
  */
  let treboles = new carta.Card("CLUBS", 8);
  describe("Probando constructor de la clase carta para palo CLUBS", function() {
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor nombre de palo", function() {
      expect(treboles.getCardSuitName()).to.equal("CLUBS");
    });
    it ("Comprobando valor de palo", function() {
      expect(treboles.getCardSuitValue()).to.equal(1);
    });
    it ("Comprobando valor numerico de carta", function() {
      expect(treboles.getCardRank()).to.equal(8);
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de clase
    * carta cuando no introducimos ninguna carta en especifico
  */
  let cartaPorDefecto = new carta.Card;
  describe("Probando constructor por defecto de la clase carta", function() {
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor nombre de palo", function() {
      expect(cartaPorDefecto.getCardSuitName()).to.equal("CLUBS");
    });
    it ("Comprobando valor de palo", function() {
      expect(cartaPorDefecto.getCardSuitValue()).to.equal(1);
    });
    it ("Comprobando valor numerico de carta", function() {
      expect(cartaPorDefecto.getCardRank()).to.equal(2);
    });
  });

  describe("Probando setter de la clase carta", function() {
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion setter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor nombre de palo", function() {
      cartaPorDefecto.setCardSuit("SPADES");
      expect(cartaPorDefecto.getCardSuitName()).to.equal("SPADES");
    });
    it ("Comprobando valor numerico de carta", function() {
      cartaPorDefecto.setCardRank(9);
      expect(cartaPorDefecto.getCardRank()).to.equal(9);
    });
  });

  describe("Probando setter de la clase carta", function() {
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion toString()
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando la salida de toString()", function() {
      expect(picas.toString()).to.equal("10 of SPADES");
    });
    it ("Comprobando la salida de toString()", function() {
      expect(corazones.toString()).to.equal("Ace of HEARTS");
    });
    it ("Comprobando la salida de toString()", function() {
      expect(cartaPorDefecto.toString()).to.equal("9 of SPADES");
    });
    it ("Comprobando la salida de toString()", function() {
      expect(cartaPorDefecto.toString()).to.equal("9 of SPADES");
    });
  });
});