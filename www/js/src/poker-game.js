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
const fs = require('fs');

/**
 * @description Funcion Utilizada para construir las manos que utilizaremos en la 
 * siguiente funcion para comprobar si tienen escalera
 * @param {Array}. Recibimos el array donde se encuentran almacenadas las manos
 * que utilizaremos
 * @returns {Card} En esta funcion, no retornamos nada, ya que almacenamos los 
 * valores de manera directa
*/
function createPokerHands(arrayOfHands) {
  const NUMBEROFHANDS = 1;
  let mazo = new deck.Deck;
  
  mazo.shuffle();

  for (let i = 0; i < NUMBEROFHANDS; i++) {
    let hand = new pokerhand.PokerHand("Poker " + (i + 1));
    arrayOfHands.push(hand);
  }

  mazo.dealHands(arrayOfHands, 5);
}

/**
 * @description Funcion Utilizada para calcular si las manos introducidas contienen alguna
 * escaleras
 * @param {Hand}. Recibimos la mano a la que vamos a comprobar si tiene alguna escalera
 * @returns {Number} Retornamos el numero de escaleras que tiene la mano
*/
function comprobarEscalera(hand) {
  let handCopia = hand;
  handCopia.sort();
  let straight = 0;
  let escaleras = 0;
  let color = 0;
  let colores = 0;

  for (let i = 1; i < handCopia.cards.length; i++) {
    let resta = handCopia.cards[i].getCardRank() - handCopia.cards[i - 1].getCardRank();
    if (resta === 0) {
    }
    else if (resta === 1) {
      if (handCopia.cards[i].getCardSuitName() === handCopia.cards[i - 1].getCardSuitName()) {
        color++;
      }
      else {
        color = 0;
      }
      if ((straight + 1) >= 4) {
        escaleras++;
        straight++;
      }
      else {
        straight++;
      }
    }
    else {
      if (resta > 1) {
        straight = 0;
        color = 0;
      }
    }

    if (color >= 4) {
      colores++;
    }
  }
  
  return [escaleras, colores];
}

/**
 * @description Funcion Utilizada para calcular si las manos introducidas contienen alguna
 * pareja
 * @param {Hand}. Recibimos la mano a la que vamos a comprobar si tiene alguna pareja
 * @returns {Number} Retornamos el numero de parejas que tiene la mano
*/
function comprobarPareja(hand) {
  let pairs = hand.hasPair();
  return pairs;
}

/**
 * @description Funcion Utilizada para calcular si las manos introducidas contienen algun
 * trio
 * @param {Hand}. Recibimos la mano a la que vamos a comprobar si tiene alguna pareja
 * @returns {Number} Retornamos el numero de trios que tiene la mano
*/
function comprobarTrio(hand) {
  let trio = hand.hasThreeOfaKind();
  return trio;
}

/**
 * @description Funcion Utilizada para calcular si las manos introducidas contienen algun
 * color
 * @param {Hand}. Recibimos la mano a la que vamos a comprobar si tiene alguna color
 * @returns {Number} Retornamos el numero de colores que tiene la mano
*/
function comprobarColor(hand) {
  let color = hand.hasColor();
  return color;
}

/**
 * @description Funcion Utilizada para calcular si las manos introducidas contienen alguna
 * escalera, pareja, doble pareja, o trio.
 * @param {Array}. Recibimos el array de manos a las que le vamos a comprobar las puntuaciones
 * que tienen
 * @returns {} No retornamos nada, ya que imprime por pantalla los resultados obtenidos
*/
function comprobarPuntuacion(arrayOfHands) {
  let straight = 0;
  let pair = 0;
  let trio = 0;
  let color = 0;
  let straightColor = 0;
  let poker = 0;

  for (let i = 0; i < arrayOfHands.length; i++) {
    straight = comprobarEscalera(arrayOfHands[i]);
    pair = comprobarPareja(arrayOfHands[i]);
    trio = comprobarTrio(arrayOfHands[i]);
    color = comprobarColor(arrayOfHands[i]);
    straightColor = straight[1];
    poker = trio[1];

    // if (pair >= 2 && trio > 0) console.log(pair, trios);

    classify(arrayOfHands[i], pair, trio[0], straight[0], color, trio[1], straightColor);
  }
}

/**
 * @description Funcion Utilizada para calcular si las manos introducidas contienen algun
 * trio
 * @param {Hand}. Recibimos la mano a la que vamos a comprobar si tiene alguna pareja
 * @returns {Number} Retornamos el numero de trios que tiene la mano
*/
function classify(hand, pair, trios, straight, color, poker, straightColor) {
  let pareja = (pair === 1 ? 1: 0);
  let doblePareja = (pair >= 2 ? 1 : 0);

  if (straightColor !== 0) {
    hand.setLabel("Straight Flush");
  }
  else if (poker !== 0) {
    hand.setLabel("Poker");
  }
  else if (doblePareja > 1 && trios > 0) {
    hand.setLabel("Full");
  }
  else if (color !== 0) {
    hand.setLabel("Color");
  }
  else if (straight !== 0) {
    hand.setLabel("Straight");
  }
  else if (trios !== 0) {
    hand.setLabel("Trio");
  }
  else if (doblePareja !== 0) {
    hand.setLabel("Double Pair");
  }
  else if (pareja !== 0) {
    hand.setLabel("Pair");
  }
}

function calcularProbabilidades() {
  let cartaAlta = 0;
  let pareja = 0;
  let doble = 0;
  let trio = 0;
  let escalera = 0;
  let color = 0;
  let full = 0;
  let poker = 0;
  let real = 0;

  const NUMBEROFITERATIONS = 5000;
  const PORCENTAJE = 100;

  for (let i = 0; i < NUMBEROFITERATIONS; i++) {
    let arrayOfHands = [];

    createPokerHands(arrayOfHands);
    comprobarPuntuacion(arrayOfHands);

    for (let i = 0; i < arrayOfHands.length; i++) {
      switch (arrayOfHands[i].getLabel()) {
        case "Pair":
          pareja++;
          break;
        case "Double Pair":
          doble++;
          break;
        case "Trio":
          trio++;
          break;
        case "Straight":
          escalera++;
          break;
        case "Color":
          color++;
          break;
        case "Full":
          full++;
          break;
        case "Poker":
          poker++;
          break;
        case "Straight Flush":
          real++;
          break;
        default:
          cartaAlta++;
          break;
      }
    }
  }

  console.log("Porcentajes: ");
  console.log("Carta alta: " + (cartaAlta/NUMBEROFITERATIONS) * PORCENTAJE);
  console.log("Pareja: " + (pareja/NUMBEROFITERATIONS) * PORCENTAJE);
  console.log("Doble Pareja: " + (doble/NUMBEROFITERATIONS) * PORCENTAJE);
  console.log("Trio: " + (trio/NUMBEROFITERATIONS) * PORCENTAJE);
  console.log("Escalrea: " + (escalera/NUMBEROFITERATIONS) * PORCENTAJE);
  console.log("Color: " + (color/NUMBEROFITERATIONS) * PORCENTAJE);
  console.log("Full: " + (full/NUMBEROFITERATIONS) * PORCENTAJE);
  console.log("Poker: " + (poker/NUMBEROFITERATIONS) * PORCENTAJE);
  console.log("Real: " + (real/NUMBEROFITERATIONS) * PORCENTAJE);

  let probabilidades = [
    {nombre: "Carta alta", valor: (cartaAlta/NUMBEROFITERATIONS) * PORCENTAJE},
    {nombre: "Pareja", valor: (pareja/NUMBEROFITERATIONS) * PORCENTAJE},
    {nombre: "Doble Pareja", valor: (doble/NUMBEROFITERATIONS) * PORCENTAJE},
    {nombre: "Trio", valor: (trio/NUMBEROFITERATIONS) * PORCENTAJE},
    {nombre: "Escalrea", valor: (escalera/NUMBEROFITERATIONS) * PORCENTAJE},
    {nombre: "Color", valor: (color/NUMBEROFITERATIONS) * PORCENTAJE},
    {nombre: "Full", valor: (full/NUMBEROFITERATIONS) * PORCENTAJE},
    {nombre: "Poker", valor: (poker/NUMBEROFITERATIONS) * PORCENTAJE},
    {nombre: "Real", valor: (real/NUMBEROFITERATIONS) * PORCENTAJE},
  ];

  fs.writeFile("probabilidades.json", JSON.stringify(probabilidades, null, " "), function (err) {
    if (err) {
      throw err;
    }
    else {
      console.log('Saved!');
    }
  });

  fs.writeFile("www/js/probabilidades.json", JSON.stringify(probabilidades, null, " "), function (err) {
    if (err) {
      throw err;
    }
    else {
      console.log('Saved!');
    }
  });
}

/**
 * @description Funcion main utilizada para llamar al resto de funciones
 * @param {}. No recibimos parametros ya que es aqui donde creamos el array de manos
 * y es ese array el que le pasamos al resto de funciones
 * @returns {} En esta funcion, no retornamos nada
*/
function main() {
  calcularProbabilidades();
}

main()