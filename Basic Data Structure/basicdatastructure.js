// let simpleArray = ['one', 2, 'three', true, false, undefined, null];
// console.log(simpleArray.length) 
let complexArray = [
    [{
            one: 1,
            two: 2
        },
        {
            three: 3,
            four: 4
        }
    ],
    [{
            a: "a",
            b: "b"
        },
        {
            c: "c",
            d: "d"
        }
    ]
];

// indexOf()
function quickCheck(arr, elem) {
    // Only change code below this line
    if (arr.indexOf(elem) >= 0) {
        return true;
    }
    return false;
}
// Only change code above this line


// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

let nestedArray = [
    ['deep'],
    [
        ['deeper'],
        ['deeper']
    ],
    [
        [
            ['deepest'],
            ['deepest']
        ],
        [
            [
                ['deepest-est?']
            ]
        ]
    ]
];

console.log(nestedArray)