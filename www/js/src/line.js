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