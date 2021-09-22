var arr = [1,-2,3,-8];
for (var i = arr.length-1; i >= 0; i--) {
    if (arr[i] < 0) {
        arr.splice(i, 1);
    }
}

// i=array.length
//  I told the for loop to go through the length of the array.
console.log(arr)