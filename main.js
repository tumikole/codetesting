// class Person {
//     constructor(name, surname, age) {
//         this.name = name
//         this.surname = surname
//         this.age = age
//     }
// }
// let Person1 = new Person("tumisang", "ramollo", 31);
// let Person2 = new Person("dee", "mguni", 28);

// console.log(Person2)


// var numbers = [1, 2, 3, 4, 5];

// for (var i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// } 

let value = 0;
const numbers = [5, 10, 15];

for (let i = 0; i < numbers.length; i++) {
    value += numbers[i];
    // console.log(numbers[i]);
}
console.log(value)
// const value = 0;
// const numbers = [5, 10, 15];

// const reducer = (acc, s) => {
// return acc + s;
// }

// const total = numbers.reduce(reducer, value);

// console.log(total);