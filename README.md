# DODGE IT !

Ironhack-project-M1

## Description

This project is a creation of a videogame designed with HTML, CSS and JS. A simple game where you control a rectangle avoiding obsticle of triangles(at the moment). The core concept of this game is having fun while checking your reflex time also reaction time.

## MVP

- Class: Game , Player, Obsticles.
- Get high score


## Backlog / nice to have

- Classes & methods defined

## Data structure

class Player {
    this.posX = posX;
    this.posY = posY;
    this.width = 100;
    this.height = 100;
    this.direction = direction;
  }

class Obsticle {
    this.posX = posX;
    this.posY = posY;
    this.width = 100;
    this.height = 100;
    this.direction = direction;
  }

class Game {
    this.ctx = content.ctx;
    this.player = content.player;
    this.obsticle = content.obsticle;
    this.score = 0;
  }

## States & States Transitions

- splashScreen
- gameScreen
- gameoverScreen 
- controlsScreen
- aboutScreen

## Links
Demo : https://tmg-m.github.io/dodge-it/
