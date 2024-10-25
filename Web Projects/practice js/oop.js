class demoClass {

    constructor(car, model) {
        this.model = model
    };

    startEngine() {
        console.log(`${this.model} engine started`);
    };

    stopEngine() {
        console.log(`${this.model} engine stoped`);
    }
}

let obj = new demoClass("swift", "2025");

obj.startEngine();
obj.stopEngine();