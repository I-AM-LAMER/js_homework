class Pet {
    constructor(name) {
        this.name = name;
    }

    eat() {
        return 'The pet eats';
    }

    sleep() {
        return 'The pet sleep';
    }

    makeSound() {
        return 'The pet make sound';
    }
}

class Cat extends Pet {
    constructor(name) {
        super(name);
    }

    eat() {
        return super.eat();
    }

    sleep() {
        return super.sleep();
    }

    makeSound() {
        return `Cat ${this.name} meows`;
    }
}

class Dog extends Pet {
    constructor(name) {
        super(name);
    }

    eat() {
        return super.eat();
    }

    sleep() {
        return super.sleep();
    }

    makeSound() {
        return `Dog ${this.name} barks`;
    }
}

let cat = new Cat('cat');
let dog = new Dog('dog');

console.log(cat.eat());
console.log(cat.sleep());
console.log(dog.makeSound());