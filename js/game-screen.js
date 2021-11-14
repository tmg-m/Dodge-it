function gameScreen() {
  let splashScreen = document.querySelector("#gameover-screen");
  splashScreen.classList.add("hidden");

  let gameScreen = document.querySelector("#game-screen");
  gameScreen.classList.remove("hidden");
}


function gameOverScreen() {
  let gameScreen = document.querySelector("#startgame-screen");
  gameScreen.classList.add("hidden");

  let gameOverScreen = document.querySelector("#gameover-screen");
  gameOverScreen.classList.remove("hidden");
}

/// key instruction button ON/OFF !!!
function keyMapScreen(){
  let gameScreen = document.querySelector("#game-screen");
  gameScreen.classList.add("hidden");

  let keyMap = document.querySelector("#keyMapScreen");
  keyMap.classList.remove("hidden");
}

function removeKeyMapScreen (){
  let keyMap = document.querySelector("#keyMapScreen");
  keyMap.classList.add("hidden");

  let gameScreen = document.querySelector("#game-screen");
  gameScreen.classList.remove("hidden");
}

/// about ON/OFF !!!

function aboutScreen() {
  let gameScreen = document.querySelector("#game-screen");
  gameScreen.classList.add("hidden");

  let about = document.querySelector("#aboutScreen");
  about.classList.remove("hidden");
}

function removeAboutScreen() {
  let about = document.querySelector("#aboutScreen");
  about.classList.add("hidden");

  let gameScreen = document.querySelector("#game-screen");
  gameScreen.classList.remove("hidden");
}

/// gameover back btn !!!

function goBackToMenu(){
  let gameOverScreen = document.querySelector("#gameover-screen");
  gameOverScreen.classList.add("hidden");

  let gameScreen = document.querySelector("#game-screen");
  gameScreen.classList.remove("hidden");
}
