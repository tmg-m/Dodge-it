window.addEventListener("load", () => {
  function startGame() {
    let gameScreen = document.querySelector("#game-screen");
    gameScreen.classList.add("hidden");

    let startGame = document.querySelector("#startgame-screen");
    startGame.classList.remove("hidden");

    const canvas = document.querySelector("#board");
    const ctx = canvas.getContext("2d");

    let demoGame = new Game({
      ctx: ctx,
      player: new Player(200, 750, "N"),
      obsticle: new Obsticle(200, 0, "N"),
    });

    demoGame.start();
  }

  function restartGame() {
    let splashScreen = document.querySelector("#gameover-screen");
    splashScreen.classList.add("hidden");

    let startGame = document.querySelector("#startgame-screen");
    startGame.classList.remove("hidden");

    const canvas = document.querySelector("#board");
    const ctx = canvas.getContext("2d");

    let demoGame = new Game({
      ctx: ctx,
      player: new Player(200, 750, "N"),
      obsticle: new Obsticle(200, 0, "N"),
    });

    demoGame.start();
  }

  let startBtn = document.querySelector("#start-btn");
  startBtn.addEventListener("click", startGame);

  let replayBtn = document.querySelector("#replay");
  replayBtn.addEventListener("click", restartGame);

  let menuBtn = document.querySelector("#menuFloor");
  menuBtn.addEventListener("click", gameScreen);

  let howToBtn = document.querySelector("#howto-btn");
  howToBtn.addEventListener("click", keyMapScreen);

  let removeHowToBtn = document.querySelector(".close")
  removeHowToBtn.addEventListener("click", removeKeyMapScreen);

  let about = document.querySelector(".about-btn");
  about.addEventListener("click", aboutScreen)

  let removeAbout = document.querySelector(".go-back");
  removeAbout.addEventListener("click", removeAboutScreen);

});
