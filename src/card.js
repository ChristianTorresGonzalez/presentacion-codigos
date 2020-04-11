/**
  * @copyright Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Asignatura: Programación de Aplicaciones Interactivas (PAI)
  * Curso: 3º Itinerario 1
  * Práctica 8 PAI - Poker. Programacion Orientada a Objetos
  * @author: Christian Torres Gonzalez alu0101137902@ull.edu.es
  * @description: En este archivo, implementaremos los correspondientes metodos
  * necesarios para trabajar con la clase carta. Ademas utilizaremos en enum, ya
  * que necesitamos distinguir entre los 4 palos de la baraja. Debido a esto y a 
  * que ademas tenemos que cada palo, tiene un valor diferente, utilizaremos una
  * variable valor, que utilizaremos para diferenciarlas a parte del palo.
  * @since 10/04/2020
  * @file Fichero de implementacion de la clase carta
  * @version 1.0.0
*/

'use strict'


/**
  * @description Enum utilizado para diferencia los diferentes palos de la baraja
  * @params No recibimos ningun parametro, ya que no 
  * @returns En esta funcion, retornamos la parte real del complejo en cuestion
*/
const SUITS = {
    SPADES: {
        name: "SPADES",
        value: 4
    },
    HEARTS: {
        name: "HEARTS",
        value: 3
    },
    DIAMONDS: {
        name: "DIAMONDS",
        value: 2
    },
    CLUBS: {
        name: "CLUBS",
        value: 1
    }
}

function getSuit(suit) {
    switch (suit) {
        case SUITS.SPADES.name:
            return SUITS.SPADES;
        case SUITS.HEARTS.name:
            return SUITS.HEARTS;
        case SUITS.DIAMONDS.name:
            return SUITS.DIAMONDS;
        case SUITS.CLUBS.name:
            return SUITS.CLUBS;
    }
}

class Card {
    constructor(suit = "CLUBS", rank = 2) {
        this.suit = getSuit(suit);
        this.rank = rank;
    }
    
    /**
     * @description Funcion getter utilizada para retornar el nombre del palo
     * @params No recibimos ningun parametro, ya que es un atributo propio de la clase
     * @returns En esta funcion, retornamos el atributo nombre del objeto suit, ya que
     * es un objeto que tiene dos atributos, valor y palo
    */
    getCardSuitName() {
        return this.suit.name;
    }

    /**
     * @description Funcion getter utilizada para retornar el valor del palo, ya que
     * son los palos entre si tienen diferentes valores.
     * @params No recibimos ningun parametro, ya que es un atributo propio de la clase
     * @returns En esta funcion, retornamos el atributo valor del objeto suit, ya que
     * es un objeto que tiene dos atributos, valor y palo
    */
    getCardSuitValue() {
        return this.suit.value;
    }

    /**
     * @description Funcion getter utilizada para retornar el valor numerico de la carta.
     * @params No recibimos ningun parametro, ya que es un atributo propio de la clase
     * @returns En esta funcion, retornamos el atributo rank, que es el valor numerico
     * de la clase carta.
    */
    getCardRank() {
        return this.rank;
    }

    /**
     * @description Funcion setter utilizada para escribir el valor del palo, ya que
     * son los palos entre si tienen diferentes valores.
     * @params recibimos el nuevo palo que queremos introducir a la carta
     * @returns En esta funcion, no retornamos nada, ya que introducimos el nuevo
     * valor en el atributo que es almacenado
    */
    setCardSuit(newSuit) {
        this.suit.name = getSuit(newSuit).name;
        this.suit.value = getSuit(newSuit).value;
    }

    /**
     * @description Funcion setter utilizada para escribir el valor numerico de la
     * carta.
     * @params recibimos el nuevo valor que queremos introducir a la carta
     * @returns En esta funcion, no retornamos nada, ya que introducimos el nuevo
     * valor en el atributo que es almacenado
    */
    setCardRank(newRank) {
        this.rank = newRank;
    }
}

// let corazones = new Card("HEARTS", 1);
// console.log(corazones);
module.exports = {Card: Card};