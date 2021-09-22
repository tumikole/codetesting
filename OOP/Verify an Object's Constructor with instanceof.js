let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

// This instanceof method would
// return true.
////////
crow instanceof Bird;

let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
};

canary instanceof Bird;
// This instanceof method would
// return false.



function House(numBedrooms) {
    this.numBedrooms = numBedrooms;

}
let myHouse = {
    numBedrooms: 5

};

myHouse instanceof House;