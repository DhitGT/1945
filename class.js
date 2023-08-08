class Player {
  constructor(x, y, w, h, speed, color) {
    this.targetKill = GameLevel.targetKills
    this.kill = 0;
    this.hp = playerStats.hp[ShopBtn.playerHp.upgradeValue]
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sz = w;
    this.Xcenter = this.x
    this.Ycenter = this.y 
    this.color = color;
    this.speed = playerStats.speed[ShopBtn.playerSpeed.upgradeValue];
    this.u = false;
    this.d = false;
    this.r = false;
    this.l = false;
    this.au = false;
    this.ad = false;
    this.ar = false;
    this.al = false;
    this.fire = false;
    this.colldown = false;
    this.isReload = false;
    this.damage = playerWeapon.WpDamage[ShopBtn.WpDamage.upgradeValue];
    this.rateOfFire = playerWeapon.rateOfFire[ShopBtn.WpRateOfFire.upgradeValue];
    this.mag = playerWeapon.magMax[ShopBtn.WpMaxMag.upgradeValue];
    this.magMax = playerWeapon.magMax[ShopBtn.WpMaxMag.upgradeValue];
    this.reloadDelay = playerWeapon.reloadDelay[ShopBtn.WpReloadSpeed.upgradeValue];
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
        case "arrowup":
          this.au = true;
          break;
        case "arrowleft":
          this.al = true;
          break;
        case "arrowdown":
          this.ad = true;
          break;
        case "arrowright":
          this.ar = true;
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
        case "r":
          if(!this.isReload){
            this.reload()
          }
          break;
        case "arrowup":
          this.au = false;
          break;
        case "arrowleft":
          this.al = false;
          break;
        case "arrowdown":
          this.ad = false;
          break;
        case "arrowright":
          this.ar = false;
          break;

      }
    });
    addEventListener("mousedown", (event) => {
      if (event.button === 0) {
        
      }
    });
  }

  refresh(){
    this.targetKill = GameLevel.targetKills
    this.kill = 0;
    this.hp = playerStats.hp[ShopBtn.playerHp.upgradeValue]
    this.Xcenter = this.x
    this.Ycenter = this.y 
    this.speed = playerStats.speed[ShopBtn.playerSpeed.upgradeValue];
    this.x = 200;
    this.y = 300;
    this.u = false;
    this.d = false;
    this.r = false;
    this.l = false;
    this.au = false;
    this.ad = false;
    this.ar = false;
    this.al = false;
    this.fire = false;
    this.colldown = false;
    this.isReload = false;
    this.damage = playerWeapon.WpDamage[ShopBtn.WpDamage.upgradeValue];
    this.rateOfFire = playerWeapon.rateOfFire[ShopBtn.WpRateOfFire.upgradeValue];;
    this.mag = playerWeapon.magMax[ShopBtn.WpMaxMag.upgradeValue];
    this.magMax = playerWeapon.magMax[ShopBtn.WpMaxMag.upgradeValue];;
    this.reloadDelay = playerWeapon.reloadDelay[ShopBtn.WpReloadSpeed.upgradeValue];;
  }


  update() {
    if(this.hp >= 1){

      coins.forEach(c =>{
        if(isCollide(c,player)){
          money += c.amount
          console.log(money)
          coins.splice(c,1)
          setCookie("money",atob(money),9)
        }
      })

      if(this.kill === this.targetKill){
        this.win()
      }
      msgHp.innerHTML = "Hp : "+this.hp
      if(this.mag <= 1 && !this.isReload){
        msgMag.innerHTML ="ammo : EMPTY!!! (Press R to Reload)"
        
      }else if(this.isReload){
        msgMag.innerHTML ="ammo : "+ this.magMax+" / reload (" + playerWeapon.reloadDelay[ShopBtn.WpReloadSpeed.upgradeValue]/1000 + "s)"
      }else{
        msgMag.innerHTML ="ammo : "+ this.magMax+" / " +  this.mag
      }
    }else{
      this.gameover()
      restartBtn.innerHTML = "RESTART"
    }
  }

  draw(c) {
    c.save();
    c.translate(this.x + this.w / 2, this.y + this.h / 2);
    c.fillStyle = this.color;
    c.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
    c.restore();
  }

  movement() {
    if (this.u) {
      this.y -= this.speed;
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

  reload(){
    this.isReload = true
    if(this.isReload){
      setTimeout(()=>{
          this.mag = this.magMax
          this.isReload = false
        },this.reloadDelay)
    }

  }


  fcolldown() {
    if (!this.colldown) {
      this.colldown = true;
      setTimeout(()=>{
        this.colldown = false;
      },this.rateOfFire)
    }
  }

  gameover(){
    gameover = true
    pause = true
    start()
    msgHp.innerHTML = " GAME OVER"
  }

  win(){
    pause = true;
    win = true;
    start();
    restartBtn.innerHTML = "next level"
  }
}

class Bullet {
  constructor(x, y, radius, speed, angle,player) {
    this.x = x;
    this.y = y;
    this.sz = radius;
    this.angle = angle;
    this.radius = radius;
    this.speed = speed;
    this.damage = player.damage;
  }

  update() {
    if(this.speed < (this.speed + 3)){
      this.speed += 0.4;
    }
    if(this.angle[0]){
      this.y -= this.speed;
    }
    else if(this.angle[1]){
      this.y += this.speed;
    }

    if(this.angle[2]){
      this.x -= this.speed;
    }
    else if(this.angle[3]){
      this.x += this.speed;
    }
  }

  draw(c) {
    c.fillStyle = "red";
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fill();
    c.closePath();
  }
}

class Enemy {
  constructor(x, y, s, speed, color) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.sz = s;
    this.hp = GameLevel.enemyHp;
    this.color = color;
    this.speed = GameLevel.enemySpeed;
  }

  update() {
    this.x -= this.speed;

    bullets.forEach((b) => {
      enemys.forEach((e) => {
        if (isCollide(b, e)) {
          this.hp -= b.damage
          canvasMsgTxt = "Hp "+GameLevel.enemyHp+" / " + this.hp;
          msg.innerHTML = "Hp "+GameLevel.enemyHp+" / " + this.hp;
          if (this.hp <= 0) {
            msg.innerHTML = " ";
            canvasMsgTxt = '';
            enemys.splice(e, 1);
            coins.push(new Coin(e.x,e.y))
            player.kill++
          }
          bullets.splice(b, 1);
        } else {
        }
      });
    });
  }

  move() {}

  draw(c) {
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, this.s, this.s);
  }
}

class Coin{
  constructor(x,y){
    this.x = x
    this.y = y
    this.rad = 5
    this.sz = this.rad
    this.amount = 500;
    this.color = "yellow"

  }


  draw(c){
    c.fillStyle = this.color;
    c.beginPath();
    c.arc(this.x, this.y, this.rad, 0, Math.PI * 2);
    c.fill();
    c.closePath();
  }

}
