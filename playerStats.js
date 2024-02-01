const GAMEVERSION = 205
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
    5: 70,
    6: 100,
  },
  reloadDelay: {
    0: "1500",
    1: "1250",
    2: "1000",
    3: "700",
    4: "300",
    5: "10",
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
    4: "6",
    5: "8",
    6: "10",
    7: "100"
  },
  ShootAndWalk : {
    0: false,
    1: true
  }
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
    5: 15,
    6: 25,
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
      "1" : "assets/img/bg1.png",
      "2" : "assets/img/overbg1.png"
    },
    isBossLevel: false,
    isTroops: false,
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
      "bulletSpeed" : 4,

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
      "1" : "assets/img/bg1.png",
      "2" : "assets/img/overbg1.png"
    },
    isBossLevel: false,
    isTroops: false,
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
      "bulletSpeed" : 4,

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
      "1" : "assets/img/bg1.png",
      "2" : "assets/img/overbg1.png"
    },
    isBossLevel: false,
    isTroops: false,
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
      "bulletSpeed" : 4,

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
      "1" : "assets/img/bg1.png",
      "2" : "assets/img/overbg1.png"
    },
    isBossLevel: false,
    isTroops: false,
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
      "bulletSpeed" : 4,

    }
  },
  5: {
    name: "Level 5",
    coinAmount : 100,
    EnemySpawnRate: 3400,
    enemyHp: 50,
    enemySpeed: 2,
    targetKills: 1,
    enemySize : 45,
    worldMap: {
      "1" : "assets/img/bg1.png",
      "2" : "assets/img/overbg1.png"
    },
    isBossLevel: true,
    isTroops: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(80,200),
      "batesbawah" : randInt(200,250),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 5,
      "reloadspeed" : 1500,
      "bulletSpeed" : 4,

    }
  },
  6: {
    name: "Level 6",
    coinAmount : 55,
    EnemySpawnRate: 3000,
    enemyHp: 6,
    enemySpeed: 3,
    targetKills: 10,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg1.png",
      "2" : "assets/img/overbg1.png"
    },
    isBossLevel: false,
    isTroops: false,
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
      "bulletSpeed" : 4,

    }
  },
  7: {
    name: "Level 7",
    coinAmount : 60,
    EnemySpawnRate: 2800,
    enemyHp: 10,
    enemySpeed: 3,
    targetKills: 10,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg1.png",
      "2" : "assets/img/overbg1.png"
    },
    isBossLevel: false,
    isTroops: false,
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
      "bulletSpeed" : 4,

    }
  },
  8: {
    name: "Level 8",
    coinAmount : 63,
    EnemySpawnRate: 2700,
    enemyHp: 10,
    enemySpeed: 3,
    targetKills: 10,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg1.png",
      "2" : "assets/img/overbg1.png"
    },
    isBossLevel: false,
    isTroops: false,
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
      "bulletSpeed" : 4,

    }
  },
  9: {
    name: "Level 9",
    coinAmount : 65,
    EnemySpawnRate: 2500,
    enemyHp: 12,
    enemySpeed: 3,
    targetKills: 11,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg1.png",
      "2" : "assets/img/overbg1.png"
    },
    isBossLevel: false,
    isTroops: false,
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
      "bulletSpeed" : 4,

    }
  },
  10: {
    name: "Level 10",
    coinAmount : 500,
    EnemySpawnRate: 2500,
    enemyHp: 80,
    enemySpeed: 3,
    targetKills: 1,
    enemySize : 75,
    worldMap: {
      "1" : "assets/img/bg1.png",
      "2" : "assets/img/overbg1.png"
    },
    isBossLevel: true,
    isTroops: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 1000,
      "maxmag" : 10,
      "reloadspeed" : 5000,
      "bulletSpeed" : 4,

    }
  },
  11: {
    name: "Level 11",
    coinAmount : 70,
    EnemySpawnRate: 2700,
    enemyHp: 14,
    enemySpeed: 3,
    targetKills: 12,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg3.png",
      "2" : "assets/img/overbg3.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 4,
      "reloadspeed" : 2000,
      "bulletSpeed" : 4,

    }
  },
  12: {
    name: "Level 12",
    coinAmount : 74,
    EnemySpawnRate: 2700,
    enemyHp: 18,
    enemySpeed: 3,
    targetKills: 15,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg3.png",
      "2" : "assets/img/overbg3.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 4,
      "reloadspeed" : 2000,
      "bulletSpeed" : 4,

    }
  },
  13: {
    name: "Level 13",
    coinAmount : 77,
    EnemySpawnRate: 2700,
    enemyHp: 18,
    enemySpeed: 3,
    targetKills: 16,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg3.png",
      "2" : "assets/img/overbg3.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 4,
      "reloadspeed" : 2000,
      "bulletSpeed" : 4,

    }
  },
  14: {
    name: "Level 14",
    coinAmount : 80,
    EnemySpawnRate: 2700,
    enemyHp: 19,
    enemySpeed: 3,
    targetKills: 16,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg3.png",
      "2" : "assets/img/overbg3.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 4,
      "reloadspeed" : 2000,
      "bulletSpeed" : 4,

    }
  },
  15: {
    name: "Level 15",
    coinAmount : 80,
    EnemySpawnRate: 2700,
    enemyHp: 20,
    enemySpeed: 3,
    targetKills: 17,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg3.png",
      "2" : "assets/img/overbg3.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 4,
      "reloadspeed" : 2000,
      "bulletSpeed" : 4,

    }
  },
  16: {
    name: "Level 16",
    coinAmount : 84,
    EnemySpawnRate: 2700,
    enemyHp: 22,
    enemySpeed: 3,
    targetKills: 18,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg3.png",
      "2" : "assets/img/overbg3.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 5,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  17: {
    name: "Level 17",
    coinAmount : 87,
    EnemySpawnRate: 2700,
    enemyHp: 22,
    enemySpeed: 3,
    targetKills: 18,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg3.png",
      "2" : "assets/img/overbg3.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 5,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  18: {
    name: "Level 18",
    coinAmount : 90,
    EnemySpawnRate: 2700,
    enemyHp: 25,
    enemySpeed: 3,
    targetKills: 19,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg3.png",
      "2" : "assets/img/overbg3.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 5,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  19: {
    name: "Level 19",
    coinAmount : 95,
    EnemySpawnRate: 2700,
    enemyHp: 28,
    enemySpeed: 3,
    targetKills: 20,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg3.png",
      "2" : "assets/img/overbg3.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 5,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  20: {
    name: "Level 20",
    coinAmount : 600,
    EnemySpawnRate: 1500,
    enemyHp: 200,
    enemySpeed: 2,
    targetKills: 1,
    enemySize : 75,
    worldMap: {
      "1" : "assets/img/bg3.png",
      "2" : "assets/img/overbg3.png"
    },
    isBossLevel: true,
    isTroops: true,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 5,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  21: {
    name: "Level 21",
    coinAmount : 110,
    EnemySpawnRate: 1900,
    enemyHp: 30,
    enemySpeed: 3,
    targetKills: 20,
    enemySize : 45,
    worldMap: {
      "1" : "assets/img/bg2.png",
      "2" : "assets/img/overbg2.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 5,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  22: {
    name: "Level 22",
    coinAmount : 110,
    EnemySpawnRate: 1900,
    enemyHp: 32,
    enemySpeed: 3,
    targetKills: 21,
    enemySize : 45,
    worldMap: {
      "1" : "assets/img/bg2.png",
      "2" : "assets/img/overbg2.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 5,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  23: {
    name: "Level 23",
    coinAmount : 110,
    EnemySpawnRate: 1900,
    enemyHp: 33,
    enemySpeed: 3,
    targetKills: 21,
    enemySize : 45,
    worldMap: {
      "1" : "assets/img/bg2.png",
      "2" : "assets/img/overbg2.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 5,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  24: {
    name: "Level 24",
    coinAmount : 110,
    EnemySpawnRate: 1900,
    enemyHp: 34,
    enemySpeed: 3,
    targetKills: 22,
    enemySize : 45,
    worldMap: {
      "1" : "assets/img/bg2.png",
      "2" : "assets/img/overbg2.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 5,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  25: {
    name: "Level 25",
    coinAmount : 110,
    EnemySpawnRate: 1900,
    enemyHp: 35,
    enemySpeed: 3,
    targetKills: 22,
    enemySize : 45,
    worldMap: {
      "1" : "assets/img/bg2.png",
      "2" : "assets/img/overbg2.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 5,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  26: {
    name: "Level 26",
    coinAmount : 115,
    EnemySpawnRate: 3500,
    enemyHp: 37,
    enemySpeed: 2.5,
    targetKills: 22,
    enemySize : 45,
    worldMap: {
      "1" : "assets/img/bg2.png",
      "2" : "assets/img/overbg2.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 3,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  27: {
    name: "Level 27",
    coinAmount : 115,
    EnemySpawnRate: 3400,
    enemyHp: 38,
    enemySpeed: 2.5,
    targetKills: 24,
    enemySize : 45,
    worldMap: {
      "1" : "assets/img/bg2.png",
      "2" : "assets/img/overbg2.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 3,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  28: {
    name: "Level 28",
    coinAmount : 115,
    EnemySpawnRate: 3400,
    enemyHp: 40,
    enemySpeed: 2.5,
    targetKills: 25,
    enemySize : 45,
    worldMap: {
      "1" : "assets/img/bg2.png",
      "2" : "assets/img/overbg2.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 3,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  29: {
    name: "Level 29",
    coinAmount : 115,
    EnemySpawnRate: 3400,
    enemyHp: 40,
    enemySpeed: 2.5,
    targetKills: 25,
    enemySize : 45,
    worldMap: {
      "1" : "assets/img/bg2.png",
      "2" : "assets/img/overbg2.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 3,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  30: {
    name: "Level 30",
    coinAmount : 2000,
    EnemySpawnRate: 1700,
    enemyHp: 300,
    enemySpeed: 2,
    targetKills: 1,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg2.png",
      "2" : "assets/img/overbg2.png"
    },
    isBossLevel: true,
    isTroops: true,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 3,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  31: {
    name: "Level 31",
    coinAmount : 130,
    EnemySpawnRate: 2900,
    enemyHp: 40,
    enemySpeed: 2.5,
    targetKills: 25,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg4.png",
      "2" : "assets/img/overbg4.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 3,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  32: {
    name: "Level 32",
    coinAmount : 150,
    EnemySpawnRate: 2900,
    enemyHp: 42,
    enemySpeed: 2.5,
    targetKills: 25,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg4.png",
      "2" : "assets/img/overbg4.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 5,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  33: {
    name: "Level 33",
    coinAmount : 160,
    EnemySpawnRate: 2900,
    enemyHp: 45,
    enemySpeed: 2.5,
    targetKills: 25,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg4.png",
      "2" : "assets/img/overbg4.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 6,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  34: {
    name: "Level 34",
    coinAmount : 170,
    EnemySpawnRate: 2500,
    enemyHp: 47,
    enemySpeed: 2.5,
    targetKills: 26,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg4.png",
      "2" : "assets/img/overbg4.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 6,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  35: {
    name: "Level 35",
    coinAmount : 200,
    EnemySpawnRate: 2400,
    enemyHp: 50,
    enemySpeed: 2.5,
    targetKills: 28,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg4.png",
      "2" : "assets/img/overbg4.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 6,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  36: {
    name: "Level 36",
    coinAmount : 200,
    EnemySpawnRate: 2400,
    enemyHp: 50,
    enemySpeed: 2.5,
    targetKills: 28,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg4.png",
      "2" : "assets/img/overbg4.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 6,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  37: {
    name: "Level 37",
    coinAmount : 210,
    EnemySpawnRate: 2400,
    enemyHp: 52,
    enemySpeed: 2.5,
    targetKills: 29,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg4.png",
      "2" : "assets/img/overbg4.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 7,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  38: {
    name: "Level 38",
    coinAmount : 220,
    EnemySpawnRate: 2200,
    enemyHp: 53,
    enemySpeed: 3.5,
    targetKills: 29,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg4.png",
      "2" : "assets/img/overbg4.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 7,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  39: {
    name: "Level 39",
    coinAmount : 250,
    EnemySpawnRate: 2000,
    enemyHp: 55,
    enemySpeed: 3.5,
    targetKills: 30,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg4.png",
      "2" : "assets/img/overbg4.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 8,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  40: {
    name: "Level 40",
    coinAmount : 1000,
    EnemySpawnRate: 1300,
    enemyHp: 500,
    enemySpeed: 3.5,
    targetKills: 1,
    enemySize : 40,
    worldMap: {
      "1" : "assets/img/bg4.png",
      "2" : "assets/img/overbg4.png"
    },
    isBossLevel: true,
    isTroops: true,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 8,
      "reloadspeed" : 2000,
      "bulletSpeed" : 5,

    }
  },
  41: {
    name: "Level 41",
    coinAmount : 200,
    EnemySpawnRate: 1500,
    enemyHp: 60,
    enemySpeed: 2.5,
    targetKills: 30,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg2.png",
      "2" : "assets/img/overbg2.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 6,
      "reloadspeed" : 1500,
      "bulletSpeed" : 5,

    }
  },
  42: {
    name: "Level 42",
    coinAmount : 220,
    EnemySpawnRate: 1500,
    enemyHp: 63,
    enemySpeed: 4.5,
    targetKills: 30,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg2.png",
      "2" : "assets/img/overbg2.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 6,
      "reloadspeed" : 1500,
      "bulletSpeed" : 5,

    }
  },
  43: {
    name: "Level 43",
    coinAmount : 225,
    EnemySpawnRate: 1500,
    enemyHp: 64,
    enemySpeed: 4.5,
    targetKills: 30,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg2.png",
      "2" : "assets/img/overbg2.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 6,
      "reloadspeed" : 1300,
      "bulletSpeed" : 5,

    }
  },
  44: {
    name: "Level 44",
    coinAmount : 230,
    EnemySpawnRate: 1300,
    enemyHp: 60,
    enemySpeed: 3,
    targetKills: 30,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg2.png",
      "2" : "assets/img/overbg2.png"
    },
    isBossLevel: false,
    isTroops: false,
    spawnerValue : 2,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 3,
      "reloadspeed" : 1000,
      "bulletSpeed" : 7,

    }
  },
  45: {
    name: "Level 45",
    coinAmount : 230,
    EnemySpawnRate: 2100,
    enemyHp: 1500,
    enemySpeed: 2,
    targetKills: 1,
    enemySize : 35,
    worldMap: {
      "1" : "assets/img/bg2.png",
      "2" : "assets/img/overbg2.png"
    },
    isBossLevel: true,
    isTroops: true,
    spawnerValue : 1,
    enemyMove : {
      "isMove" : true,
      "batesatas" : randInt(0,0),
      "batesbawah" : randInt(0,0),
    },
    enemyWp : {
      "isWp" : true,
      "rof" : 200,
      "maxmag" : 9,
      "reloadspeed" : 1000,
      "bulletSpeed" : 7,

    }
  },
  
};


ShopBtn = {
  playerHp: {
    btnName: "playerHp",
    btnRel : playerStats.hp,
    btnInfo: document.getElementById("iphp"),
    btn: document.getElementById("php"),
    label: document.getElementById("jphp"),
    labelValue: "0/6",
    price: {
      0: 200,
      1: 600,
      2: 1400,
      3: 2500,
      4: 4500,
      5: 7000,
    },
    upgradeMaxValue: 6,
    upgradeValue: 0,
  },
  playerSpeed: {
    btnName: "playerSpeed",
    btnRel : playerStats.speed,
    btnInfo: document.getElementById("ipspeed"),
    btn: document.getElementById("speed"),
    label: document.getElementById("jpspeed"),
    labelValue: "0/4",
    price: {
      0: 200,
      1: 1000,
      2: 2000,
      3: 3500,
    },
    upgradeMaxValue: 4,
    upgradeValue: 0,
  },
  WpDamage: {
    btnName: "WpDamage",
    btnRel : playerWeapon.WpDamage,
    btnInfo: document.getElementById("iwdmg"),
    btn: document.getElementById("wdmg"),
    label: document.getElementById("jwdmg"),
    labelValue: "0/6",
    price: {
      0: 200,
      1: 1000,
      2: 1500,
      3: 2500,
      4: 4000,
      5: 7000,
    },
    upgradeMaxValue: 6,
    upgradeValue: 0,
  },
  WpRateOfFire: {
    btnName: "WpRateOfFire",
    btnRel : playerWeapon.rateOfFire,
    btnInfo: document.getElementById("iwrof"),
    btn: document.getElementById("wrof"),
    label: document.getElementById("jwrof"),
    labelValue: "0/4",
    price: {
      0: 200,
      1: 1000,
      2: 2000,
      3: 4000,
    },
    upgradeMaxValue: 4,
    upgradeValue: 0,
  },
  WpMaxMag: {
    btnName: "WpMaxMag",
    btnRel : playerWeapon.magMax,
    btnInfo: document.getElementById("iwmm"),
    btn: document.getElementById("wmm"),
    label: document.getElementById("jwmm"),
    labelValue: "0/6",
    price: {
      0: 200,
      1: 800,
      2: 1500,
      3: 3500,
      4: 5000,
      5: 7500,
    },
    upgradeMaxValue: 6,
    upgradeValue: 0,
  },
  WpReloadSpeed: {
    "bulletSpeed" : 4,
    btnName: "WpReloadSpeed",
    btnRel : playerWeapon.reloadDelay,
    btnInfo: document.getElementById("iwrs"),
    "bulletSpeed" : 4,
    btn: document.getElementById("wrs"),
    label: document.getElementById("jwrs"),
    labelValue: "0/5",
    price: {
      0: 200,
      1: 800,
      2: 2500,
      3: 4500,
      4: 8000,
    },
    upgradeMaxValue: 5,
    upgradeValue: 0,
  },
  WpShootAndWalk: {
    btnName: "WpShootAndWalk",
    btnRel : playerWeapon.ShootAndWalk,
    btnInfo: document.getElementById("isaw"),
    btn: document.getElementById("saw"),
    label: document.getElementById("jsaw"),
    labelValue: "0/1",
    price: {
      0: 9000,
    },
    upgradeMaxValue: 1,
    upgradeValue: 0,
  },
};




let levelIndex = 1;
GameLevel = worldSetting[levelIndex];
