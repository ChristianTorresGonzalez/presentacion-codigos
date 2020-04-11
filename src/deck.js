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

module.exports = {Deck:Deck}