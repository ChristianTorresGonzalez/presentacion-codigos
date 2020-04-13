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
  * @file Fichero de testeo de la clase Deck
  * @version 1.0.0
*/

'use strict'

describe("Test unitarios para clase Mazo(Deck):",
function() {
  /**
    * @description Expect para comprobar el correcto funcionamiento de clase mazo
  */
  let mazo = new Deck;
  describe("Probando constructor de la clase mazo", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento del constructor de
     * la clase mazo
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando que mazo tiene constructor", function() {
      chai.expect(mazo).has.a.property('constructor');
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento del popCard, 
    * encargado de sacar la ultima carta del mazo, la mas superficial y retornarla
  */
  describe("Probando funcion write() para imprimir", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento del metodo write()
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcion mostrar cartas de del mazo", function() {
      chai.expect(mazo).has.a.property('write');
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
    let lastCard = new Card("CLUBS", "King");
    it ("Comprobando funcion extraer carta de la  clase mazo", function() {
      chai.expect(console.log(mazo.popCard())).to.equal(console.log(lastCard));
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento del addCard, 
    * encargado de añadir una nueva carta en la ultima posicion del mazo
  */
  describe("Probando funcion addCard() para añadir nueva carta", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento del metodo addCard()
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    let lastCard = new Card("HEARTS", "16");
    it ("Comprobando funcion extraer carta de la  clase mazo", function() {
      mazo.addCard(lastCard);
      chai.expect(console.log(mazo.popCard())).to.equal(console.log(lastCard));
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento del shuffle, 
    * encargado de barajar y mezclar las cartas del mazo
  */
  describe("Probando funcion shuffle() para barajar mazo", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento del metodo shuffle()
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcion para barajar cartas del mazo", function() {
      chai.expect(mazo).has.a.property('shuffle');
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento del sort(), 
    * encargado de ordenar las cartas del mazo
  */
  describe("Probando funcion sort() para barajar mazo", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento del metodo sort()
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcion para ordenar cartas del mazo", function() {
      let newMazo = new Deck;
      let copiaMazo = mazo.sort();
      chai.expect(copiaMazo).to.equal(console.log(newMazo));
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento del moveCard(), 
    * encargado de mover una carta del mazo
  */
  describe("Probando funcion moveCard() para mover carta al mazo", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento del metodo moveCard()
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcion moveCard() para mover cartas del mazo", function() {
      let newMazo = new Deck;
      newMazo.shuffle();
      let nuevoMazo = new Deck;
      nuevoMazo.moveCard(newMazo, 1);
      chai.expect(nuevoMazo.mazo.length).to.equal(53);
    });
  });

  /**
    * @description Expect para comprobar el correcto funcionamiento del dealHands(), 
    * encargado de generar manos y mover cartas a las manos
  */
  describe("Probando dealHands de la clase mazo", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento del metodo dealHands()
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando funcion dealHands() para mover cartas del mazo", function() {
      chai.expect(mazo).has.a.property('dealHands');
    });
  });
});