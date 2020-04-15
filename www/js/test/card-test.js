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
      chai.expect(Card).has.a.property('constructor');
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de clase
    * carta cuando no introducimos ninguna carta en especifico
  */
  let cartaPorDefecto = new Card;
  describe("Probando constructor por defecto de la clase carta", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento de funcion getter
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor nombre de palo", function() {
      chai.expect(cartaPorDefecto.getCardSuitName()).to.equal("CLUBS");
    });
    it ("Comprobando valor de palo", function() {
      chai.expect(cartaPorDefecto.getCardSuitValue()).to.equal(0);
    });
    it ("Comprobando valor numerico de carta", function() {
      chai.expect(cartaPorDefecto.getCardRank()).to.equal(2);
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
      chai.expect(setRank(5)).to.equal(5);
    });
    it ("Comprobando funcionamiento de setRank()", function() {
      chai.expect(setRank("ace")).to.equal(1);
    });
    it ("Comprobando funcionamiento de setRank()", function() {
      chai.expect(setRank("jack")).to.equal(11);
    });
    it ("Comprobando funcionamiento de setRank()", function() {
      chai.expect(setRank("queen")).to.equal(12);
    });
    it ("Comprobando funcionamiento de setRank()", function() {
      chai.expect(setRank("king")).to.equal(13);
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
      chai.expect(setValue(SUITS.CLUBS, 5)).to.equal(5);
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
      let newSuit = setSuit("SPADES");
      chai.expect(setSuit("SPADES")).to.equal(newSuit);
    });
    it ("Comprobando funcionamiento de setRank()", function() {
      let newSuit = setSuit("HEARTS");
      chai.expect(setSuit("HEARTS")).to.equal(newSuit);
    });
    it ("Comprobando funcionamiento de setRank()", function() {
      let newSuit = setSuit("DIAMONDS");
      chai.expect(setSuit("DIAMONDS")).to.equal(newSuit);
    });
    it ("Comprobando funcionamiento de setRank()", function() {
      let newSuit = setSuit("CLUBS");
      chai.expect(setSuit("CLUBS")).to.equal(newSuit);
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de clase
    * carta para el palo Picas
  */
  let picas = new Card("SPADES", 10);
  describe("Probando getter de la clase carta para palo SPADES", function() {
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor nombre de palo", function() {
      chai.expect(picas.getCardSuitName()).to.equal("SPADES");
    });
    it ("Comprobando valor de palo", function() {
      chai.expect(picas.getCardSuitValue()).to.equal(52);
    });
    it ("Comprobando valor numerico de carta", function() {
      chai.expect(picas.getCardRank()).to.equal(10);
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de clase
    * carta para el palo Corazones
  */
  let corazones = new Card("HEARTS", 1);
  describe("Probando getter de la clase carta para palo HEARTS", function() {
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor nombre de palo", function() {
      chai.expect(corazones.getCardSuitName()).to.equal("HEARTS");
    });
    it ("Comprobando valor de palo", function() {
      chai.expect(corazones.getCardSuitValue()).to.equal(28);
    });
    it ("Comprobando valor numerico de carta", function() {
      chai.expect(corazones.getCardRank()).to.equal(1);
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de clase
    * carta para el palo Diamantes
  */
  let diamantes = new Card("DIAMONDS", "queen");
  describe("Probando getter de la clase carta para palo DIAMONDS", function() {
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor nombre de palo", function() {
      chai.expect(diamantes.getCardSuitName()).to.equal("DIAMONDS");
    });
    it ("Comprobando valor de palo", function() {
      chai.expect(diamantes.getCardSuitValue()).to.equal(14);
    });
    it ("Comprobando valor numerico de carta", function() {
      chai.expect(diamantes.getCardRank()).to.equal(12);
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de clase
    * carta para el palo Treboles
  */
  let treboles = new Card("CLUBS", 8);
  describe("Probando getter de la clase carta para palo CLUBS", function() {
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor nombre de palo", function() {
      chai.expect(treboles.getCardSuitName()).to.equal("CLUBS");
    });
    it ("Comprobando valor de palo", function() {
      chai.expect(treboles.getCardSuitValue()).to.equal(0);
    });
    it ("Comprobando valor numerico de carta", function() {
      chai.expect(treboles.getCardRank()).to.equal(8);
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
      chai.expect(cartaPorDefecto.getCardSuitName()).to.equal("SPADES");
    });
    it ("Comprobando valor numerico de carta", function() {
      cartaPorDefecto.setCardRank(9);
      chai.expect(cartaPorDefecto.getCardRank()).to.equal(9);
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
      chai.expect(picas.toString()).to.equal("10 of SPADES");
    });
    it ("Comprobando la salida de toString()", function() {
      chai.expect(corazones.toString()).to.equal("Ace of HEARTS");
    });
    it ("Comprobando la salida de toString()", function() {
      chai.expect(diamantes.toString()).to.equal("Queen of DIAMONDS");
    });
    it ("Comprobando la salida de toString()", function() {
      chai.expect(treboles.toString()).to.equal("8 of CLUBS");
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
      chai.expect(picas.compareTwoCards(diamantes)).to.equal(picas);
    });
    it ("Comprobando la salida de CARTA_2 mayor que CARTA_1", function() {
      chai.expect(treboles.compareTwoCards(picas)).to.equal(picas);
    });
  });
});