SetLevelSelector();
function startingGame() {
  setCookie(
    "levelselected",
    btoa(document.getElementById("levelselector").value),
    99
  );
  window.location.href = "game.html";
}

CheckCookies(ShopBtn);
function clearAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1945 00:00:00 UTC;path=/;";
  }
  if(!getCookie('gameversion')){
    setCookie('gameversion',atob(GAMEVERSION),99)
  }
}




function CheckCookies(ShopBtn) {
  let ShopBtnArr = Object.values(ShopBtn);
  if(getCookie('gameversion') != atob(GAMEVERSION) || !getCookie("gameversion")){
    clearAllCookies()
  }
  ShopBtnArr.forEach((e) => {
    if (getCookie(e.btnName)) {
      AplyAllCoockies(ShopBtn);
    } else {
      CreateAllCookie(ShopBtn);
      AplyAllCoockies(ShopBtn);
    }
  });
  RefreshAllBtnShop(ShopBtn);
  if (document.title == "Game") {
    document.getElementById("moneyspanhome").innerHTML = parseInt(
      btoa(getCookie("money"))
    );
  }
}
function AplyAllCoockies(ShopBtn) {
  let ShopBtnArr = Object.values(ShopBtn);
  ShopBtnArr.forEach((e) => {
    e.upgradeValue = atob(getCookie(e.btnName));
  });
  money = parseInt(btoa(getCookie("money")));
}

function CreateAllCookie(ShopBtn) {
  let ShopBtnArr = Object.values(ShopBtn);

  ShopBtnArr.forEach((e) => {
    setCookie(e.btnName, btoa(e.upgradeValue), 99);
  });
  setCookie("levelunlocked", btoa("1"), 99);
  setCookie("levelselected", btoa("1"), 99);
  setCookie("money", atob("500"), 99);
}

if (document.title == "shop") {
  RefreshAllBtnShop(ShopBtn);
}
function RefreshAllBtnShop(ShopBtn) {
  if(levelIndex == 45){
    ShopBtn.WpDamage.upgradeValue = 7
  }
  AplyAllCoockies(ShopBtn);
  let ShopBtnArr = Object.values(ShopBtn);
  if (document.title == "Shop") {
    ShopBtnArr.forEach((e) => {
      e.labelValue = e.upgradeValue + "/" + e.upgradeMaxValue;
      e.btn.innerHTML ="Up "+ (parseInt(e.price[e.upgradeValue]) + 50);
      e.label.innerHTML = e.labelValue;
      e.btnInfo.innerHTML = "Now : "+ e.btnRel[e.upgradeValue] + "<br>Next : " + e.btnRel[parseInt(e.upgradeValue) + 1];

      if (e.upgradeValue == e.upgradeMaxValue) {
        e.btn.innerHTML = "MAX";
        e.btn.disabled = true;
      }
      if(e.price[e.upgradeValue]+50 > money){
        e.btn.disabled = true
      }else{
        e.btn.disabled = false
        
      }
      if(e.btnName == "WpShootAndWalk"){
        if(atob(getCookie('levelunlocked')) < 30){
          e.btn.disabled = true
          e.btn.innerHTML = "available in years 1931"
        }else{
          e.btn.disabled = false
        }
      }
      


      document.getElementById("moneyspan").innerHTML = parseInt(
        btoa(getCookie("money"))
      );
    });
    
  }
}

// function SetAllCoockies(ShopBtn) {
//   // let ShopBtnArr = Object.values(ShopBtn)
//   // ShopBtnArr.forEach(e=>{
//   //         e.upgradeValue =atob(getCookie(e.btnName))
//   // })
// }

function checkCookies(ShopBtn) {
  // if(!getCookie("money")){
  //     setCookie("money","çM",99)
  // }
  // let ShopBtnArr = Object.values(ShopBtn)
  // ShopBtnArr.forEach(e=>{
  //     if(!getCookie(e.btnName)){
  //         setCookie(e.btnName,btoa(e.upgradeValue),99)
  //     }
  // })
}

// RefreshAllBtnShop(ShopBtn);

function ts() {
  // ButtonShopClicked(ShopBtn.playerHp)
}

function ButtonShopClicked(sShopBtn) {
  if (sShopBtn.upgradeValue < sShopBtn.upgradeMaxValue) {
    if (money > sShopBtn.price[sShopBtn.upgradeValue]+50) {
      money -= sShopBtn.price[sShopBtn.upgradeValue];
      setCookie("money", atob(money), 99);
      sShopBtn.upgradeValue++;
      sShopBtn.labelValue = sShopBtn.upgradeValue + "/" + sShopBtn.upgradeMaxValue;
    }
  }
  RefreshBtnShop(sShopBtn);
  RefreshAllBtnShop(ShopBtn)
}
function RefreshBtnShop(ShopBtn) {
  ShopBtn.btn.innerHTML = ShopBtn.price[ShopBtn.upgradeValue];
  ShopBtn.label.innerHTML = ShopBtn.labelValue;
  if (ShopBtn.upgradeValue == ShopBtn.upgradeMaxValue) {
    ShopBtn.btn.innerHTML = "MAX";
  }
  setCookie(ShopBtn.btnName, btoa(ShopBtn.upgradeValue), 9);
  document.getElementById("moneyspan").innerHTML = parseInt(
    btoa(getCookie("money"))
  );
}

function SetLevelSelector() {
  if (document.title == "Game") {
    const selector = document.getElementById("levelselector");
    const LevelUnlocked = atob(getCookie("levelunlocked"));
    
    for (let i = 1; i <= 45; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      if (i <= LevelUnlocked && i != 1) {
        option.disabled = false;
      }else if(i == 1){
        option.disabled = false
      } else {
        option.disabled = true;
      }
      if (i == atob(getCookie("levelselected"))) {
        option.selected = true;
      } else {
        option.selected = false;
      }
      selector.appendChild(option);
    }
  }
}
