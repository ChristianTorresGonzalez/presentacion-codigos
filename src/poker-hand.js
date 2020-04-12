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
  * @file Fichero de implementacion de la clase pokerHand
  * @version 1.0.0
*/

'use strict'

const hand = require("./hand");

class PokerHand extends hand.Hand{
  constructor(label) {
      super(label);
  }

  /**
   * @description Funcion utilizada para calcular el numero de parejas en la mano
   * @param {}. No recibimos parametros ya que solo queremos contar el numero de
   * parejas que hay en la mano
   * @returns {Number} En esta funcion retornamos el numero de parejas que hay en
   *  el mazo, ya que asi nos es mas facil, luego calcular si en el mazo hay dobles
   * parejas.
  */
  hasPair() {
    let copia = this.cards.sort();
    let pairs = 0;
    for (let i = 1; i < copia.length; i++) {
      if (copia[i].getCardRank() === copia[i - 1].getCardRank()) {
        if (i !== (copia.length - 1)) { 
          if (copia[i].getCardRank() !== copia[i + 1].getCardRank()) {
            pairs++;
          }
          else {
            i++;
          }
        }
        else {
          if (copia[i].getCardRank() !== copia[i - 1].getCardRank()) {
            pairs++;
          }
          pairs++;
        }
      }
    }

    return pairs;
  }

  /**
   * @description Funcion utilizada para calcular el numero de trios en la mano
   * @param {}. No recibimos parametros ya que solo queremos contar el numero de
   * trios que hay en la mano
   * @returns {Number} En esta funcion retornamos el numero de trios que hay en
   *  el mazo, ya que asi nos es mas facil, luego calcular si en el mazo otras
   * jugadas de mayor valor
  */
  hasThreeOfaKind() {
    let copia = this.cards.sort();
    let contador = 0;
    for (let i = 1; i < copia.length; i++) {
      if (contador === 2) {
        if (i !== copia.length - 1) {
          if (copia[i].getCardRank() !== copia[i + 1].getCardRank()) {
            return true;
          }
        }
      }
      else {
        if (copia[i].getCardRank() === copia[i - 1].getCardRank()) {
          if (i === copia.length - 1) {
            if (contador === 1) {
              return true;
            }
          }
          else {
            contador++;
          }
        }
        else {
          contador = 0;
        }
      }
    }

    return false;
  }
}

module.exports = {PokerHand: PokerHand};