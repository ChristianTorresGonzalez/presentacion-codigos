(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
  * @copyright Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Asignatura: Programación de Aplicaciones Interactivas (PAI)
  * Curso: 3º Itinerario 1
  * Práctica 8 PAI - Poker. Programacion Orientada a Objetos
  * @author: Christian Torres Gonzalez alu0101137902@ull.edu.es
  * @description: En este archivo, implementaremos los correspondientes metodos
  * necesarios para trabajar con la clase figura. La clase implementada en esta seccion,
  * sera la clase padre del resto de clase que crearemos
  * @since 10/04/2020
  * @file Fichero de implementacion de la clase figura
  * @version 1.0.0
*/

'use strict'

class Figura {
  constructor(color) {
    this.color = color;
  }

  draw() {
    
  }
}

module.exports = {Figura};
},{}],2:[function(require,module,exports){
/**
  * @copyright Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Asignatura: Programación de Aplicaciones Interactivas (PAI)
  * Curso: 3º Itinerario 1
  * Práctica 8 PAI - Poker. Programacion Orientada a Objetos
  * @author: Christian Torres Gonzalez alu0101137902@ull.edu.es
  * @description: En este archivo, implementaremos los correspondientes metodos
  * necesarios para trabajar con la clase linea.
  * @since 10/04/2020
  * @file Fichero de implementacion de la clase linea
  * @version 1.0.0
*/

'use strict'

const figura = require("./figura");

class Line extends figura.Figura {
    constructor(color, x, y, sizeX, sizeY, grosor) {
        super(color);
        this.coordenadaX = x;
        this.coordenadaY = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.grosor = grosor;
    }

    draw(ctx, color) {
        ctx.strokeStyle = color;
        ctx.lineWidth = this.grosor;

        ctx.beginPath();
        ctx.moveTo(this.coordenadaX, this.coordenadaY);
        ctx.lineTo(this.sizeX, this.sizeY);
        ctx.stroke();
    }
}

module.exports = {Line: Line};
},{"./figura":1}],3:[function(require,module,exports){
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
    let origen_vertical = canvas.width / 8;
    let origen_horizontal = canvas.height / 8;
    for (let i = 0; i < 7; i++) {
        let linea_vertical = new line.Line("purple", (i + 1) * origen_vertical, 0, (i + 1) * origen_vertical, canvas.height, 2);
        linea_vertical.draw(ctx, "purple");
        let linea_horizontal = new line.Line("purple", 0, (i + 1) * origen_horizontal, canvas.width, (i + 1) * origen_horizontal, 2);
        linea_horizontal.draw(ctx, "purple");
    }
}

pintarCuadricula();
},{"./line":2}]},{},[3]);
