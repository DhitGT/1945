let money = parseInt(btoa(getCookie("money")))
let playerWeapon = {
    "magMax":{
        "0" : 10,
        "1" : 15,
        "2" : 20,
        "3" : 25,
        "4" : 40,
    },
    "reloadDelay" : {
        "0" : "1500",
        "1" : "1250",
        "2" : "1000",
        "3" : "700",
        "4" : "300",
    },
    "rateOfFire" : {
        "0" : "300",
        "1" : "250",
        "2" : "200",
        "3" : "150",
        "4" : "100",
    }
}

let playerStats = {
    "speed" : {
        "0" : 5,
        "1" : 6,
        "2" : 7,
        "3" : 8,
        "4" : 8.5,
    },
    "hp" : {
        "0" : 5,
        "1" : 6,
        "2" : 7,
        "3" : 8,
        "4" : 10,
    }
}



let worldSetting = {
    "1" : {
        "name" : "Years 1860",
        "EnemySpawnRate" : 4000,
        "enemyHp" : 5,
        "enemySpeed" : 4,
        "targetKills" : 2
    },
    "2" : {
        "name" : "Years 1865",
        "EnemySpawnRate" : 4000,
        "enemyHp" : 6,
        "enemySpeed" : 4,
        "targetKills" : 5
    },
    "3" : {
        "name" : "Years 1870",
        "EnemySpawnRate" : 3600,
        "enemyHp" : 7,
        "enemySpeed" : 4,
        "targetKills" : 6
    },
    "4" : {
        "name" : "Years 1875",
        "EnemySpawnRate" : 3500,
        "enemyHp" : 7,
        "enemySpeed" : 4,
        "targetKills" : 6
    },
    "5" : {
        "name" : "Years 1880",
        "EnemySpawnRate" : 3400,
        "enemyHp" : 7,
        "enemySpeed" : 4,
        "targetKills" : 7
    }
}

let levelIndex = 1;
GameLevel = worldSetting[levelIndex]



