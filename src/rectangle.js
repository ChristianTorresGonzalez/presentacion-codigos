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

class Rectangle extends figura.Figura {
  constructor(color, point1X, point1Y, point2X, point2Y, point3X, point3Y, point4X, point4Y) {
    super(color);
    this.coordenada1X = point1X;
    this.coordenada1Y = point1Y;
    this.coordenada2X = point2X;
    this.coordenada2Y = point2Y;
    this.coordenada3X = point3X;
    this.coordenada3Y = point3Y;
    this.coordenada4X = point4X;
    this.coordenada4Y = point4Y;
  }

  draw() {
    ctx.strokeStyle = this.color;

    ctx.beginPath();
    ctx.moveTo(this.coordenada1X, this.coordenada1Y);
    ctx.lineTo(this.coordenada2X, this.coordenada2Y);
    ctx.lineTo(this.coordenada3X, this.coordenada3Y);
    ctx.lineTo(this.coordenada4X, this.coordenada4Y);
    ctx.stroke();
  }
}

module.exports = {Rectangle: Rectangle};