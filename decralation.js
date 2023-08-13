const bgImg = new Image();
const overbgImg = new Image();
const playeranimimg = new Image();
playeranimimg.src = "../assets/img/player.png";

const msg = document.getElementById("message");
const msgMag = document.getElementById("magazine");
const msgHp = document.getElementById("playerhp");
const msgLvl = document.getElementById("msglevel");
const msgTarget = document.getElementById("msgtargetkills");
const restartBtn = document.getElementById("restartbtn");
let canvasMsgTxt = "";
let canvasSubMsgTxt = "";
bgImg.src = worldSetting[levelIndex].worldMap[1];
overbgImg.src = worldSetting[levelIndex].worldMap[2];
let bullets = [];

let enemys = [];
let coins = [];

function drawImage(img) {
  c.drawImage(img, 0, 0, CW, CH);
}

const player = new Player(300, 300, 30, 30, 5, "cyan", playeranimimg);

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
      if (worldSetting[levelIndex].isBossLevel) {
        player.hp = 0;
      }
      if (player.hp >= 1) {
        player.hp--;
      }
    }
  });
}

function enemyShoot() {
  if (GameLevel.enemyWp.isWp) {
    enemys.forEach((e) => {
      if(e.mag == 0){
        e.reload()
      }
      console.log("reload",e.isReload);
      if (!e.colldown && e.mag >= 1 && !e.isReload) {
        e.fcolldown();
        e.mag--;
        if (e.mag < e.magMax-1) {
          firesfx.play()
          e.enemybullets.push(
            new Bullet(
              e.x + e.s / 2,
              e.y + e.s / 2,
              4,
              GameLevel.enemyWp.bulletSpeed,
              [false, false, true, false],
              e,
              "red",
              "enemy"
            )
          );
          firesfx.currentTime = 0
        }
      } else {
        // e.reload();
      }
    });
  }
}

function playerShoot() {

  if (!player.colldown && player.mag >= 1) {
    if (player.ad || player.au || player.ar || player.al) {
      player.mag--;
      player.fcolldown();
      if (player.mag < player.magMax - 1) {
        firesfx.play()
        bullets.push(
          new Bullet(
            player.x + player.w / 2,
            player.y + player.h / 2,
            4,
            8,
            [player.au, player.ad, player.al, player.ar],
            player,
            "orange",
            "player"
          )
        );
        firesfx.currentTime = 0
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

function destroyEnemy(remove) {
  const updatedArr = enemys.filter((e) => e !== remove);
  enemys = updatedArr;
}
function destroyCoins(remove) {
  const updatedArr = coins.filter((e) => e !== remove);
  coins = updatedArr;
}

function enemySpawner() {
  if (!worldSetting[levelIndex].isBossLevel || worldSetting[levelIndex].isTroops) {
    if (GameLevel.spawnerValue == 1) {
      if(GameLevel.isTroops){
        enemys.push(
          new Enemy(800, randInt(70, 300), GameLevel.enemySize/2, 4, "red")
        )
      }else{
        enemys.push(
          new Enemy(800, randInt(70, 300), GameLevel.enemySize, 4, "red")
        )

      }
    } else if (GameLevel.spawnerValue == 2) {
      enemys.push(
        new Enemy(800, randInt(70, 300), GameLevel.enemySize, 4, "red")
      );
      setTimeout(() => {
        enemys.push(
          new Enemy(800, randInt(70, 300), GameLevel.enemySize, 4, "red")
        );
      }, 200);
    }
  } else {
    enemys = [];
  }
}

function canvasMsg(c) {
  c.font = "24px Arial";
  c.fillStyle = "white";
  c.textAlign = "center";
  c.textBaseline = "middle";
  const x = canvas.width / 2;
  const y = canvas.height / 9;
  c.fillText(canvasMsgTxt, x, y);
}
function canvasSubMsg(c) {
  c.font = "16px Arial";
  c.fillStyle = "white";
  c.textAlign = "center";
  c.textBaseline = "middle";
  const x = canvas.width / 2;
  const y = canvas.height / 5;
  c.fillText(canvasSubMsgTxt, x, y);
}
