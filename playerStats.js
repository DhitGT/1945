let money = parseInt(btoa(getCookie("money")));
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
  },
  5: {
    name: "Level 5",
    coinAmount : 100,
    EnemySpawnRate: 3400,
    enemyHp: 70,
    enemySpeed: 3,
    targetKills: 1,
    enemySize : 65,
    worldMap: {
      "1" : "Assets/bg1.png",
      "2" : "Assets/overbg1.png"
    },
    isBossLevel: true,
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
