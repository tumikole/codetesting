Updating Object Properties
// Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog["name"] = "Happy Coder";
// or
// myDog.name = "Happy Coder";

//   console.log(myDog)





Add New Properties to a JavaScript Object
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

console.log(myDog)





Delete Properties from a JavaScript Object
// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line

// delete myDog["tails"]
// or
delete myDog.tails



Using Objects
for Lookups
// Setup
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];


    // Only change code above this line
    return result;
}
//   console.log(phoneticLookup("bravo"));




Testing Objects
for Properties

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}


Manipulating Complex Objects
var myMusic = [{
            "artist": "Billy Joel",
            "title": "Piano Man",
            "release_year": 1973,
            "formats": [
                "CD",
                "8T",
                "LP"
            ],
            "gold": true
        },
        {
            "artist": "dee",
            "title": "rnb",
            "release_year": 2002,
            "formats": [
                "video",
                "mp3"
            ]


                Accessing Nested Objects
            var myStorage = {
                "car": {
                    "inside": {
                        "glove box": "maps",
                        "passenger seat": "crumbs"
                    },
                    "outside": {
                        "trunk": "jack"
                    }
                }
            };

            var gloveBoxContents = myStorage.car.inside["glove box"];

            //   console.log(gloveBoxContents)



            Record Collection
            // Setup
            var collection = {
                2548: {
                    albumTitle: 'Slippery When Wet',
                    artist: 'Bon Jovi',
                    tracks: ['Let It Rock', 'You Give Love a Bad Name']
                },
                2468: {
                    albumTitle: '1999',
                    artist: 'Prince',
                    tracks: ['1999', 'Little Red Corvette']
                },
                1245: {
                    artist: 'Robert Palmer',
                    tracks: []
                },
                5439: {
                    albumTitle: 'ABBA Gold'
                }
            };

            // Only change code below this line
            function updateRecords(object, id, prop, value) {
                if (prop !== 'tracks' && value !== "") {
                    object[id][prop] = value;
                } else if (prop === "tracks" && object[id].hasOwnProperty("tracks") === false) {
                    object[id][prop] = [value];
                } else if (prop === "tracks" && value !== "") {
                    object[id][prop].push(value);
                } else if (value === "") {
                    delete object[id][prop];
                }
                return object;
            }

            updateRecords(collection, 5439, 'artist', 'ABBA');

            // Use the Spread Operator to Evaluate Arrays In - Place.
            // The ES5 code below uses apply() to compute the maximum value in an array:

            const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
            let arr2;

            arr2 = [...arr1]; // Change this line

            console.log(arr2);

            // Use Destructuring Assignment to Extract Values from Objects
            const HIGH_TEMPERATURES = {
                yesterday: 75,
                today: 77,
                tomorrow: 80
            };

            // Only change code below this line

            const { today, tomorrow } = HIGH_TEMPERATURES;

            // Only change code above this line