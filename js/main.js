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
      player: new Player(200, 800, "N"),
      obsticle: new Obsticle(200, 0, "N"),
    });

    demoGame.start();
  }
  
  let startBtn = document.querySelector("#start-btn");
  startBtn.addEventListener("click", startGame);

});
