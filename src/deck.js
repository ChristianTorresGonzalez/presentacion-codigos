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
const mano = require("./hand");

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

  /**
   * @description Funcion imprimir por pantalla de manera formateada, las cartas
   * del mazo
   * @param {}. No recibimos parametros ya que solo queremos mostrar los valores
   * almacenados.
   * @returns {String} En esta funcion, retornamos el string que contiene la salida
   * formateada.
  */
  write() {
    for (let i = 0; i < this.mazo.length; i++) {
      console.log(this.mazo[i].toString());
    }
  }

  /**
   * @description Funcion sacar la ultima carta del mazo, es decir, la que mas arriba
   * se encuentra.
   * @param {}. No recibimos parametros ya que solo queremos eliminar la mas superficial
   * @returns {Card} En esta funcion, retornamos la carta mas superficial
  */
  popCard() {
      return (this.mazo.pop());
  }

  /**
   * @description Funcion introducir en la ultima posicion del mazo, es decir, la 
   * que mas arriba
   * se encuentra.
   * @param {}. No recibimos parametros ya que solo queremos insertar la mas superficial
   * @returns {Card} En esta funcion no retornamos, ya que instroducimos la carta 
   * mas superficial
  */
  addCard(carta) {
    this.mazo.push(carta);
  }

  /**
   * @description Funcion mezclar las cartas del mazo
   * @param {}. No recibimos parametros ya que solo queremos mezclar las cartas ya
   * introducidas en el mazo
   * @returns {Card} En esta funcion no retornamos, ya que mezclaremos las cartas ya
   * almacenadas en el mazo
  */
  shuffle() {
    let arrayAuxiliar = [];
    let size = this.mazo.length;

    for (let i = 0; i < size; i++) {
      let index = Math.floor(Math.random() * this.mazo.length);
      arrayAuxiliar.push(this.mazo[index]);
      this.mazo.splice(index, 1);
    }

    this.mazo = arrayAuxiliar;
  }

  /**
   * @description Funcion ordenar las cartas del mazo
   * @param {}. No recibimos parametros ya que solo queremos ordenar las cartas ya
   * introducidas en el mazo
   * @returns {Card} En esta funcion no retornamos, ya que ordenaremos las cartas ya
   * almacenadas en el mazo
  */
  sort() {
    this.mazo.sort(function(carta1, carta2) {
      return carta1.value - carta2.value;
    });
  }

  /**
   * @description Funcion mover carta de una mano al mazo
   * @param {Hand}. Recibimos la mano desde la que vamos a mover la carta al mazo
   * @returns {Card} En esta funcion no retornamos, ya que solo movemos una carta 
   * de la mano al mazo
  */
  moveCard(deck, numberOfCards) {
    for (let i = 0; i < numberOfCards; i++) {
      let card = deck.popCard();
      this.mazo.push(card);
    }
  }

  /**
   * @description Ejercicio 1. Implementar funcion para crear numero de manos y 
   * añadirle el numero de cartas deseadas
   * @param {Hand}. Recibimos el numero de manos que tenemos que crear y la cantidad
   * de cartas a añadir en cada mazo
   * @returns {Card} En esta funcion no retornamos, ya que solo movemos una carta 
   * de la mano al mazo
  */
  dealHands(hands, numberOfCards) {
    this.shuffle();
    let arrayOfHands = [];

    for (let i = 0; i < hands; i++) {
      let hand = new mano.Hand("Mano " + (i + 1));
      for (let j = 0; j < numberOfCards; j++) {
        let card = this.popCard();
        hand.addCard(card);
      }
      arrayOfHands.push(hand);
    }

    return arrayOfHands;
  }
}

// let mazo = new Deck;
// let hands = mazo.dealHands(5, 5);
// for (let i = 0; i < hands.length;i++) {
//   for (let j = 0; j < hands[i].cards.length; j++){
//     console.log(hands[i].cards[j].toString());
//   }
// }
module.exports = {Deck:Deck}