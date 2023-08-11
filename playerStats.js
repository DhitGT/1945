let money = parseInt(btoa(getCookie("money")));
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let playerWeapon = {
  magMax: {
    0: 10,
    1: 15,
    2: 20,
    3: 25,
    4: 40,
  },
  reloadDelay: {
    0: "1500",
    1: "1250",
    2: "1000",
    3: "700",
    4: "300",
  },
  rateOfFire: {
    0: "300",
    1: "250",
    2: "200",
    3: "150",
    4: "100",
  },
  WpDamage: {
    0: "1",
    1: "2",
    2: "3",
    3: "4",
    4: "5",
  },
};

let playerStats = {
  speed: {
    0: 5,
    1: 6,
    2: 7,
    3: 8,
    4: 8.5,
  },
  hp: {
    0: 5,
    1: 6,
    2: 7,
    3: 8,
    4: 10,
  },
};

let worldSetting = {
  1: {
    name: "Level 1",
    coinAmount : 50,
    EnemySpawnRate: 4000,
    enemyHp: 5,
    enemySpeed: 4,
    targetKills: 2,
    enemySize : 35,
    worldMap: {
      "1" : "Assets/bg1.png",
      "2" : "Assets/overbg1.png"
    },
    isBossLevel: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : false,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : false,
      "rof" : 500,
      "maxmag" : 0,
      "reloadspeed" : 800,

    }
  },
  2: {
    name: "Level 2",
    coinAmount : 50,
    EnemySpawnRate: 4000,
    enemyHp: 6,
    enemySpeed: 4,
    targetKills: 5,
    enemySize : 35,
    worldMap: {
      "1" : "Assets/bg1.png",
      "2" : "Assets/overbg1.png"
    },
    isBossLevel: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : false,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : false,
      "rof" : 500,
      "maxmag" : 0,
      "reloadspeed" : 800,

    }
  },
  3: {
    name: "Level 3",
    coinAmount : 50,
    EnemySpawnRate: 3600,
    enemyHp: 7,
    enemySpeed: 4,
    targetKills: 6,
    enemySize : 35,
    worldMap: {
      "1" : "Assets/bg1.png",
      "2" : "Assets/overbg1.png"
    },
    isBossLevel: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : false,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : false,
      "rof" : 500,
      "maxmag" : 0,
      "reloadspeed" : 800,

    }
  },
  4: {
    name: "Level 4",
    coinAmount : 50,
    EnemySpawnRate: 3500,
    enemyHp: 7,
    enemySpeed: 4,
    targetKills: 6,
    enemySize : 35,
    worldMap: {
      "1" : "Assets/bg1.png",
      "2" : "Assets/overbg1.png"
    },
    isBossLevel: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : false,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : false,
      "rof" : 500,
      "maxmag" : 5,
      "reloadspeed" : 800,

    }
  },
  5: {
    name: "Level 5",
    coinAmount : 100,
    EnemySpawnRate: 3400,
    enemyHp: 70,
    enemySpeed: 3,
    targetKills: 1,
    enemySize : 45,
    worldMap: {
      "1" : "Assets/bg1.png",
      "2" : "Assets/overbg1.png"
    },
    isBossLevel: true,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(80,200),
      "batesbawah" : randInt(200,250),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 1000,
      "maxmag" : 5,
      "reloadspeed" : 1200,

    }
  },
  6: {
    name: "Level 6",
    coinAmount : 55,
    EnemySpawnRate: 3000,
    enemyHp: 10,
    enemySpeed: 4,
    targetKills: 10,
    enemySize : 35,
    worldMap: {
      "1" : "Assets/bg2.png",
      "2" : "Assets/overbg2.png"
    },
    isBossLevel: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : false,
      "rof" : 500,
      "maxmag" : 0,
      "reloadspeed" : 800,

    }
  },
  7: {
    name: "Level 7",
    coinAmount : 60,
    EnemySpawnRate: 2800,
    enemyHp: 13,
    enemySpeed: 4,
    targetKills: 12,
    enemySize : 35,
    worldMap: {
      "1" : "Assets/bg2.png",
      "2" : "Assets/overbg2.png"
    },
    isBossLevel: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : false,
      "rof" : 500,
      "maxmag" : 0,
      "reloadspeed" : 800,

    }
  },
  8: {
    name: "Level 8",
    coinAmount : 63,
    EnemySpawnRate: 2700,
    enemyHp: 13,
    enemySpeed: 4,
    targetKills: 14,
    enemySize : 35,
    worldMap: {
      "1" : "Assets/bg2.png",
      "2" : "Assets/overbg2.png"
    },
    isBossLevel: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : false,
      "rof" : 500,
      "maxmag" : 0,
      "reloadspeed" : 800,

    }
  },
  9: {
    name: "Level 9",
    coinAmount : 65,
    EnemySpawnRate: 2500,
    enemyHp: 15,
    enemySpeed: 4,
    targetKills: 15,
    enemySize : 35,
    worldMap: {
      "1" : "Assets/bg2.png",
      "2" : "Assets/overbg2.png"
    },
    isBossLevel: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : false,
      "rof" : 500,
      "maxmag" : 0,
      "reloadspeed" : 800,

    }
  },
  10: {
    name: "Level 10",
    coinAmount : 100,
    EnemySpawnRate: 2500,
    enemyHp: 80,
    enemySpeed: 3,
    targetKills: 1,
    enemySize : 75,
    worldMap: {
      "1" : "Assets/bg2.png",
      "2" : "Assets/overbg2.png"
    },
    isBossLevel: true,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 300,
      "maxmag" : 10,
      "reloadspeed" : 1000,

    }
  },
};

ShopBtn = {
  playerHp: {
    btnName: "playerHp",
    btn: document.getElementById("php"),
    label: document.getElementById("jphp"),
    labelValue: "0/4",
    price: {
      0: 200,
      1: 500,
      2: 1000,
      3: 1500,
      4: 2500,
    },
    upgradeMaxValue: 4,
    upgradeValue: 0,
  },
  playerSpeed: {
    btnName: "playerSpeed",
    btn: document.getElementById("speed"),
    label: document.getElementById("jpspeed"),
    labelValue: "0/4",
    price: {
      0: 200,
      1: 500,
      2: 1000,
      3: 1500,
      4: 2500,
    },
    upgradeMaxValue: 4,
    upgradeValue: 0,
  },
  WpDamage: {
    btnName: "WpDamage",
    btn: document.getElementById("wdmg"),
    label: document.getElementById("jwdmg"),
    labelValue: "0/4",
    price: {
      0: 200,
      1: 500,
      2: 1000,
      3: 1500,
      4: 2500,
    },
    upgradeMaxValue: 4,
    upgradeValue: 0,
  },
  WpRateOfFire: {
    btnName: "WpRateOfFire",
    btn: document.getElementById("wrof"),
    label: document.getElementById("jwrof"),
    labelValue: "0/4",
    price: {
      0: 200,
      1: 500,
      2: 1000,
      3: 1500,
      4: 2500,
    },
    upgradeMaxValue: 4,
    upgradeValue: 0,
  },
  WpMaxMag: {
    btnName: "WpMaxMag",
    btn: document.getElementById("wmm"),
    label: document.getElementById("jwmm"),
    labelValue: "0/4",
    price: {
      0: 200,
      1: 500,
      2: 1000,
      3: 1500,
      4: 2500,
    },
    upgradeMaxValue: 4,
    upgradeValue: 0,
  },
  WpReloadSpeed: {
    btnName: "WpReloadSpeed",
    btn: document.getElementById("wrs"),
    label: document.getElementById("jwrs"),
    labelValue: "0/4",
    price: {
      0: 200,
      1: 500,
      2: 1000,
      3: 1500,
      4: 2500,
    },
    upgradeMaxValue: 4,
    upgradeValue: 0,
  },
};

let levelIndex = 1;
GameLevel = worldSetting[levelIndex];
