const bgm1 = new Audio();
const bgm2 = new Audio();
const bgmdessert = new Audio();
const bgmjungle = new Audio();
const bgmroad = new Audio();
const bgmloby = new Audio();
const picksfx = new Audio();
const deathsfx = new Audio();
const failsfx = new Audio();
const firesfx = new Audio();
const hitsfx = new Audio();
const winsfx = new Audio();
bgm1.src = "../../assets/bgm/bgm1.mp3";
bgm2.src = "../../assets/bgm/bgm2.wav";
bgmdessert.src = "../../assets/bgm/bgmdessert.mp3";
bgmjungle.src = "../../assets/bgm/bgmjungle.mp3";
bgmroad.src = "../../assets/bgm/bgmloby.mp3";
bgmloby.src = "../../assets/bgm/bgmroad.mp3";
picksfx.rc = "../../assets/sfx/coinpick.wav";
deathsfx.src = "../../assets/sfx/enemydeath.wav";
failsfx.src = "../../assets/sfx/fail.mp3";
firesfx.src = "../../assets/sfx/fire.mp3";
hitsfx.src = "../../assets/sfx/hit.wav";
winsfx.src = "../../assets/sfx/win.mp3";
// window.onload = function () {
//   startmusic();
// };
// function startmusic() {
//   if (document.title == "Game") {
//     bgmloby.play();
//   } else if (document.title == "War") {
//     bgmloby.pause()
//     if (levelIndex >= 1 && levelIndex <= 10) {
//       bgmdessert.play();
//     }else if(levelIndex >= 11 &&levelIndex <= 20){
//         bgmjungle.play();
//     }
//   }
// }
