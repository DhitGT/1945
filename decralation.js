const bgImg = new Image();  

const msg = document.getElementById("message");
const msgMag = document.getElementById("magazine");
const msgHp = document.getElementById("playerhp");
const msgLvl = document.getElementById("msglevel");
const msgTarget = document.getElementById("msgtargetkills");
const restartBtn = document.getElementById("restartbtn")
let canvasMsgTxt = ''
bgImg.src = "bg.png";
let bullets = [];
let enemys = [];
let coins = [];


function drawImage(img) {
  c.drawImage(img, 0, 0, CW, CH);
}

const player = new Player(300, 300, 30, 30, 5, "cyan");

function isCollide(rectA, rectB) {
  return (
    rectA.x < rectB.x + rectB.sz &&
    rectA.x + rectA.sz > rectB.x &&
    rectA.y < rectB.y + rectB.sz &&
    rectA.y + rectA.sz > rectB.y
  );
}

function objDestroy(arr) {
  arr.forEach((e) => {
    if (e.x < 0 || e.x > canvas.width || e.y < 0 || e.y > canvas.height) {
      arr.splice(e, 1);
    }
  });
}
function enemyDestroy(arr) {
  arr.forEach((e) => {
    if (e.x < 0 || e.x > canvas.width || e.y < 0 || e.y > canvas.height) {
      arr.splice(e, 1);
      if(player.hp >= 1){

        player.hp--
      }
    }
  });
}

function playerShoot() {
  if (!player.colldown && player.mag >= 1) {
  if (player.ad || player.au || player.ar || player.al) {
      player.mag--
      player.fcolldown();
      if(player.mag < player.magMax-1){
        bullets.push(
        new Bullet(player.x + player.w/2, player.y + player.h/2, 4, 8, [
          player.au,
          player.ad,
          player.al,
          player.ar,
        ],player)
        );
      }
    }
  }
}

function objDraw(arr) {
  arr.forEach((e) => {
    e.draw(c);
  });
}
function objUpdate(arr) {
  arr.forEach((e) => {
    e.update();
  });
}



function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function enemySpawner() {
  enemys.push(new Enemy(800, randInt(50, 350), 30, 4, "red"));
}

function canvasMsg(c) {
  c.font = "24px Arial";
  c.fillStyle = "black"; 
  c.textAlign = "center"; 
  c.textBaseline = "middle"; 
  const x = canvas.width / 2; 
  const y = canvas.height / 9; 
  c.fillText(canvasMsgTxt, x, y);
}


