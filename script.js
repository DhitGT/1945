const canvas = document.getElementById("canvas")
const c = canvas.getContext('2d')
const CW = 800
const CH = 400
canvas.width = CW
canvas.height = CH
pause = false
let gloop
let spawner
start()
document.getElementById("startbtn").addEventListener('click',()=>{
    pause = !pause
    if(pause){
        document.getElementById("startbtn").innerHTML = "PAUSED"
    }else{
        document.getElementById("startbtn").innerHTML = "PLAYING"
    }
    start()
})
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


function update(){
    player.movement()
    player.update()
    objDestroy(bullets)
    objDestroy(enemys)
    objUpdate(enemys)
}

function draw(){
    c.clearRect(0,0,CH,CW)
    drawImage(bgImg)
    player.draw(c,playerAngle)
    objDraw(bullets)
    objDraw(enemys)
}

function gameloop(){
    update()
    draw()
}

function start(){
    if(!pause){
        gloop = setInterval(gameloop,1000/30)
        spawner = setInterval(enemySpawner,3000)
    }else{
        clearInterval(gloop)
        clearInterval(spawner)
    }
}


