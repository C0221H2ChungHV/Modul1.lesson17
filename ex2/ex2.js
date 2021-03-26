class Apple {
    constructor(weight) {
        this.weight = 10;
    }

    decrease() {
        if (this.weight>0) {
            this.weight--;
        }
    }

    isEmpty() {
        if (this.weight > 0) {
            return true;
        } else {
            return false;
        }
    }
    getWeight() {
        return this.weight;
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
        this.speaking ="";
    }

    isMale(gender) {
        return gender;
    }
    setGender(input) {
        this.gender = input;
    }
    setWeight(input) {
        this.weight = input;
    }

    getWeight() {
        return this.weight;
    }

    eatApple() {
        apple.isEmpty();
        apple.decrease();
        this.weight++;
        return this.weight;
    }
    saySomething(str) {
        this.speaking += str;
        return this.speaking;
    }
}

let apple = new Apple();
let adam = new Human("Adam", "Male", 60);
let eva = new Human("Eva", "Female", 50);
adam.eatApple();
eva.eatApple();
console.log(adam.getWeight());
console.log(eva.getWeight());
console.log(apple.getWeight());