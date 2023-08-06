let money = 1000;
let playerWeapon = {
    "magMax":"10",
    "reloadDelay" : "1000",
    "rateOfFire" : "200"
}

let playerStats = {
    "speed" : 6,
    "hp" : 5
}

let worldSetting = {
    "lvl1" : {
        "name" : "Level 1",
        "EnemySpawnRate" : 4000,
        "enemyHp" : 5,
        "enemySpeed" : 4,
        "targetKills" : 10
    },
    "lvl2" : {
        "name" : "Level 2",
        "EnemySpawnRate" : 4000,
        "enemyHp" : 6,
        "enemySpeed" : 4,
        "targetKills" : 10
    }
}

let GameLevel = worldSetting.lvl2