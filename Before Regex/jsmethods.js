// concat method
function myFunction() {
    var str1 = "Hello ";
    var str2 = "world!";
    var str3 = " Have a nice day!";
    return result = str1.concat(str2, str3);
}
// filter method
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    newArr = [];

    for (age of ages) {
        // console.log(age)
        if (age >= 18) {
            return newArr.push(age)
        }
    }
    return newArr

}
// console.log(checkAdult())

//foeEachmethod

var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
    return fruits
}
console.log(myFunction())