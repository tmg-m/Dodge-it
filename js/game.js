class Game {
  constructor(content) {
    this.ctx = content.ctx;
    this.player = content.player;
    this.obsticle = content.obsticle;
    this.score = 0;
  }

  _drawPlayer() {
    this.ctx.drawImage(
      playerSprite.sprite,
      playerSprite.posX,
      playerSprite.posY,
      playerSprite.width,
      playerSprite.height,

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
    this.ctx.drawImage(
      canvasSprite.sprite,
      canvasSprite.posX,
      canvasSprite.posY,
      canvasSprite.width,
      canvasSprite.height,
    )
  }

  _drawObsticle() {
    this.ctx.drawImage(
      obsticleSprite.sprite,
      obsticleSprite.posX,
      obsticleSprite.posY,
      obsticleSprite.width,
      obsticleSprite.height,

      this.obsticle.posX,
      this.obsticle.posY,
      this.obsticle.width,
      this.obsticle.height
    );
  }

  _getrandomNum() {
    return Math.floor(Math.random() * (4 - 1) + 1) * 100;
  }

  _generateNewObsticle() {
    this.obsticle.posX = this._getrandomNum();
    if (this.score === 10) {
      this.obsticle._movementAnimation(1.5);
      this.obsticle._movementAnimation(0.3);
    } else if(this.score === 20) {
      this.obsticle._movementAnimation(2.5)
      this.obsticle._movementAnimation(0.3);
    } else if(this.score === 30){
      this.obsticle._movementAnimation(3.5)
      this.obsticle._movementAnimation(0.3);
    } else if(this.score === 40){
      this.obsticle._movementAnimation(4);
      this.obsticle._movementAnimation(0.3);
    } else if(this.score === 50){
      this.obsticle._movementAnimation(4.5);
    } else if(this.score === 60){
      this.obsticle._movementAnimation(5);
    }

  }

  _clearInterval() {
    let myInterval = this.obsticle._movementAnimation();
    clearInterval(myInterval);
  }

  _renderFrameGame() {
    if (this._checkCollision() === true) {
      gameOverScreen();
      this._clearInterval();
    }
    if (this.obsticle.posY > 900) {
      this.obsticle.posY = 0;
      console.log("looped");
      this.score += 1;
      console.log(this.score);

      let score = document.querySelector("#score");
      score.innerHTML= this.score;

      let compliment = document.querySelector(".compliment")
      if(this.score < 10){
        compliment.innerHTML = " no comment, seriously ?? - .. - ";
      } else if (this.score <= 20){
        compliment.innerHTML = " Try again!! 0..o";
      } else if ( this.score <= 30){
        compliment.innerHTML = " Nice !";
      } else if ( this.score <= 40){
        compliment.innerHTML = "You are good!";
      } else if (this.score <= 50){
        compliment.innerHTML = "Amazing!";
      } else if (this.score <= 60){
        compliment.innerHTML = "omg! Just go Super Saiyan!";
      } else if ( this.score > 60){
        compliment.innerHTML = "God level!";
      }
      this._generateNewObsticle();
    }
    this._updateFps();
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
        /* case "ArrowUp":
          this.player.up();
          break;
        case "ArrowDown":
          this.player.down();
        default:
          break; */
      }
    });
  }

  start() {
    console.log("started");
    this.obsticle._movementAnimation(5);
    this.controller();
    window.requestAnimationFrame(this._renderFrameGame.bind(this));
  }
}
