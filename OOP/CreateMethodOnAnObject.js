// Create a Method on an Object

let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() { return "The name of this duck is " + duck.name + "."; }
};
duck.sayName();


let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() { return "This dog has " + dog.numLegs + " legs." }
};

dog.sayLegs();