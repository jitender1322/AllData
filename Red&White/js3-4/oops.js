class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }

    greet() {
        return console.log(`hello ${this.name} your age is ${this.age}`);
    }
}

let obj = new Person("Jitender", "23");

obj.greet();

class Car {
    constructor(modal, brand) {
        this.modal = modal,
            this.brand = brand
    }

    info() {
        return console.log(`${this.modal} is from ${this.brand}`);
    }
}

let obj2 = new Car("swift", "maruti suzuki");

obj2.info();