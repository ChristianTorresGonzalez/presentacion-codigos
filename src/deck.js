/**
  * @copyright Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Asignatura: Programación de Aplicaciones Interactivas (PAI)
  * Curso: 3º Itinerario 1
  * Práctica 8 PAI - Poker. Programacion Orientada a Objetos
  * @author: Christian Torres Gonzalez alu0101137902@ull.edu.es
  * @description: En este archivo, implementaremos los correspondientes metodos
  * necesarios para trabajar con la clase mazo. Donde almacenaremos un conjunto
  * de cartas, formando el mazo de la baraja.
  * @since 10/04/2020
  * @file Fichero de implementacion de la clase carta
  * @version 1.0.0
*/

'use strict'

const carta = require("./card");

class Deck {
    constructor() {
        this.mazo = [];

        for (let suit in carta.SUITS) {
            for (let i = 0; i < 13; i++) {
                let card = new carta.Card(suit, i + 1);
                this.mazo.push(card);
            }
        }
    }

    write() {
        let string = "";
        for (let i = 0; i < this.mazo.length; i++) {
            string += this.mazo[i].toString();
        }
        return string;
    }
}

// let mazo = new Deck;
// mazo.write();
module.exports = {Deck:Deck}
// Ace of SPADES\n2 of SPADES\n3 of SPADES\n4 of SPADES\n5 of SPADES\n6 of SPADES\n7 of SPADES\n8 of SPADES\n9 of SPADES\n10 of SPADES\nJack of SPADES\nQueen of SPADES\nKing of SPADES\nAce of HEARTS\n2 of HEARTS\n3 of HEARTS\n4 of HEARTS\n5 of HEARTS\n6 of HEARTS\n7 of HEARTS\n8 of HEARTS\n9 of HEARTS\n10 of HEARTS\nJack of HEARTS\nQueen of HEARTS\nKing of HEARTS\nAce of DIAMONDS\n2 of DIAMONDS\n3 of DIAMONDS\n4 of DIAMONDS\n5 of DIAMONDS\n6 of DIAMONDS\n7 of DIAMONDS\n8 of DIAMONDS\n9 of DIAMONDS\n10 of DIAMONDS\nJack of DIAMONDS\nQueen of DIAMONDS\nKing of DIAMONDS\nAce of CLUBS\n2 of CLUBS\n3 of CLUBS\n4 of CLUBS\n5 of CLUBS\n6 of CLUBS\n7 of CLUBS\n8 of CLUBS\n9 of CLUBS\n10 of CLUBS\nJack of CLUBS\nQueen of CLUBS\nKing of CLUBS