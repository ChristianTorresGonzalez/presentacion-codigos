/**
  * @copyright Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Asignatura: Programación de Aplicaciones Interactivas (PAI)
  * Curso: 3º Itinerario 1
  * Práctica 8 PAI - Poker. Programacion Orientada a Objetos
  * @author: Christian Torres Gonzalez alu0101137902@ull.edu.es
  * @description: En este archivo, implementaremos los correspondientes metodos
  * necesarios para trabajar con la clase mano. Donde almacenaremos un conjunto
  * de cartas, formando el mazo del jugador.
  * @since 10/04/2020
  * @file Fichero de testeo de la clase Card
  * @version 1.0.0
*/

'use strict'

const expect = require("chai").expect;
let carta = require("../src/card");

describe("Test unitarios para clase carta:",
function() {
  describe("Probando constructor de la clase card", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento del constructor de
     * la clase card
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando que card tiene constructor", function() {
      expect(carta).has.a.property('constructor');
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
      expect(cartaPorDefecto.getCardSuitValue()).to.equal(0);
    });
    it ("Comprobando valor numerico de carta", function() {
      expect(cartaPorDefecto.getCardRank()).to.equal(2);
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de la
    * funcion setRank()
  */
  describe("Probando constructor por defecto de la clase carta", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento de funcion setRank()
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcionamiento de setRank()", function() {
      expect(carta.setRank(5)).to.equal(5);
    });
    it ("Comprobando funcionamiento de setRank()", function() {
      expect(carta.setRank("ace")).to.equal(1);
    });
    it ("Comprobando funcionamiento de setRank()", function() {
      expect(carta.setRank("jack")).to.equal(11);
    });
    it ("Comprobando funcionamiento de setRank()", function() {
      expect(carta.setRank("queen")).to.equal(12);
    });
    it ("Comprobando funcionamiento de setRank()", function() {
      expect(carta.setRank("king")).to.equal(13);
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de la
    * funcion setValue()
  */
  describe("Probando constructor por defecto de la clase carta", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento de funcion setRank()
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcionamiento de setRank()", function() {
      expect(carta.setValue(carta.SUITS.CLUBS, 5)).to.equal(5);
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de la
    * funcion setValue()
  */
  describe("Probando constructor por defecto de la clase carta", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento de funcion setRank()
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcionamiento de setRank()", function() {
      let newSuit = carta.setSuit("SPADES");
      expect(carta.setSuit("SPADES")).to.equal(newSuit);
    });
    it ("Comprobando funcionamiento de setRank()", function() {
      let newSuit = carta.setSuit("HEARTS");
      expect(carta.setSuit("HEARTS")).to.equal(newSuit);
    });
    it ("Comprobando funcionamiento de setRank()", function() {
      let newSuit = carta.setSuit("DIAMONDS");
      expect(carta.setSuit("DIAMONDS")).to.equal(newSuit);
    });
    it ("Comprobando funcionamiento de setRank()", function() {
      let newSuit = carta.setSuit("CLUBS");
      expect(carta.setSuit("CLUBS")).to.equal(newSuit);
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de clase
    * carta para el palo Picas
  */
  let picas = new carta.Card("SPADES", 10);
  describe("Probando getter de la clase carta para palo SPADES", function() {
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor nombre de palo", function() {
      expect(picas.getCardSuitName()).to.equal("SPADES");
    });
    it ("Comprobando valor de palo", function() {
      expect(picas.getCardSuitValue()).to.equal(52);
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
  describe("Probando getter de la clase carta para palo HEARTS", function() {
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor nombre de palo", function() {
      expect(corazones.getCardSuitName()).to.equal("HEARTS");
    });
    it ("Comprobando valor de palo", function() {
      expect(corazones.getCardSuitValue()).to.equal(28);
    });
    it ("Comprobando valor numerico de carta", function() {
      expect(corazones.getCardRank()).to.equal(1);
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de clase
    * carta para el palo Diamantes
  */
  let diamantes = new carta.Card("DIAMONDS", "queen");
  describe("Probando getter de la clase carta para palo DIAMONDS", function() {
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor nombre de palo", function() {
      expect(diamantes.getCardSuitName()).to.equal("DIAMONDS");
    });
    it ("Comprobando valor de palo", function() {
      expect(diamantes.getCardSuitValue()).to.equal(14);
    });
    it ("Comprobando valor numerico de carta", function() {
      expect(diamantes.getCardRank()).to.equal(12);
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de clase
    * carta para el palo Treboles
  */
  let treboles = new carta.Card("CLUBS", 8);
  describe("Probando getter de la clase carta para palo CLUBS", function() {
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor nombre de palo", function() {
      expect(treboles.getCardSuitName()).to.equal("CLUBS");
    });
    it ("Comprobando valor de palo", function() {
      expect(treboles.getCardSuitValue()).to.equal(0);
    });
    it ("Comprobando valor numerico de carta", function() {
      expect(treboles.getCardRank()).to.equal(8);
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de clase
    * carta para la funcion setter
  */
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

  /**
    * @description Expect para comprobar el correcto funcionamiento de clase
    * carta para el metodo toString()
  */
  describe("Probando toString() de la clase carta", function() {
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
      expect(diamantes.toString()).to.equal("Queen of DIAMONDS");
    });
    it ("Comprobando la salida de toString()", function() {
      expect(treboles.toString()).to.equal("8 of CLUBS");
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de clase
    * carta para el metodo toString()
  */
  describe("Probando compareTwoCards() de la clase carta", function() {
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion compareTwoCards()
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando la salida de CARTA_1 mayor que CARTA_2", function() {
      expect(picas.compareTwoCards(diamantes)).to.equal(picas);
    });
    it ("Comprobando la salida de CARTA_2 mayor que CARTA_1", function() {
      expect(treboles.compareTwoCards(picas)).to.equal(picas);
    });
  });
});