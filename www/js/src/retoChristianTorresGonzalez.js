/**
  * @copyright Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Asignatura: Programación de Aplicaciones Interactivas (PAI)
  * Curso: 3º Itinerario 1
  * Práctica 7 PAI - Mandelbrot. Numero complejos
  * @author: Christian Torres Gonzalez alu0101137902@ull.edu.es
  * @description: Programa que dado un lienzo de canvas, va a calcular, dada
  * una coordenada X e Y, que dada un numro de iteraciones, para cada coordenada,
  * y utilizando la función f(Zn) = Z(n-1)^2 + c, donde c es un numero complejo dado,
  * y zn-1 es el resultado de elevar al cuadrado la funcion para valor Zn-1. Para poder
  * llegar a un resultado deseado, debemos partir de la copndicion de que x e y, que son
  * las coordenadas del punto del lienzo de canvas que estamos tratando.
  * @since 28/03/2020
  * @file Fichero de implementacion de ejercicios
  * @version 1.0.0
*/

'use strict'
let line = require("./line")

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function pintarCuadricula() {
    let origen_vertical = canvas.width / 7;
    let origen_horizontal = canvas.height / 7;
    for (let i = 0; i < 7; i++) {
        let linea_vertical = new line.Line("purple", (i + 1) * origen_vertical, 0, (i + 1) * origen_vertical, canvas.height, 2);
        linea_vertical.draw(ctx, "purple");
        let linea_horizontal = new line.Line("purple", 0, (i + 1 * origen_horizontal), canvas.width, (i + 1 * origen_horizontal), 2);
        linea_horizontal.draw(ctx, "purple");
    }
}

pintarCuadricula();