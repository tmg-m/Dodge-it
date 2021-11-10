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
    this._drawObsticle();
    this._drawPlayer();
    window.requestAnimationFrame(this._renderFrameGame.bind(this));
  }

  start() {
    window.requestAnimationFrame(this._renderFrameGame.bind(this));
  }
}
