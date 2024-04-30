class AnimalClass {
  constructor(kind, name) {
    this.kind = kind;
    this.name = name;
    this.hasEyes = true;
  }

  sayHi() {
    return "HI, bro";
  }
}

export class DogClass extends AnimalClass {
  constructor(kind, name, age) {
    super(kind, name);
    this.hasHuman = true;
    this.age = age;
  }

  sayHi() {
    return super.sayHi() + "! I'm a dog from class!";
  }
}
