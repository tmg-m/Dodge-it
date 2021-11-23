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
    let gameOverScreen = document.querySelector("#gameover-screen");
    gameOverScreen.classList.add("hidden");

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

  //  startBtn from initial screen
  let startBtn = document.querySelector("#start-btn");
  startBtn.addEventListener("click", startGame);

  // replayBtn from gameover screen
  let replayBtn = document.querySelector("#replay");
  replayBtn.addEventListener("click", restartGame);

  // menuBtn from gameover screen
  let menuBtn = document.querySelector("#menuFloor");
  menuBtn.addEventListener("click", gameScreen);

  // howtoBtn/controls from initial screen
  let howToBtn = document.querySelector("#howto-btn");
  howToBtn.addEventListener("click", keyMapScreen);

  // back to main menu from howto/controls screen
  let removeHowToBtn = document.querySelector(".close")
  removeHowToBtn.addEventListener("click", removeKeyMapScreen);

  // credits/about game btn form initial screen
  let about = document.querySelector(".about-btn");
  about.addEventListener("click", aboutScreen)

  // back to initial screen from credits/about game
  let removeAbout = document.querySelector(".go-back");
  removeAbout.addEventListener("click", removeAboutScreen);

});
