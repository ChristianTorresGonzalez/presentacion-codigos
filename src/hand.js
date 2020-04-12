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

// const mazo = require("./deck");

class Hand {
    constructor(label) {
        this.cards = [];
        this.label = label;
    }

    /**
    //  * @description Funcion introducir en la ultima posicion de la mano, es decir, la 
    //  * que mas arriba
    //  * se encuentra.
    //  * @param {}. No recibimos parametros ya que solo queremos insertar la mas superficial
    //  * @returns {Card} En esta funcion no retornamos, ya que instroducimos la carta 
    //  * mas superficial
    // */
    // addCard(carta) {
    //     this.cards.push(carta);
    // }

    //     /**
    //      * @description Funcion sacar la ultima carta de la mano, es decir, la que mas arriba
    //      * se encuentra.
    //      * @param {}. No recibimos parametros ya que solo queremos eliminar la mas superficial
    //      * @returns {Card} En esta funcion, retornamos la carta mas superficial
    //     */
    // popCard() {
    //     return (this.cards.pop());
    // }
}

// let mano = new Hand("Mano");
// console.log(mano.cards);
// console.log(mano.label);
module.exports = {Hand:Hand}