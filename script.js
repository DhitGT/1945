let pause = false;
let win = false;
let gameover = false;
let gloop;
let spawner;

AplyAllCoockies(ShopBtn);
if (document.title == "game") {
  startingGame();
}
start();

document.getElementById("startbtn").addEventListener("click", () => {
  window.location.href = "index.html";
});

restartBtn.addEventListener("click", () => {
  if (gameover) {
    bullets = [];
    enemys = [];
    pause = false;
    gameover = false;
    player.hp = playerStats.hp;
    player.refresh();
    start();
  }
  if (win) {
    pause = false;
    win = false;
    bullets = [];
    enemys = [];
    if (levelIndex < 45) {
      levelIndex++;
      setCookie("levelunlocked", btoa(levelIndex), 99);
      bgImg.src = worldSetting[levelIndex].worldMap[1];
      overbgImg.src = worldSetting[levelIndex].worldMap[2];
    }
    setCookie("levelselected", btoa(levelIndex), 1);
    GameLevel = worldSetting[levelIndex];
    player.refresh();
    restartBtn.innerHTML = " ";
    start();
  }
});
if (typeof document.hidden !== "undefined") {
  document.addEventListener("visibilitychange", handleVisibilityChange);
}

function handleVisibilityChange() {
  if (document.hidden) {
    pause = true;
    start();
    window.location.href = "index.html";
  } else {
    pause = false;
    start();
  }
}

function update() {
  if(levelIndex < 10){
    msgLvl.innerHTML = "years 190"+levelIndex;
  }else{
    msgLvl.innerHTML = "years 19"+levelIndex;
  }
  msgTarget.innerHTML =
    "Kill Goals : " + player.targetKill + " / " + player.kill;
  player.movement();
  player.update();
  if (!player.isReload) {
    playerShoot();
  }
  objDestroy(bullets);
  enemys.forEach((e) => {
    objDestroy(e.enemybullets);

    objUpdate(e.enemybullets);
    if (!e.isReload) {
      enemyShoot();
    }
    e.move();
  });
  objUpdate(bullets);
  enemyDestroy(enemys);
  objUpdate(enemys);
}

function draw() {
  c.clearRect(0, 0, CW, CH);
  drawImage(bgImg);
  objDraw(bullets);
  enemys.forEach((e) => {
    objDraw(e.enemybullets);
  });
  objDraw(coins);
  animate();
  // enemys.forEach(e=>{
  //   e.drawLight(c)
  // })
  // coins.forEach(e=>{
  //   e.drawLight(c)
  // })
  // bullets.forEach(e=>{
  //   e.drawLight(c)
  // })
  drawImage(overbgImg);
  if (gameover || win) {
    c.fillStyle = "#000000a6";
    c.fillRect(0, 0, CW, CH);
  }

  canvasMsg(c);
  canvasSubMsg(c);
}

function gameloop() {
  update();
  draw();
}

function start() {
  if(levelIndex == 45){
      window.location.href = "ending.html"
  }
  let thislevel = atob(getCookie("levelselected"));
  levelIndex = thislevel;
  GameLevel = worldSetting[levelIndex];
  console.log("level" + levelIndex, thislevel);
  player.refresh();
  if (!pause) {
    console.log(levelIndex);
    gloop = setInterval(gameloop, 1000 / 30);

    if (!worldSetting[levelIndex].isBossLevel ) {
      spawner = setInterval(enemySpawner, GameLevel.EnemySpawnRate);
    } else {
      if(!worldSetting[levelIndex].isTroops){
        clearInterval(spawner);
      }else{
        spawner = setInterval(enemySpawner, GameLevel.EnemySpawnRate);
      }
      enemys.push(new Enemy(800, 200, 100, 2, "red"));
    }
  } else {
    clearInterval(gloop);
    clearInterval(spawner);
  }
  GameLevel = worldSetting[levelIndex];
  bgImg.src = worldSetting[levelIndex].worldMap[1];
  overbgImg.src = worldSetting[levelIndex].worldMap[2];
}

const playerimg = new Image();
const enemyimg = new Image();
playerimg.src = "../1945/assets/img/player.png";
enemyimg.src = "../1945/assets/img/enemy.png";

function enemyAnimate() {
  enemys.forEach((e) => {
    if (e.tik < 5) {
      e.tik2 += 1;
      if (e.tik2 == 2) {
        e.tik2 = 0;
        e.tik++;
      }
    } else {
      e.tik = 0;
      e.tik2 = 0;
    }

    c.drawImage(
      enemyimg,
      //crop
      0 + player.tik * 320, //post x
      160 * 12, //post y
      320, //width
      320, //height

      //draw
      e.x - e.s / 2, //x
      e.y - e.s / 2, //y
      e.s * 2, //wd
      e.s * 2 //hei
    );
  });
}

function animate() {
  if (enemys.length != 0) {
    enemyAnimate();
  }
  player.setAnimate();
  if (player.tik <= player.lengthFrame) {
    player.tik2 += 1;
    if (player.tik2 == 2) {
      player.tik2 = 0;
      player.tik++;
    }
  } else {
    player.tik = 0;
    player.tik2 = 0;
  }
  // debug.innerHTML = tik + "  " + player.cx

  c.drawImage(
    playerimg,
    //crop
    player.cx + player.tik * player.cw, //post x
    player.cy, //post y
    player.cw, //width
    player.ch, //height

    //draw
    player.x - 19, //x
    player.y - 19, //y
    70, //wd
    70 //hei
  );
}
