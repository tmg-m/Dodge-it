function gameScreen() {
  let splashScreen = document.querySelector("#splash-screen");
  splashScreen.classList.add("hidden");

  let gameScreen = document.querySelector("#game-screen");
  gameScreen.classList.remove("hidden");
}

/*
function startGameScreen (){ 
    let gameScreen = document.querySelector("#game-screen");
    gameScreen.classList.add("hidden")

    let startGame = document.querySelector("#startgame-screen");
    startGame.classList.remove("hidden");
    
}
*/

function winGameScreen() {
  let gameScreen = document.querySelector("#game-screen");
  gameScreen.classList.add("hidden");

  let winScreen = document.querySelector("#win-screen");
  winScreen.classList.remove("hidden");
}

function gameOverScreen() {
  let gameScreen = document.querySelector("#board");
  gameScreen.classList.add("hidden");

  let gameOverScreen = document.querySelector("#gameover-screen");
  gameOverScreen.classList.remove("hidden");
}
