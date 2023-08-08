
let pause = false;
let win = false;
let gameover = false;
let gloop;
let spawner;

AplyAllCoockies(ShopBtn)
console.log("apaan in ",ShopBtn);
if(document.title == "game"){
  startingGame()
}
start();

document.getElementById("startbtn").addEventListener("click", () => {
  document.location.href = "index.html"
});

restartBtn.addEventListener("click", () => {
  if (gameover) {
      bullets = []
      enemys = []
    pause = false;
    gameover = false;
    player.hp = playerStats.hp;
    player.refresh();
    start();
  }
  if (win) {
    pause = false;
    win = false;
    bullets = []
    enemys = []
    if(levelIndex  <= 5 ){
        levelIndex++;
    }
    setCookie('levelselected',levelIndex,1)
    GameLevel = worldSetting[levelIndex];
    player.refresh();
    restartBtn.innerHTML = " "
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
  c.clearRect(0, 0, CH, CW);
  drawImage(bgImg);
  canvasMsg(c);
  player.draw(c);
  objDraw(bullets);
  objDraw(enemys);
  objDraw(coins);
}

function gameloop() {
  update();
  draw();
}

function start() {

    let thislevel = getCookie('levelselected')
    levelIndex = thislevel
    GameLevel = worldSetting[levelIndex]
    console.log("level" + levelIndex,thislevel)
    player.refresh()
    console.log(levelIndex);
  if (!pause) {
    console.log(levelIndex);
    gloop = setInterval(gameloop, 1000 / 30);
    spawner = setInterval(enemySpawner, GameLevel.EnemySpawnRate);
  } else {
    clearInterval(gloop);
    clearInterval(spawner);
  }
}
