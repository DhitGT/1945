ShopBtn = {
    "playerHp" : {
        "btnName" : "playerHp",
        "btn" : document.getElementById("php"), 
        "label" : document.getElementById("jphp"),
        "labelValue" : "0/4",
        "price" : {
            "0" : 200,
            "1" : 500,
            "2" : 1000,
            "3" : 1500,
            "4" : 2500,
        },
        "upgradeMaxValue" : 4,
        "upgradeValue" : 0
    },
    "playerSpeed" : {
        "btnName" : "playerSpeed",
        "btn" : document.getElementById("speed"), 
        "label" : document.getElementById("jpspeed") ,
        "labelValue" : "0/4",
        "price" : {
            "0" : 200,
            "1" : 500,
            "2" : 1000,
            "3" : 1500,
            "4" : 2500,
        },
        "upgradeMaxValue" : 4,
        "upgradeValue" : 0
    },
    "WpDamage" : {
        "btnName" : "WpDamage",
        "btn" : document.getElementById("wdmg"), 
        "label" : document.getElementById("jwdmg") ,
        "labelValue" : "0/4",
        "price" : {
            "0" : 200,
            "1" : 500,
            "2" : 1000,
            "3" : 1500,
            "4" : 2500,
        },
        "upgradeMaxValue" : 4,
        "upgradeValue" : 0
    },
    "WpRateOfFire" : {
        "btnName" : "WpRateOfFire",
        "btn" : document.getElementById("wrof"), 
        "label" : document.getElementById("jwrof") ,
        "labelValue" : "0/4",
        "price" : {
            "0" : 200,
            "1" : 500,
            "2" : 1000,
            "3" : 1500,
            "4" : 2500,
        },
        "upgradeMaxValue" : 4,
        "upgradeValue" : 0
    },
    "WpMaxMag" : {
        "btnName" : "WpMaxMag",
        "btn" : document.getElementById("wmm"), 
        "label" : document.getElementById("jwmm") ,
        "labelValue" : "0/4",
        "price" : {
            "0" : 200,
            "1" : 500,
            "2" : 1000,
            "3" : 1500,
            "4" : 2500,
        },
        "upgradeMaxValue" : 4,
        "upgradeValue" : 0
    },
    "WpReloadSpeed" : {
        "btnName" : "WpReloadSpeed",
        "btn" : document.getElementById("wrs"), 
        "label" : document.getElementById("jwrs") ,
        "labelValue" : "0/4",
        "price" : {
            "0" : 200,
            "1" : 500,
            "2" : 1000,
            "3" : 1500,
            "4" : 2500,
        },
        "upgradeMaxValue" : 4,
        "upgradeValue" : 0
    }
}
function updateLabelBtn(ShopBtn){

}
function ButtonShopClicked(ShopBtn){
    if(ShopBtn.upgradeValue <ShopBtn.upgradeMaxValue){
        ShopBtn.upgradeValue++
        ShopBtn.labelValue = ShopBtn.upgradeValue + "/" + ShopBtn.upgradeMaxValue
    }

    RefreshBtnShop(ShopBtn)
}
function RefreshBtnShop(ShopBtn){
    ShopBtn.btn.innerHTML = ShopBtn.price[ShopBtn.upgradeValue]
    ShopBtn.label.innerHTML = ShopBtn.labelValue
    if(ShopBtn.upgradeValue == ShopBtn.upgradeMaxValue){
        ShopBtn.btn.innerHTML = "MAX"
    }
    setCookie(ShopBtn.btnName,btoa(ShopBtn.upgradeValue),9)
    RefreshAllBtnShop()
}
function RefreshAllBtnShop(ShopBtn){
    SetAllCoockies(ShopBtn)
    let ShopBtnArr = Object.values(ShopBtn)
    ShopBtnArr.forEach(e=>{
        e.btn.innerHTML = e.price[e.upgradeValue]
        e.labelValue = e.upgradeValue + "/" + e.upgradeMaxValue
        e.label.innerHTML = e.labelValue
        if(e.upgradeValue == e.upgradeMaxValue){
            e.btn.innerHTML = "MAX"
        }

    })
    document.getElementById("moneyspan").innerHTML = parseInt(btoa(getCookie("money")))
}

function SetAllCoockies(ShopBtn){
    let ShopBtnArr = Object.values(ShopBtn)
    ShopBtnArr.forEach(e=>{
            e.upgradeValue =atob(getCookie(e.btnName)) 
    })

}

function checkCookies(ShopBtn){

    if(!getCookie("money")){
        setCookie("money","çM",99)
    }
    let ShopBtnArr = Object.values(ShopBtn)
    ShopBtnArr.forEach(e=>{
        if(!getCookie(e.btnName)){
            setCookie(e.btnName,btoa(e.upgradeValue),99)
        }
    })
}
checkCookies(ShopBtn);
RefreshAllBtnShop(ShopBtn);

function ts(){
    ButtonShopClicked(ShopBtn.playerHp)
}
