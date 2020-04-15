/**
  * @copyright Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Asignatura: Programación de Aplicaciones Interactivas (PAI)
  * Curso: 3º Itinerario 1
  * Práctica 8 PAI - Poker. Programacion Orientada a Objetos
  * @author: Christian Torres Gonzalez alu0101137902@ull.edu.es
  * @description: En este archivo, implementaremos los teste de la clase Line
  * @since 10/04/2020
  * @file Fichero de testeo de la clase Line
  * @version 1.0.0
*/

'use strict'

const expect = require("chai").expect;
let line = require("../src/line");

describe("Test unitarios para clase Line:",
function() {
    let linea = new line.Line("red", 1, 2, 3);
  describe("Probando constructor de la clase Line", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento del constructor de
     * la clase Line
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando que Line tiene constructor", function() {
      expect(linea).has.a.property('constructor');
    });
  });

  describe("Probando funcion draw() de la clase Line", function() {
    /**
     * @description Expect para comprobar el correcto funcionamiento de draw() de
     * la clase Line
     * @param {}
     * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando que Line tiene draw()", function() {
      expect(linea).has.a.property('draw');
    });
  });
});