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
let point = require("../src/point");

describe("Test unitarios para clase Point:",
function() {
    let punto = new point.Point("red", 1, 2, 3);
  describe("Probando constructor de la clase Point", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento del constructor de
     * la clase Point
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando que Point tiene constructor", function() {
      expect(punto).has.a.property('constructor');
    });
  });

  describe("Probando funcion draw() de la clase Point", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento de draw() de
     * la clase Point
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando que Point tiene draw()", function() {
      expect(punto).has.a.property('draw');
    });
  });
});