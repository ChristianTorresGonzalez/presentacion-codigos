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
  * @file Fichero de implementacion de la clase mano
  * @version 1.0.0
*/

'use strict'

class Hand {
  constructor(label = "") {
    this.cards = [];
    this.label = label;
  }

  /**
   * @description Funcion getter para retornar nueva etiqueta
   * @param {}. String que contiene la nueva etiqueta
   * @returns {String} Retornamos el string que contiene la etiqueta
  */
  getLabel() {
    return this.label;
  }
  
  /**
   * @description Funcion setter para introducir nueva etiqueta
   * @param {String} label String que contiene la nueva etiqueta
   * @returns {} No retornamos nada ya que solo queremos introducir
  */
  setLabel(label) {
    this.label = label;
  }

  /**
   * @description Funcion introducir en la ultima posicion de la mano, es decir, la 
   * que mas arriba
   * se encuentra.
   * @param {}. No recibimos parametros ya que solo queremos insertar la mas superficial
   * @returns {Card} En esta funcion no retornamos, ya que instroducimos la carta 
   * mas superficial
  */
  addCard(carta) {
    this.cards.push(carta);
  }

  /**
   * @description Funcion sacar la ultima carta de la mano, es decir, la que mas arriba
   * se encuentra.
   * @param {}. No recibimos parametros ya que solo queremos eliminar la mas superficial
   * @returns {Card} En esta funcion, retornamos la carta mas superficial
  */
  popCard() {
    return (this.cards.pop());
  }

  /**
   * @description Funcion mover la ultima carta del mazo a la mano, es decir, la que mas 
   * arriba se encuentra.
   * @param {}. No recibimos parametros ya que solo queremos eliminar la mas superficial
   * @returns {Card} En esta funcion, no retornamos nada
  */
  moveCard(deck, numberOfCards) {
    for (let i = 0; i < numberOfCards; i++) {
      let card = deck.popCard();
      this.cards.push(card);
    }
  }

  /**
   * @description Funcion ordenar las cartas del mazo
   * @param {}. No recibimos parametros ya que solo queremos ordenar las cartas ya
   * introducidas en el mazo
   * @returns {Card} En esta funcion no retornamos, ya que ordenaremos las cartas ya
   * almacenadas en el mazo
  */
  sort() {
    this.cards.sort(function(carta1, carta2) {
      return carta1.rank - carta2.rank;
    });
  }
}