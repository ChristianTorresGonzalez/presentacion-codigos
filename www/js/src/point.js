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

const figura = require("./figura");

class Point extends figura.Figura {
    constructor(color, x, y, size) {
        super(color);
        this.coordenadaX = x;
        this.coordenadaY = y;
        this.size = size;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.arc(this.coordenadaX, this.coordenadaY, this.size, Math.PI * 2, true);
        ctx.fill();
    }
}

module.exports = {Point: Point};