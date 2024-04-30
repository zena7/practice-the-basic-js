// class LinkedListNode {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// class LinkedList {
//   head = null;

//   addInStart(value) {
//     let node = new LinkedListNode(value, this.head);
//     this.head = node;
//   }
// }

// let linked = new LinkedList();
// console.log("L", linked);
// linked.addInStart(5);
// linked.addInStart(1);

// // console.log("List", linked);
// // console.log("head", linked.head);

// let array = [1, 2, 4, 5, 1, 1, -1];
// let stringg = "Hello";
// let set = new Set(stringg);
// // console.log(Array.from(set, (i) => -i));
// console.log(set);

const privateData = new WeakMap();

class CoffeeMachine {
  constructor() {
    privateData.set(this, {
      waterLimit: 200,
    });

    privateData.get(this).checkWater = function (value) {
      if (value < 0) throw new Error("Отрицательный уровень воды");
      if (value > this.waterLimit) throw new Error("Слишком много воды");
    }.bind(privateData.get(this));
  }

  pourWater(value) {
    const data = privateData.get(this);
    data.checkWater(value);
    console.log("Вода добавлена");
  }
}

const machine = new CoffeeMachine();
// machine.pourWater(150); // Вода добавлена
// machine.pourWater(190); // Error: Слишком много воды

function lengthOfLastWord(string) {
  // let length = 0;
  // const space = " ";

  // for (let i = string.length - 1; i >= 0; i -= 1) {
  //   let current = string[i];

  //   if (length === 0 && current === space) {
  //     continue;
  //   } else if (current === space) {
  //     return length;
  //   } else {
  //     length += 1;
  //   }
  // }

  // return length;

  return string.split(" ").at(-1);
}

console.log("LENGTH", lengthOfLastWord("   fly me   to   the moon  "));
// Примеры:
// Ввод: s = "Hello World"
// Вывод: 5
// Объяснение: Последнее слово строки s "World" имеет длину 5.

// Ввод: s = "   fly me   to   the moon  "
// Вывод: 4
// Объяснение: Последнее слово строки s "moon" имеет длину 4.

["", "", "", "fly", "me", "", "", "to", "", "", "the", "moon", "", ""];

export const encoded = [
  {
    groupId: 783,

    areaId: "0",
    departmentId: "688",
    directionId: "0",
    mediaTypeId: "0",
    mediaId: "676",
    resellingId: "18842",
    serviceTypeId: "124",
    formatTypeId: "0",
    formatId: "0",
    unitId: "82226",
    platformId: "0",
    budgetId: null,
    adPlatformId: "1026",
    service: null,
    formatSize: null,
    ca: null,
    mpmId: null,
  },
  {
    groupId: 784,

    areaId: "0",
    departmentId: "688",
    directionId: "0",
    mediaTypeId: "0",
    mediaId: "676",
    resellingId: "18842",
    serviceTypeId: "124",
    formatTypeId: "0",
    formatId: "0",
    unitId: "82226",
    platformId: "0",
    budgetId: null,
    adPlatformId: "1026",
    service: null,
    formatSize: null,
    ca: null,
    mpmId: null,
  },
  {
    groupId: 785,

    areaId: "0",
    departmentId: "688",
    directionId: "0",
    mediaTypeId: "0",
    mediaId: "676",
    resellingId: "18842",
    serviceTypeId: "124",
    formatTypeId: "0",
    formatId: "0",
    unitId: "82226",
    platformId: "0",
    budgetId: null,
    adPlatformId: "1026",
    service: null,
    formatSize: null,
    ca: null,
    mpmId: null,
  },
  {
    groupId: 786,

    areaId: "0",
    departmentId: "688",
    directionId: "0",
    mediaTypeId: "0",
    mediaId: "676",
    resellingId: "18842",
    serviceTypeId: "124",
    formatTypeId: "0",
    formatId: "0",
    unitId: "82226",
    platformId: "0",
    budgetId: null,
    adPlatformId: "1026",
    service: null,
    formatSize: null,
    ca: null,
    mpmId: null,
  },
  {
    groupId: 787,

    areaId: "0",
    departmentId: "688",
    directionId: "0",
    mediaTypeId: "0",
    mediaId: "676",
    resellingId: "18842",
    serviceTypeId: "124",
    formatTypeId: "0",
    formatId: "0",
    unitId: "82226",
    platformId: "0",
    budgetId: null,
    adPlatformId: "1026",
    service: null,
    formatSize: null,
    ca: null,
    mpmId: null,
  },
  {
    groupId: 788,

    areaId: "0",
    departmentId: "688",
    directionId: "18858",
    mediaTypeId: "111",
    mediaId: "676",
    resellingId: "18842",
    serviceTypeId: "124",
    formatTypeId: "15130",
    formatId: "0",
    unitId: "82226",
    platformId: "0",
    budgetId: null,
    adPlatformId: "1026",
    service: null,
    formatSize: null,
    ca: null,
    mpmId: null,
  },
  {
    groupId: 789,

    areaId: "0",
    departmentId: "688",
    directionId: "18858",
    mediaTypeId: "111",
    mediaId: "676",
    resellingId: "18842",
    serviceTypeId: "124",
    formatTypeId: "15152",
    formatId: "0",
    unitId: "82226",
    platformId: "0",
    budgetId: null,
    adPlatformId: "1026",
    service: null,
    formatSize: null,
    ca: null,
    mpmId: null,
  },
  {
    groupId: 790,

    areaId: "0",
    departmentId: "688",
    directionId: "18858",
    mediaTypeId: "111",
    mediaId: "676",
    resellingId: "18842",
    serviceTypeId: "124",
    formatTypeId: "15130",
    formatId: "0",
    unitId: "82226",
    platformId: "0",
    budgetId: null,
    adPlatformId: "1026",
    service: null,
    formatSize: null,
    ca: null,
    mpmId: null,
  },
  {
    groupId: 791,

    areaId: "0",
    departmentId: "688",
    directionId: "18858",
    mediaTypeId: "111",
    mediaId: "676",
    resellingId: "18842",
    serviceTypeId: "124",
    formatTypeId: "15130",
    formatId: "110639",
    unitId: "82226",
    platformId: "145868",
    budgetId: null,
    adPlatformId: "1557",
    service: null,
    formatSize: "не применим",
    ca: null,
    mpmId: null,
  },
  {
    groupId: 792,

    areaId: "0",
    departmentId: "688",
    directionId: "18858",
    mediaTypeId: "111",
    mediaId: "676",
    resellingId: "18842",
    serviceTypeId: "124",
    formatTypeId: "15130",
    formatId: "110639",
    unitId: "82226",
    platformId: "145868",
    budgetId: null,
    adPlatformId: "1026",
    service: null,
    formatSize: "не применим",
    ca: null,
    mpmId: null,
  },
  {
    groupId: 793,

    areaId: "0",
    departmentId: "688",
    directionId: "18858",
    mediaTypeId: "111",
    mediaId: "676",
    resellingId: "18842",
    serviceTypeId: "124",
    formatTypeId: "15152",
    formatId: "82193",
    unitId: "82226",
    platformId: "0",
    budgetId: null,
    adPlatformId: "1026",
    service: null,
    formatSize: "Не применимо",
    ca: null,
    mpmId: null,
  },
];

export const translations = {
  0: "",
  111: "СММ",
  124: "Размещение",
  676: "Диджитал",
  688: "Маркетинг",
  1026: "Telegram",
  1557: "Посевы",
  15130: "СММ - 2",
  15152: "Баннеры",
  18842: "Нет",
  18858: "СММ - 3",
  82193: "Баннеры",
  82226: "Фикс",
  110639: "Статья",
};

function decoded(data, dictionary) {
  const uniqueIds = {};

  const checkForUnique = (key) => {
    const excludeKeys = "groupId service formatSize ca";
    const includeTarget = (value, target = "Id") => value.includes(target);

    if (
      includeTarget(key) &&
      !(key in uniqueIds) &&
      !includeTarget(excludeKeys, key)
    ) {
      uniqueIds[key] = key;
    }
  };

  function convert(obj) {
    for (let key in obj) {
      checkForUnique(key);

      let current = obj[key];
      if (current in dictionary) {
        obj[key] = dictionary[current];
      }
    }
  }

  for (let i = 0; i < data.length; i += 1) {
    convert(data[i]);
  }

  return Object.values(uniqueIds);
}

// console.log("Decoded", decoded(encoded, translations));
function getData() {
  fetch("https://open.er-api.com/v6/latest/USD")
    .then((response) => response.text())
    .then((data) => console.log(typeof data, data));
  // https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP
}
getData();
