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
  * @file Fichero de testeo de la clase Card
  * @version 1.0.0
*/

'use strict'

const expect = require("chai").expect;
let figura = require("../src/figura");

describe("Test unitarios para clase figura:",
function() {
  let figure = new figura.Figura("red");
  describe("Probando constructor de la clase figura", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento del constructor de
     * la clase figura
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando que figura tiene constructor", function() {
      expect(figure).has.a.property('constructor');
    });
  });

  describe("Probando funcion draw() de la clase figura", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento del draw() de
     * la clase figura
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando que figura tiene draw()", function() {
      expect(figure).has.a.property('draw');
    });
  });
});