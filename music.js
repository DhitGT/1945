
const bgmdessert = new Audio();
const bgmjungle = new Audio();
const bgmroad = new Audio();
const bgmtrain = new Audio();
const bgmend = new Audio();
const bgmloby = new Audio();
const picksfx = new Audio();
const deathsfx = new Audio();
const failsfx = new Audio();
const firesfx = new Audio();
const hitsfx = new Audio();
const phitsfx = new Audio();
const winsfx = new Audio();
bgmdessert.src = "../assets/bgm/flobamora.mp3";
bgmjungle.src = "../assets/bgm/apuse.mp3";
bgmroad.src = "../assets/bgm/yamko.mp3";
bgmtrain.src = "../assets/bgm/kincir.mp3";
bgmend.src = "../assets/bgm/lathi.mp3";
bgmloby.src = "../assets/bgm/indonesiapusaka.mp3";
picksfx.src = "../assets/sfx/coinpick.wav";
deathsfx.src = "../assets/sfx/enemydeath.wav";
failsfx.src = "../assets/sfx/fail.mp3";
firesfx.src = "../assets/sfx/fire (2).mp3";
hitsfx.src = "../assets/sfx/hit.wav";
phitsfx.src = "../assets/sfx/hit.wav";
winsfx.src = "../assets/sfx/win.mp3";

window.onload = function () {
  startmusic();
};
bgmloby.onload=()=>{
  startmusic();
}
function startmusic() {
  if (document.title == "Game" || document.title == "Shop") {

    // bgmloby.play();
  } else if (document.title == "War") {
    // bgmloby.pause();
    if (levelIndex >= 1 && levelIndex <= 10) {
      // bgmdessert.play();
    } else if (levelIndex >= 11 && levelIndex <= 20) {
      // bgmjungle.play();
    } else if (levelIndex >= 21 && levelIndex <= 30) {
      // bgmroad.play();
    } else if (levelIndex >= 31 && levelIndex <= 40) {
      // bgmtrain.play();
    } else if (levelIndex >= 41 && levelIndex <= 45) {
        // bgmend.play();
    }
  }
}
