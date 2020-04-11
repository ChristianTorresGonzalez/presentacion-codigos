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
  * @param {}. No recibimos ningun parametro, ya que no 
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

/**
    * @description Funcion getter utilizada para retornar el obejto palo al que pertenece
    * la carta que hemos pasado al constructor
    * @param {String}. Recibimos el string que hace referencia al palo al que pertenece la
    * carta.
    * @return {Object} En esta funcion, retornamos el objeto del palo al que pertenece la 
    * carta. Retornamos el objeto para en la carta poder almacenar los atributos 
    * correspondientes, siendo estos valor y palo.
*/
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

/**
    * @description Funcion setter utilizada para almacenar el valor numerico de la carta
    * principalmente hemos usado esta funcion, ya que hay cartas numericas y cartas literales.
    * En caso de que usemos una carta literal, esta sera introducida mediante un string, por
    * lo que introducimos esta funcion para poder clasificarla.
    * @param {Number - String}. Recibimos el number/string que hace referencia al valor numerico
    * que queremos que valga la carta.
    * @return {Number} En esta funcion, retornamos un numero correspondiente al valor de la carta.
    * Es decir, las cartas literales, se corresponden con un numero de la carta, entonces
    * lo que hacemos es trabajar con el correspondiente numero, pero solo cuando vayamos a mostrar
    * el valor, es cuando dejamos el valor numerico y trabajamos con el literal(string).
*/
function setRank(rank) {
    if (rank === "ace" || rank === "Ace" || rank === "ACE"){
        return 1;
    }
    else if (rank === "jack" || rank === "Jack" || rank === "JACK") {
        return 11;
    }
    else if (rank === "queen" || rank === "Queen" || rank === "QUEEN") {
        return 12;
    }
    else if (rank === "king" || rank === "King" || rank === "KING") {
        return 13;
    }
    else {
        return rank;
    }
}

class Card {
    constructor(suit = "CLUBS", rank = 2) {
        this.suit = getSuit(suit);
        this.rank = setRank(rank);
    }
    
    /**
     * @description Funcion getter utilizada para retornar el nombre del palo
     * @param {}. No recibimos ningun parametro, ya que es un atributo propio de la clase
     * @returns En esta funcion, retornamos el atributo nombre del objeto suit, ya que
     * es un objeto que tiene dos atributos, valor y palo
    */
    getCardSuitName() {
        return this.suit.name;
    }

    /**
     * @description Funcion getter utilizada para retornar el valor del palo, ya que
     * son los palos entre si tienen diferentes valores.
     * @param {}. No recibimos ningun parametro, ya que es un atributo propio de la clase
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
     * @param {String } newSuit Recibimos el nuevo palo que queremos introducir a la carta
     * @returns En esta funcion, no retornamos nada, ya que introducimos el nuevo
     * valor en el atributo que es almacenado
    */
    setCardSuit(newSuit) {
        this.suit = getSuit(newSuit);
    }

    /**
     * @description Funcion setter utilizada para escribir el valor numerico de la
     * carta.
     * @params recibimos el nuevo valor que queremos introducir a la carta
     * @returns En esta funcion, no retornamos nada, ya que introducimos el nuevo
     * valor en el atributo que es almacenado
    */
    setCardRank(newRank) {
        this.rank = setRank(newRank);
    }

    /**
     * @description Funcion imprimir por pantalla de manera formateada, el valor y
     * el palo de la carta
     * @param {}. No recibimos parametros ya que solo queremos mostrar los valores
     * almacenados.
     * @returns {String} En esta funcion, retornamos el string que contiene la salida
     * formateada.
    */
    toString() {
        let value;
        switch (this.rank) {
            case 1: 
                value = "Ace";
                break;
            case 11:
                value = "Jack";
                break;
            case 12:
                value = "Queen";
                break;
            case 13:
                value = "King";
                break;
            default:
                value = this.rank;
                break;
        }

        let salida = value + " of " + this.suit.name;
        return salida;
    }

    /**
     * @description Funcion utilizada para comparar dos cartas, es decir, indicar
     * cual de las dos cartas tiene mayor valor en el juego. Hay dos formas de comparar
     * dos cartas, 
     *  - Si los palos son iguales, compararemos cual carta tiene mayor valor numerico
     *  - Si son de diferente palo, compararemos el valor de los palos.
     * @param {Card} secondCard Recibimos como parametro, la segunda carta que queremos comparar
     * @returns {Bool} En esta funcion, retornamos un caracter booleano, indicando si la
     * carta es mayor o no que la segunda
    */
    compareTwoCards(secondCard) {
        if (this.suit.name === secondCard.getCardSuitName()) {
            return (this.rank > secondCard.rank) ? true : false;
        }
        else {
            return (this.suit.value > secondCard.suit.value) ? true : false;
        }
    }
}

module.exports = {Card: Card, SUITS};