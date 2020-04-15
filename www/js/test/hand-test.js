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
  * @file Fichero de testeo de la clase Hand
  * @version 1.0.0
*/

'use strict'


describe("Test unitarios para clase Mano(Hand):",
function() {
  /**
   * @description Expect para comprobar el correcto funcionamiento de clase mano
  */
  let mano = new Hand("Mano");
  let mazo = new Deck;
  mazo.shuffle();
  describe("Probando constructor de la clase mano", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento del constructor de
     * la clase mano
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando que mano tiene constructor", function() {
      chai.expect(mano).has.a.property('constructor');
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de getLabel()
  */
  describe("Probando getLabel() de la clase mano", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento addCard() de
     * la clase mano
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcion getLabel() de la clase mano", function() {
      chai.expect(mano.getLabel()).to.equal("Mano");
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento de setLabel()
  */
 describe("Probando setLabel() de la clase mano", function() {
  /**
   * @description Expect para comprobar el correcto funcionamiento setLabel() de
   * la clase mano
   * @param {}
   * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
  */
  it ("Comprobando funcion setLabel() de la clase mano", function() {
    mano.setLabel("hola");
    chai.expect(mano.getLabel()).to.equal("hola");
  });
});

  /**
    * @description Expect para comprobar el correcto funcionamiento de addCard()
  */
  describe("Probando addCard() de la clase mano", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento addCard() de
     * la clase mano
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcion addCard() de la clase mano", function() {
      let carta = new Card("CLUBS", 4);
      mano.addCard(carta);
      chai.expect(mano.cards.length).to.equal(1);
    });
  });

  /**
   * @description Expect para comprobar el correcto funcionamiento de popCard()
  */
  describe("Probando popCard() de la clase mano", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento popCard() de
     * la clase mano
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcion popCard() de la clase mano", function() {
      mano.popCard();
      chai.expect(mano.cards.length).to.equal(0);
    });
  });

  /**
   * @description Expect para comprobar el correcto funcionamiento de popCard() del
   * mazo a la mano
  */
  describe("Probando moveCard() de la clase mano", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento moveCard() de
     * la clase mano
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcion moveCard() de la clase mano", function() {
      mano.moveCard(mazo, 5);
      console.log(mano);
      chai.expect(mano.cards.length).to.equal(5);
    });
  });

  /**
   * @description Expect para comprobar el correcto funcionamiento de popCard() de una
   * mano a otra mano
  */
  describe("Probando moveCard() de la clase mano", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento moveCard() de
     * la clase mano
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcion moveCard() de la clase mano-mano", function() {
      let newMano = new Hand("Mano 2");
      newMano.moveCard(mano, 5);
      chai.expect(newMano.cards.length).to.equal(5);
    });
  });

  /**
   * @description Expect para comprobar el correcto funcionamiento de sort()
  */
  describe("Probando sort() de la clase mano", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento sort() de
     * la clase mano
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcion moveCard() de la clase mano-mano", function() {
      chai.expect(mano).has.a.property('sort');
    });
  });
});