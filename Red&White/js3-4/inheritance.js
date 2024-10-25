// /**
//  Inheritance

//  when a class inherit properties or methods from another class

//  parent class = Super Class

//  child class = Sub Class

//  */

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     greet() {
//         return console.log(`hello ${this.name}`)
//     }
// }

// class Dog extends Animal {
//     constructor(name, type) {
//         super(name)
//         this.type = type
//     }

//     speak() {
//         return console.log(`${this.name} Barks`);
//     }

// }

// let obj = new Dog("Buddy", "Pitbull");

// console.log(obj.name);
// obj.speak()
// obj.greet()

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     greet() {
//         return console.log(`hello ${this.name}`)
//     }
// }

// class Human extends Person {
//     constructor() {
//         super()
//     }
//     greet() {
//         super.greet()
//     }
// }

// let obj = new Human("Rahul", "23");

// obj.greet();

// simple inheritance

// class Animal {
//     speak() {
//         console.log("Animal Speak");
//     }
//     greet() {
//         console.log("hello");
//     }
// }
// class dog extends Animal {
//     speak() {
//         console.log("Dog barks");
//     }
// }

// let obj = new dog();

// Multilevel Inheritance

// class Person{
//     treat(){
//         console.log("Hello person");
//     }
// }

// class Person2 extends Person{
//     meet(){
//         console.log("Hello person2");
//     }
// }

// class Person3 extends Person2{
//     greet(){
//         console.log("hello person3");
//     }
// }

// let obj = new Person3();


// Heirarchical Inheritance

class Person {
    greet() {
        console.log("hello person");
    }
}
class Person2 extends Person {
    greet() {
        console.log("hello person2");
    }
}
class Person3 extends Person {
    greet() {
        console.log("hello person3");
    }
}




