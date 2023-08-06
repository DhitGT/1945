const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const CW = 800;
const CH = 400;
canvas.width = CW;
canvas.height = CH;
let pause = false;
let gameover = false;
let gloop;
let spawner;

start();
document.getElementById("startbtn").addEventListener("click", () => {
  pause = !pause;
  if (pause) {
    document.getElementById("startbtn").innerHTML = "PAUSED";
  } else {
    document.getElementById("startbtn").innerHTML = "PLAYING";
  }
  start();
});
document.getElementById("restartbtn").addEventListener("click", () => {
  if (gameover) {
    gameover = false;
    pause = false;
    player.hp = playerStats.hp;
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
  msgTarget.innerHTML = "Kill Goals : " + player.targetKill +" / "+ player.kill 
  player.movement();
  player.update();
  if (!player.isReload) {
    playerShoot();
  }
  objDestroy(bullets);
  objUpdate(bullets);
  console.log(enemys);
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
}

function gameloop() {
  update();
  draw();
}

function start() {
  if (!pause || !gameover) {
    gloop = setInterval(gameloop, 1000 / 30);
    spawner = setInterval(enemySpawner, GameLevel.EnemySpawnRate);
  } else {
    clearInterval(gloop);
    clearInterval(spawner);
  }
}
