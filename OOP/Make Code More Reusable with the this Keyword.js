let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() { return "The name of this duck is " + this.name + "."; }
};

/////////



let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() { return "This dog has " + this.numLegs + " legs."; }
};

dog.sayLegs();