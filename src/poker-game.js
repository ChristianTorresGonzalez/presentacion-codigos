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

const deck = require("./deck");
const pokerhand = require("./poker-hand");

/**
 * @description Funcion Utilizada para construir las manos que utilizaremos en la 
 * siguiente funcion para comprobar si tienen escalera
 * @param {Array}. Recibimos el array donde se encuentran almacenadas las manos
 * que utilizaremos
 * @returns {Card} En esta funcion, no retornamos nada, ya que almacenamos los 
 * valores de manera directa
*/
function createPokerHands(arrayOfHands) {
    const NUMBEROFHANDS = 7;
    let mazo = new deck.Deck;
    
    mazo.shuffle();

    for (let i = 0; i < NUMBEROFHANDS; i++) {
        let hand = new pokerhand.PokerHand("Poker " + (i + 1));
        arrayOfHands.push(hand);
    }

    mazo.dealHands(arrayOfHands, 7);
}


/**
 * @description Funcion Utilizada para calcular si las manos introducidas contienen alguna
 * escalera
 * @param {}. No recibimos parametros ya que solo queremos mostrar si alguna mano tiene
 * una escalera
 * @returns {Card} En esta funcion, no retornamos nada
*/
function comprobarEscalera(arrayOfHands) {
  let straightPosition = [];

  for (let i = 0; i < arrayOfHands.length; i++) {
    arrayOfHands[i].sort();
    let straight = 0;
    for (let j = 1; j < arrayOfHands[i].cards.length; j++) {
      let resta = arrayOfHands[i].cards[j].getCardRank() - arrayOfHands[i].cards[j - 1].getCardRank();
      if (resta === 0) {
      }
      else if (resta === 1) {
        straight++;
      }
      else {
        if (straight !== 4)
        straight = 0;
      }
    }
    if (straight >= 4) {
      straightPosition.push(arrayOfHands[i]);
    }
  }
  console.log("There're " + straightPosition.length + " straight");

  for (let i = 0; i < straightPosition.length; i++) {
    for (let j = 0; j < straightPosition[i].cards.length; j++) {
      console.log(straightPosition[i].cards[j].toString());
    }
  }
}

function comprobarPareja(arrayOfHands) {
  for (let i = 0; i < arrayOfHands.length; i++) {
    let pairs = arrayOfHands[i].hasPair() 
    console.log("HAS " + pairs + " PAIR");
    if (pairs > 0) {
      for (let j = 0; j < arrayOfHands[i].cards.length; j++) {
        // console.log(arrayOfHands[i].cards[j].toString());
      }
      // console.log();
    }
    // console.log();
  }
}

function comprobarTrio(arrayOfHands) {
  for (let i = 0; i < arrayOfHands.length; i++) {
    for (let j = 0; j < arrayOfHands[i].cards.length; j++) {
      console.log(arrayOfHands[i].cards[j].toString());
    }
    console.log();
    if (arrayOfHands[i].hasThreeOfaKind()) {
      console.log("HAS Three Of aKind") 
    }    
  }
}

function main() {
  let arrayOfHands = [];
  createPokerHands(arrayOfHands);

  comprobarEscalera(arrayOfHands);
  console.log();
  comprobarPareja(arrayOfHands);
  console.log();
  comprobarTrio(arrayOfHands);
}

main()