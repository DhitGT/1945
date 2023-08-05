const bgImg = new Image()
const canvasRect = canvas.getBoundingClientRect();
const msg = document.getElementById("message")
let playerAngle
bgImg.src = 'bg.png'
const bullets = []
const enemys = []

function drawImage(img){
    c.drawImage(img, 0, 0, CW, CH);
}

const player = new Player(300,300,30,30,5,"green")



function calculateAngle(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
  }
  
  canvas.addEventListener("click", function(event) {
    let rectX = player.x
    let rectY = player.y
    let rectHeight = player.h
    let rectWidth = player.w
    const centerX = rectX + rectWidth / 2;
    const centerY = rectY + rectHeight / 2;

    const mouseX = event.clientX - canvasRect.left; // Adjust offsetX based on canvas position
    const mouseY = event.clientY - canvasRect.top; // Adjust offsetY based on canvas position
    const angle = calculateAngle(rectX, rectY, mouseX, mouseY);
    const bullet = new Bullet(player.x,player.y,5,15,angle)
    bullets.push(bullet);
  });

canvas.addEventListener("mousemove", function(event) {
    let rectX = player.x
    let rectY = player.y
    let rectHeight = player.h
    let rectWidth = player.w
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;
    const centerX = rectX + rectWidth / 2;
    const centerY = rectY + rectHeight / 2;

    playerAngle = calculateAngle(centerX, centerY, mouseX, mouseY);
  });

  function isCollide(rectA, rectB) {
    return (
      rectA.x < rectB.x + rectB.sz &&
      rectA.x + rectA.sz > rectB.x &&
      rectA.y < rectB.y + rectB.sz &&
      rectA.y + rectA.sz > rectB.y
    );
  }


  function objDestroy(arr){
    arr.forEach(e =>{
        if (
            e.x < 0 || e.x > canvas.width ||
            e.y < 0 || e.y > canvas.height
          ) {
            arr.splice(e, 1);
          }
    })
  }

  function objDraw(arr){
    arr.forEach(e => {
        e.draw(c)
    });
  }
  function objUpdate(arr){
    arr.forEach(e => {
        e.update()
    });
  }

  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

  function enemySpawner(){
    enemys.push(new Enemy(800,randInt(50,350),30,4,"red"))
  }