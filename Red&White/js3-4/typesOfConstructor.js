class Car {
    constructor() {
        this.name = "Toyota",
            this.modal = "1991"
    }
}

let obj = new Car();

console.log(obj);
console.log(obj.modal);

class Animal {
    constructor(type, name) {
        this.type = type
        this.name = name
    }

    info() {
        return console.log(`This is my ${this.type} call him/her ${this.name}`);
    }
}

let pet = new Animal("Dog", "buddy");
let pet2 = new Animal("cat", "meow");


pet.info();
pet2.info();

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    copy() {
        return new Person(this.name, this.age);
    }
}

let person = new Person("Rahul", "23");
let person2 = person.copy();

console.log(person.name);
console.log(person.age);
console.log(person2.name);
console.log(person2.age);

class Human {
    constructor(name, age) {
        this.name = name || "Guest"
        this.age = age >= 0 ? age : "invalid"
    }
}

let human = new Human("Ruchit", "18");
console.log(human.name);
console.log(human.age);

let human2 = new Human();

console.log(human2.name);
console.log(human2.age);





