
SetLevelSelector()
function startingGame(){

  setCookie('levelselected',btoa(document.getElementById("levelselector").value),99)
  window.location.href = "game.html";
}




CheckCookies(ShopBtn);

function CheckCookies(ShopBtn) {
  let ShopBtnArr = Object.values(ShopBtn);
  ShopBtnArr.forEach((e) => {
    if (getCookie(e.btnName)) {
      AplyAllCoockies(ShopBtn)
    } else {
      CreateAllCookie(ShopBtn);
      AplyAllCoockies(ShopBtn)
    }
  });
  RefreshAllBtnShop(ShopBtn)
  if(document.title == "Game"){

    document.getElementById("moneyspanhome").innerHTML = parseInt(
      btoa(getCookie("money"))
    );
}

}
function AplyAllCoockies(ShopBtn) {
    let ShopBtnArr = Object.values(ShopBtn);
    ShopBtnArr.forEach((e) => {
        e.upgradeValue = atob(getCookie(e.btnName)) 
        console.log("diupfate");
    });
    money = parseInt(btoa(getCookie("money")))
  }
  

function CreateAllCookie(ShopBtn) {
    let ShopBtnArr = Object.values(ShopBtn);

    ShopBtnArr.forEach((e) => {
      setCookie(e.btnName, btoa(e.upgradeValue), 99);
    });
    setCookie("levelunlocked", btoa("1"), 99);
    setCookie("money", atob("500"), 99);
}

if(document.title == "shop"){
    RefreshAllBtnShop(ShopBtn)
}
function RefreshAllBtnShop(ShopBtn) {
  AplyAllCoockies(ShopBtn)
  let ShopBtnArr = Object.values(ShopBtn)
  if(document.title == "Shop"){
      ShopBtnArr.forEach(e=>{
          e.btn.innerHTML = e.price[e.upgradeValue]
          e.labelValue = e.upgradeValue + "/" + e.upgradeMaxValue
          e.label.innerHTML = e.labelValue
          if(e.upgradeValue == e.upgradeMaxValue){
              e.btn.innerHTML = "MAX"
          }
          document.getElementById("moneyspan").innerHTML = parseInt(btoa(getCookie("money")))
      })
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

function ButtonShopClicked(ShopBtn) {
    if(ShopBtn.upgradeValue <ShopBtn.upgradeMaxValue){
      if(money >= ShopBtn.price[ShopBtn.upgradeValue]){
        money -= ShopBtn.price[ShopBtn.upgradeValue]
        setCookie("money",atob(money),99)
        ShopBtn.upgradeValue++
        ShopBtn.labelValue = ShopBtn.upgradeValue + "/" + ShopBtn.upgradeMaxValue
      }
    }
    RefreshBtnShop(ShopBtn)
  }
  function RefreshBtnShop(ShopBtn) {
    ShopBtn.btn.innerHTML = ShopBtn.price[ShopBtn.upgradeValue]
    ShopBtn.label.innerHTML = ShopBtn.labelValue
    if(ShopBtn.upgradeValue == ShopBtn.upgradeMaxValue){
        ShopBtn.btn.innerHTML = "MAX"
    }
    setCookie(ShopBtn.btnName,btoa(ShopBtn.upgradeValue),9)
    document.getElementById("moneyspan").innerHTML = parseInt(btoa(getCookie("money")))
  }

  function SetLevelSelector(){
    if(document.title == "Game"){
      const selector = document.getElementById("levelselector")
      const LevelUnlocked = atob(getCookie('levelunlocked'))
      for (let i = 1; i <= 50; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        if(i <= LevelUnlocked){
          option.disabled = false;
        }else{
          option.disabled = true;
        }
        if(i == atob(getCookie("levelselected"))){
          option.selected = true;
        }else{
          option.selected = false;
        }
        selector.appendChild(option);
      }
      console.log("level : ",LevelUnlocked)
    }
  }