class Player {
  constructor(posX = 0, posY = 0, direction = "N") {
    this.posX = posX;
    this.posY = posY;
    this.width = 100;
    this.height = 100;
    this.direction = direction;
  }

  up() {
    switch (this.direction) {
      case "N":
        this.posY -= 100;
        if (this.posY < 0) {
          this.posY = 0;
        }
        break;
      default:
        break;
    }
  }

  down() {
    switch (this.direction) {
      case "N":
        this.posY += 100;
        if (this.posY > 800) {
          this.posY = 800;
        }
        break;
      default:
        break;
    }
  }

  left() {
    switch (this.direction) {
      case "N":
        this.posX -= 100;
        if (this.posX < 100) {
          this.posX = 100;
        }
        break;
      default:
        break;
    }
  }

  right() {
    switch (this.direction) {
      case "N":
        this.posX += 100;
        if (this.posX > 300) {
          this.posX = 300;
        }
        break;
        as;
      default:
        break;
    }
  }
}
