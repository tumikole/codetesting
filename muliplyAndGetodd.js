// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // let multiplyNumbers = num.map(multiplyAndGetOdd)
// const multiplyAndGetOdd = (arr) => {
//     // let oddNums = []

// var sum= []
// for (let i=0; i<arr.length; i++) {
//     // sum = sum * arr[i] * 3;
//     sum.push(arr[i] * 3)
// } 
// return sum.filter(element => element % 2 !== 0);
// }


let numberSet = [1,2,3,4];
let numberSet1 = [5,6,7,8];
let numberSet2 = [9,10,11,12];

const multiplyAndGetOdd = (number) => {
    // let oddNums = []
    let results = number.map((singleNum) => {
        return singleNum * 3
    })
    console.log(results)
    console.log( results.filter(item => item % 2 !== 0 ))
}
multiplyAndGetOdd(numberSet)
multiplyAndGetOdd(numberSet1)
multiplyAndGetOdd(numberSet2)


