const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`n`);
}



const n = 5;

// looping from in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    console.log(i); // printing the value of i
}



// program to display the sum of natural numbers
let sum = 0;
const n = 100

// looping from i = 1 to n in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i; // sum = sum + i
}

console.log(sum);

var arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];

function foo(arr) {
    var a = [],
        b = [],
        prev;

    arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== prev) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = arr[i];
    }

    return [a, b];

    solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
    function solution(nums) {

        var a = [];
        b = []
        prev;

        nums.sort()
        for (var i = 0; i < nums.length; i++) {
            if (arr[i] !== prev) {
                a.push(arr[i]);
                b.push(1);
            } else {
                b[b.length - 1]++;
            }
            return [a, b];
        }

        const arr = [1, 2, 3, 5, 8, 10];

        const newArray = [];
        for (let i = 0; i < arr.length; i++) {
            newArray[i] = arr[i]++;
        }
        console.log(newArray)
    }