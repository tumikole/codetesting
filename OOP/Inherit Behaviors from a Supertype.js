function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

// Only change code below this line

let duck = Object.create(Animal.prototype);
duck.eat();


let beagle = Object.create(Animal.prototype);
beagle.eat();