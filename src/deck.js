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

    // /**
    //  * @description Funcion introducir en la ultima posicion del mazo, es decir, la 
    //  * que mas arriba
    //  * se encuentra.
    //  * @param {}. No recibimos parametros ya que solo queremos insertar la mas superficial
    //  * @returns {Card} En esta funcion no retornamos, ya que instroducimos la carta 
    //  * mas superficial
    // */
    // addCard(carta) {
    //     this.mazo.push(carta);
    // }

    // /**
    //  * @description Funcion mezclar las cartas del mazo
    //  * @param {}. No recibimos parametros ya que solo queremos mezclar las cartas ya
    //  * introducidas en el mazo
    //  * @returns {Card} En esta funcion no retornamos, ya que mezclaremos las cartas ya
    //  * almacenadas en el mazo
    // */
    // shuffle() {
    //     let arrayAuxiliar = [];
    //     let size = this.mazo.length;

    //     for (let i = 0; i < size; i++) {
    //         let index = Math.floor(Math.random() * this.mazo.length);
    //         arrayAuxiliar.push(this.mazo[index]);
    //         this.mazo.splice(index, 1);
    //     }
    // }
}

// let mazo = new Deck;
// mazo.write();
module.exports = {Deck:Deck}