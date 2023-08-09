let pause = false;
let win = false;
let gameover = false;
let gloop;
let spawner;

AplyAllCoockies(ShopBtn);
console.log("apaan in ", ShopBtn);
if (document.title == "game") {
  startingGame();
}
start();

document.getElementById("startbtn").addEventListener("click", () => {
  document.location.href = "index.html";
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
    if (levelIndex < 5) {
      levelIndex++;
      setCookie("levelunlocked", btoa(levelIndex), 99);
      bgImg.src = worldSetting[levelIndex].worldMap;
    }
    setCookie("levelselected", levelIndex, 1);
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
  } else {
    pause = false;
    start();
  }
}

function update() {
  msgLvl.innerHTML = GameLevel.name;
  msgTarget.innerHTML =
    "Kill Goals : " + player.targetKill + " / " + player.kill;
  player.movement();
  player.update();
  if (!player.isReload) {
    playerShoot();
  }
  objDestroy(bullets);
  objUpdate(bullets);
  enemyDestroy(enemys);
  objUpdate(enemys);
}

function draw() {
  c.clearRect(0, 0, CW, CH);
  drawImage(bgImg);
  player.draw(c);
  objDraw(bullets);
  objDraw(enemys);
  objDraw(coins);
  if (gameover || win) {
    c.fillStyle = "#000000a6";
    c.fillRect(0, 0, CW, CH);
  }
  canvasMsg(c);
}

function gameloop() {
  update();
  draw();
}

function start() {
  let thislevel = getCookie("levelselected");
  levelIndex = thislevel;
  GameLevel = worldSetting[levelIndex];
  console.log("level" + levelIndex, thislevel);
  player.refresh();
  console.log(levelIndex);
  if (!pause) {
    console.log(levelIndex);
    gloop = setInterval(gameloop, 1000 / 30);
    if (!worldSetting[levelIndex].isBossLevel) {
      spawner = setInterval(enemySpawner, GameLevel.EnemySpawnRate);
    } else {
      clearInterval(spawner);
      enemys.push(new Enemy(800, 200, 100, 2, "red"));
    }
  } else {
    clearInterval(gloop);
    clearInterval(spawner);
  }
}
