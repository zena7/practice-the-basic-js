export function Animal({ kind, name }) {
  this.kind = kind;
  this.name = name;
  this.hasEyes = true;
}

Animal.prototype.sayHi = function () {
  return "HI, bro";
};

export function Dog({ kind, name, age }) {
  Animal.call(this, { kind, name });
  this.hasHuman = true;
  this.age = age;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Переопределяем метод sayHi для класса Dog
Dog.prototype.sayHi = function () {
  return Animal.prototype.sayHi() + "! I'm a dog!";
};

export function Parent(score = 0) {
  this.score = score;
}
Parent.prototype.add = function () {
  return ++this.score;
};
Parent.prototype.minus = function () {
  return --this.score;
};

export function _extend(Child, Parent) {
  // Child.prototype = Object.create(Parent.prototype);
  Child.prototype = createObj(Parent.prototype);
  Child.prototype._super = Parent;
  Object.defineProperty(Child.prototype, "constructor", {
    value: Child,
    enumerable: false,
    writable: true,
  });
  // Child.prototype.constructor = Child;

  return Child;
}

function createObj(proto) {
  if (proto === null || proto === undefined || typeof proto !== "object") {
    throw new TypeError("proto must be object");
  }
  const newObj = {};
  return Object.setPrototypeOf(proto, newObj);
}
