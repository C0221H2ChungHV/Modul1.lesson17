class Apple {
    constructor(weight) {
        this.weight = 10;
        this.status = true;
    }
    decrease() {
        this.weight--;
    }
    getWeight() {
        return this.weight;
    }
    // isEmpty() {
    //     return this.status;
    // }
}
class Human {
    constructor(name, weight, gender) {
        this.name = name;
        this.weight = weight;
        this.gender = gender;
    }
    isMale() {
        return this.gender;
    }
    setGender(gender) {
        this.gender = gender;
    }
    checkApple(apple) {
        return apple.weight;
    }
    eat(apple) {
        if (this.checkApple(apple) > 0) {
            apple.decrease();
            this.weight++;
        } else alert('Hết táo!')
    }
    say(str) {
        alert(str);
    }
    getName() {
        return this.name;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }

}
let apple = new Apple();
let adam = new Human('Adam', 60, 'male');
let eva = new Human('Eva', 45, 'female');
adam.eat(apple);
eva.eat(apple);
adam.eat(apple);
eva.eat(apple);
adam.eat(apple);
eva.eat(apple);
adam.eat(apple);
eva.eat(apple);
adam.eat(apple);
eva.eat(apple);
// console.log(apple.weight);
// console.log(adam.weight);

//console.log(adam.say('Hết táo rồi!!'));
// console.log(eva.eat(apple));
console.log(eva.getWeight());

adam.setGender('BD');
let a = adam.isMale();

console.log(a);
console.log(apple.getWeight());

