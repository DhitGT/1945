class Player {
  constructor(x, y, w, h, speed, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sz = w;
    this.color = color;
    this.speed = speed;
    this.u = false;
    this.d = false;
    this.r = false;
    this.l = false;
    this.fire = false;
    addEventListener("keydown", (event) => {
      const key = event.key.toLowerCase();
      switch (key) {
        case "w":
          this.u = true;
          break;
        case "a":
          this.l = true;
          break;
        case "s":
          this.d = true;
          break;
        case "d":
          this.r = true;
          break;
      }
    });
    addEventListener("keyup", (event) => {
      const key = event.key.toLowerCase();
      switch (key) {
        case "w":
          this.u = false;
          break;
        case "a":
          this.l = false;
          break;
        case "s":
          this.d = false;
          break;
        case "d":
          this.r = false;
          break;
      }
    });
    addEventListener("mousedown",(event) =>{
        if(event.button === 0){
            this.fire = true
        }
    });

  }

  update() {
    if(this.fire){
        bullets.forEach(e =>{
            e.fire()
        })
    }
  }

  draw(c ,angle) {
    c.save();
    c.translate(this.x + this.w / 2, this.y + this.h / 2);
    c.rotate(angle);
    c.fillStyle = this.color;
    c.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
    c.restore();
  }

  movement() {
    if (this.u) {
      this.y -= this.speed;
      console.log("naik");
    }
    if (this.d) {
      this.y += this.speed;
    }
    if (this.l) {
      this.x -= this.speed;
    }
    if (this.r) {
      this.x += this.speed;
    }
}

    fire(){
        
    }
}

class Bullet{
    constructor(x,y,radius,speed,angle){
        this.x = x
        this.y = y
        this.sz = radius
        this.radius = radius
        this.speed = speed
        this.angle = angle
        this.velocityX = Math.cos(this.angle) * this.speed
        this.velocityY = Math.sin(this.angle) * this.speed

    }
    

    fire(){
        this.x += this.velocityX
        this.y += this.velocityY
    }

    draw(c){
        c.fillStyle = "red";
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fill();
        c.closePath();
    }
}

class Enemy{
    constructor(x,y,s,speed,color){
        this.x = x;
        this.y = y;
        this.s = s; 
        this.sz =s;
        this.hp = 5;
        this.color = color;
        this.speed = speed;
    }

    update(){
        this.x -= this.speed;
        bullets.forEach(b =>{
            enemys.forEach(e =>{
                if(isCollide(b,e)){
                    this.hp -=1;
                    msg.innerHTML = "Hp 5/"+this.hp
                    if(this.hp == 0){
                        msg.innerHTML = "DEATH"
                        enemys.splice(e,1)
                    }
                    bullets.splice(b,1)
                }else{}
            })
        })
    }

    move(){
        
    }

    draw(c){
        c.fillStyle = this.color
        c.fillRect(this.x,this.y,this.s,this.s)
    }
}