class Player {
  constructor(x, y, w, h, speed, color,imgsrc) {
    this.targetKill = GameLevel.targetKills;
    this.kill = 0;
    this.hp = playerStats.hp[ShopBtn.playerHp.upgradeValue];
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sz = w;
    this.img = imgsrc;
    this.tik = 0;
    this.tik2 = 0;
    this.cx = 160 * 0; //crop x
    this.cy = 523 * 0; //crop y
    this.cw = 32 * 10; //crop width
    this.ch = 32 * 10; //crop height
    this.sf = 570; //crop jarak antar frame
    this.lengthFrame = 5;
    this.Xcenter = this.x;
    this.Ycenter = this.y;
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
    this.coinCollected = 0;
    this.damage = playerWeapon.WpDamage[ShopBtn.WpDamage.upgradeValue];
    this.rateOfFire =
      playerWeapon.rateOfFire[ShopBtn.WpRateOfFire.upgradeValue];
    this.mag = playerWeapon.magMax[ShopBtn.WpMaxMag.upgradeValue];
    this.magMax = playerWeapon.magMax[ShopBtn.WpMaxMag.upgradeValue];
    this.reloadDelay =
      playerWeapon.reloadDelay[ShopBtn.WpReloadSpeed.upgradeValue];
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
          if (!this.isReload) {
            this.reload();
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

  setAnimate() {
    if (this.d && !this.r && !this.l) {
      this.cy = 0 * 1;
      this.cx = 160 * 0;
      this.lengthFrame = 3;
    } else if (this.d && this.r) {
      this.cy = 160 * 2;
      this.cx = 160 * 0;
      this.lengthFrame = 3;
    } else if (this.r && !this.u) {
      this.cy = 160 * 4;
      this.cx = 160 * 0;
      this.lengthFrame = 3;
    } else if (this.r && this.u) {
      this.cy = 160 * 6;
      this.cx = 160 * 0;
      this.lengthFrame = 3;
    } else if (this.u && !this.l) {
      this.cy = 160 * 8;
      this.cx = 160 * 0;
      this.lengthFrame = 3;
    } else if (this.u && this.l) {
      this.cy = 160 * 10;
      this.cx = 160 * 0;
      this.lengthFrame = 3;
    } else if (this.l && !this.d) {
      this.cy = 160 * 12;
      this.cx = 160 * 0;
      this.lengthFrame = 3;
    } else if (this.l && this.d) {
      this.cy = 160 * 14;
      this.cx = 160 * 0;
      this.lengthFrame = 3;
    } else if (this.ad && !this.ar && !this.al) {
      this.cy = 0 * 1;
      this.cx = 160 * 14;
      this.lengthFrame = 3;
    } else if (this.ad && this.ar) {
      this.cy = 160 * 2;
      this.cx = 160 * 14;
      this.lengthFrame = 3;
    } else if (this.ar && !this.au) {
      this.cy = 160 * 4;
      this.cx = 160 * 14;
      this.lengthFrame = 3;
    } else if (this.ar && this.au) {
      this.cy = 160 * 6;
      this.cx = 160 * 14;
      this.lengthFrame = 3;
    } else if (this.au && !this.al) {
      this.cy = 160 * 8;
      this.cx = 160 * 14;
      this.lengthFrame = 3;
    } else if (this.au && this.al) {
      this.cy = 160 * 10;
      this.cx = 160 * 14;
      this.lengthFrame = 3;
    } else if (this.al && !this.ad) {
      this.cy = 160 * 12;
      this.cx = 160 * 14;
      this.lengthFrame = 3;
    } else if (this.al && this.ad) {
      this.cy = 160 * 14;
      this.cx = 160 * 14;
      this.lengthFrame = 3;
    } else {
      this.cy = 0;
      this.cx = 0;
      this.lengthFrame = 1;
    }
  }

  refresh() {
    this.targetKill = GameLevel.targetKills;
    this.kill = 0;
    this.hp = playerStats.hp[ShopBtn.playerHp.upgradeValue];
    this.Xcenter = this.x;
    this.Ycenter = this.y;
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
    this.coinCollected = 0;
    this.damage = playerWeapon.WpDamage[ShopBtn.WpDamage.upgradeValue];
    this.rateOfFire =
      playerWeapon.rateOfFire[ShopBtn.WpRateOfFire.upgradeValue];
    this.mag = playerWeapon.magMax[ShopBtn.WpMaxMag.upgradeValue];
    this.magMax = playerWeapon.magMax[ShopBtn.WpMaxMag.upgradeValue];
    this.reloadDelay =
      playerWeapon.reloadDelay[ShopBtn.WpReloadSpeed.upgradeValue];
  }

  update() {
    if(this.ad || this.au || this.al || this.ar){
      this.u = false;
      this.l = false;
      this.d = false;
      this.r = false;
    }
    if (this.hp >= 1) {
      canvasMsgTxt = "";
      canvasSubMsgTxt = "";
      coins.forEach((c) => {
        if (isCollide(c, player)) {
          money += c.amount;
          this.coinCollected += c.amount;
          destroyCoins(c)
          setCookie("money", atob(money), 9);
        }
      });

      enemybullets.forEach(e=>{
        if(isCollide(e,player)){
          enemybullets.splice(e,1)
          player.hp--;
        }
      })

      enemys.forEach((e) => {
        if (isCollide(player, e)) {
          destroyEnemy(e)
          this.gameover();
          restartBtn.innerHTML = "RESTART";
        }
      });

      if (this.kill === this.targetKill) {
        this.win();
      }
      msgHp.innerHTML = "Hp : " + this.hp;
      if (this.mag <= 1 && !this.isReload) {
        msgMag.innerHTML = "ammo : EMPTY!!! (Press R to Reload)";
      } else if (this.isReload) {
        msgMag.innerHTML =
          "ammo : " +
          this.magMax +
          " / reload (" +
          playerWeapon.reloadDelay[ShopBtn.WpReloadSpeed.upgradeValue] / 1000 +
          "s)";
      } else {
        msgMag.innerHTML = "ammo : " + this.magMax + " / " + this.mag;
      }
    } else {
      this.gameover();
      restartBtn.innerHTML = "RESTART";
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
    if (this.u && this.y > 50) {
      this.y -= this.speed;
    }
    if (this.d && this.y < 290) {
      this.y += this.speed;
    }
    if (this.l && this.x > 50) {
      this.x -= this.speed;
    }
    if (this.r && this.x < 710) {
      this.x += this.speed;
    }
  }

  reload() {
    this.isReload = true;
    if (this.isReload) {
      setTimeout(() => {
        this.mag = this.magMax;
        this.isReload = false;
      }, this.reloadDelay);
    }
  }

  fcolldown() {
    if (!this.colldown) {
      this.colldown = true;
      setTimeout(() => {
        this.colldown = false;
      }, this.rateOfFire);
    }
  }

  gameover() {
    gameover = true;
    pause = true;
    start();
    msgHp.innerHTML = " GAME OVER";
    canvasMsgTxt = "GAME OVER";
    canvasSubMsgTxt = "coin collected : " + this.coinCollected;
  }

  win() {
    coins.forEach((c) => {
      money += c.amount;
      this.coinCollected += c.amount;
      console.log(this.coinCollected);
      destroyCoins(c)
      setCookie("money", atob(money), 9);
    });
    pause = true;
    win = true;
    canvasMsgTxt = "LEVEL CLEAR";
    canvasSubMsgTxt = "coin collected : " + this.coinCollected;
    start();
    restartBtn.innerHTML = "next level";
  }
}



class Bullet {
  constructor(x, y, radius, speed, angle, player,color) {
    this.x = x;
    this.y = y;
    this.sz = radius;
    this.angle = angle;
    this.radius = radius;
    this.speed = speed;
    this.damage = player.damage;
    this.history = []; 
    this.color = color;
  }

  update() {
    if (this.speed < this.speed + 3) {
      this.speed += 0.4;
    }
    if (this.angle[0]) {
      this.y -= this.speed;
    } else if (this.angle[1]) {
      this.y += this.speed;
    }
    if (this.angle[2]) {
      this.x -= this.speed;
    } else if (this.angle[3]) {
      this.x += this.speed;
    }

    this.history.push({ x: this.x, y: this.y });


    if (this.history.length > 4) {
      this.history.shift(); 
    }
  }

  draw(c) {
    c.fillStyle = this.color;

    for (let i = 0; i < this.history.length; i++) {
      const position = this.history[i];
      const trailRadius = this.radius - (i * 0.8); 
      c.globalAlpha = 0.5 - (i * 0.08);
      c.beginPath();
      c.arc(position.x, position.y, trailRadius, 0, Math.PI * 2);
      c.fill();
      c.closePath();
    }
    c.globalAlpha = 1.0;




    c.beginPath();
    c.fillStyle = "white";
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.shadowColor = "rgba(255, 255, 25, 1)"; 
    c.shadowBlur = 10; 
    c.fill();
    c.shadowBlur = 0;
    c.closePath();
  }
}

class Enemy {
  constructor(x, y, s, speed, color) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.sz = s;
    this.tik = 0;
    this.tik2 = 0;
    this.hp = GameLevel.enemyHp;
    this.color = color;
    this.speed = GameLevel.enemySpeed;
    this.fire = false;
    this.colldown = false;
    this.isReload = false;
    this.mag = GameLevel.enemyWp.maxmag;
    this.magMax = GameLevel.enemyWp.maxmag;
    this.isReloadDelay = GameLevel.enemyWp.reloadspeed;
    this.rateOfFire = GameLevel.enemyWp.rof;
    this.batesatas = 85;
    this.batesbawah = 230;
    this.dir = 1;
  }

  reload() {
    this.isReload = true;
    if (this.isReload) {
      setTimeout(() => {
        this.mag = this.magMax;
        this.isReload = false;
      }, this.reloadDelay);
    }
  }

  fcolldown() {
    if (!this.colldown) {
      this.colldown = true;
      setTimeout(() => {
        this.colldown = false;
      }, this.rateOfFire);
    }
  }

  update() {
    this.x -= this.speed;

    bullets.forEach((b) => {
      enemys.forEach((e) => {
        if (isCollide(b, e)) {
          this.hp -= b.damage;
          canvasMsgTxt = "Hp " + GameLevel.enemyHp + " / " + this.hp;
          msg.innerHTML = "Hp " + GameLevel.enemyHp + " / " + this.hp;
          if (this.hp <= 0) {
            msg.innerHTML = " ";
            canvasMsgTxt = "";
            canvasSubMsgTxt = "";
            destroyEnemy(e)

            coins.push(new Coin(e.x, e.y, worldSetting[levelIndex].coinAmount));
            player.kill++;
          }
          bullets.splice(b, 1);
        } else {
        }
      });
    });
  }

  move() {
    if(GameLevel.enemyMove.isMove){
      if(this.y <= this.batesatas ){
        this.dir = 1;
        this.batesatas = randInt(80,200)
      }else if(this.y >= this.batesbawah ){
        this.dir = -1;
        this.batesbawah = randInt(200,250)
      }
  
      this.y += this.dir * (this.speed / 2)
    }
    

  }

  draw(c) {
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, this.s, this.s);
  }
}

class Coin {
  constructor(x, y, amount) {
    this.x = x;
    this.y = y;
    this.rad = 5;
    this.sz = this.rad;
    this.amount = amount;
    this.color = "yellow";
  }

  draw(c) {
    c.fillStyle = this.color;
    c.beginPath();
    c.arc(this.x, this.y, this.rad, 0, Math.PI * 2);
    c.fill();
    c.closePath();
  }
}
