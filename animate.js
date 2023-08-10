const canvas = document.querySelector("#myc")
const debug = document.querySelector(".debug")
const getAnimate =document.querySelector("#set")
const c = canvas.getContext("2d");
let runAnimate;


const CANVAS_HEIGHT = 600
const CANVAS_WIDTH  = 600

canvas.width = CANVAS_WIDTH
canvas.height = CANVAS_HEIGHT

const playerImage = new Image()
playerImage.src = "player.png"


var x = 150
let tik = 0
let cx = 160 * 0;            //crop x
let cy = 523 * 0;       //crop y
let cw = 32 * 10;           //crop width
let ch = 32 * 10;           //crop height
let sf = 570;           //crop jarak antar frame
let lengthFrame = 5



function setAnimate(){
    
    console.log(u,l,r,d)
    
    if(d && !r && !l){
        cy = 0 * 1
        cx = 160 * 0
        lengthFrame = 4
        debug.innerHTML = "d"
    }else if(d && r){
        cy = 160 * 2
        cx = 160 * 0
        lengthFrame = 4
        debug.innerHTML = "dr"
    }else if(r && !u){
        cy = 160 * 4
        cx = 160 * 0
        lengthFrame = 4
    }else if(r && u){
        cy = 160 * 6
        cx = 160 * 0
        lengthFrame = 4
    }else if(u && !l){
        cy = 160 * 8
        cx = 160 * 0
        lengthFrame = 4
    }else if(u && l){
        cy = 160 * 10
        cx = 160 * 0
        lengthFrame = 4
    }else if(l && !d){
        cy = 160 * 12
        cx = 160 * 0
        lengthFrame = 4
    }else if(l && d){
        cy = 160 * 14
        cx = 160 * 0
        lengthFrame = 4
    }else if(ad && !ar && !al){
        cy = 0 * 1
        cx = 160 * 14
        lengthFrame = 4
        debug.innerHTML = "d"
    }else if(ad && ar){
        cy = 160 * 2
        cx = 160 * 14
        lengthFrame = 4
        debug.innerHTML = "dr"
    }else if(ar && !au){
        cy = 160 * 4
        cx = 160 * 14
        lengthFrame = 4
    }else if(ar && au){
        cy = 160 * 6
        cx = 160 * 14
        lengthFrame = 4
    }else if(au && !al){
        cy = 160 * 8
        cx = 160 * 14
        lengthFrame = 4
    }else if(au && al){
        cy = 160 * 10
        cx = 160 * 14
        lengthFrame = 4
    }else if(al && !ad){
        cy = 160 * 12
        cx = 160 * 14
        lengthFrame = 4
    }else if(al && ad){
        cy = 160 * 14
        cx = 160 * 14
        lengthFrame = 4
    }else{
        cy = 0
        cx = 0
        lengthFrame = 1
    }


}

function animate(){
    setAnimate()
    c.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    if(tik < lengthFrame){
        tik++
    }else{
        tik = 0
    }
    // debug.innerHTML = tik + "  " + cx

    c.drawImage(

        playerImage,
        //crop
         cx+ tik * cw, //post x
         cy, //post y
         cw, //width
         ch, //height

         //draw
         x, //x
         150, //y
         300, //wd
         300  //hei
        )

}

window.setInterval(animate,100)


let u,l,d,r,au,al,ad,ar = false;
addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    switch (key) {
      case "w":
        u = true;
        break;
      case "a":
        l = true;
        break;
      case "s":
        d = true;
        break;
      case "d":
        r = true;
        break;
      case "arrowup":
        au = true;
        break;
      case "arrowleft":
        al = true;
        break;
      case "arrowdown":
        ad = true;
        break;
      case "arrowright":
        ar = true;
        break;
    }
  });
addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase();
    switch (key) {
      case "w":
        u = false;
        break;
      case "a":
        l = false;
        break;
      case "s":
        d = false;
        break;
      case "d":
        r = false;
        break;
      case "arrowup":
        au = false;
        break;
      case "arrowleft":
        al = false;
        break;
      case "arrowdown":
        ad = false;
        break;
      case "arrowright":
        ar = false;
        break;
    }
  });