class Game {
  constructor(content) {
    this.ctx = content.ctx;
    this.player = content.player;
    this.obsticle = content.obsticle;
    this.array = [];
  }

  _drawPlayer() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(
      this.player.posX,
      this.player.posY,
      this.player.width,
      this.player.height
    );
  }

  _checkCollision() {
    if (
      this.player.posX < this.obsticle.posX + this.obsticle.width &&
      this.player.posX + this.player.width > this.obsticle.posX &&
      this.player.posY < this.obsticle.posY + this.obsticle.height &&
      this.player.height + this.player.posY > this.obsticle.posY
    ) {
      return true;
    } else {
      return false;
    }
  }

  _updateFps() {
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(0, 0, 500, 900);
  }

  _drawObsticle() {
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(
      this.obsticle.posX,
      this.obsticle.posY,
      this.obsticle.width,
      this.obsticle.height
    );
  }

  _renderFrameGame() {
    if (this._checkCollision() === true) {
      gameOverScreen();
    }
    this._updateFps();
    this._checkCollision();
    this._drawObsticle();
    this._drawPlayer();
    window.requestAnimationFrame(this._renderFrameGame.bind(this));
  }

  controller() {
    document.addEventListener("keydown", (event) => {
      // console.log(event);
      switch (event.code) {
        case "ArrowLeft":
          this.player.left();
          break;
        case "ArrowRight":
          this.player.right();
          break;
        case "ArrowUp":
          this.player.up();
          break;
        case "ArrowDown":
          this.player.down();
        default:
          break;
      }
    });
  }

  start() {
    this.obsticle._movementAnimation();
    this.controller();
    window.requestAnimationFrame(this._renderFrameGame.bind(this));
  }
}
