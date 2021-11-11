class Obsticle {
  constructor(posX, posY, direction = "N") {
    this.posX = posX;
    this.posY = posY;
    this.width = 100;
    this.height = 100;
    this.direction = direction;
  }

  _movementAnimation(count) {
    setInterval(() => {
      this.posY += count;
    }, 10);
    return count
  }

  
}
