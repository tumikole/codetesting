const { CLIENT_RENEG_LIMIT } = require("node:tls");

// THe equality Operator
function testEqual(val) {
    if (val == 12) {
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

  console.log(testEqual(10))


//   The Strict Operator
  function testStrict(val) {
    if (/*val to*/val === 7) {
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log(testStrict(10));


  //comparing different values
  function compareEquality(a, b) {
    if (/*a == b to*/ a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log(compareEquality(10, "10"));


  //Comparison with the Inequality Operator
    function testNotEqual(val) {
    if (/*val to*/val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  console.log(testNotEqual(10));


  //Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
    if (/*val to*/val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  console.log(testStrictNotEqual(10));


  //Comparison with the Greater Than Operator
  function testGreaterThan(val) {
    if (/*val to*/val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (/*val to*/val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  console.log(testGreaterThan(10));

  //Comparison with the Greater Than Or Equal To Operator
  function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  console.log(testGreaterOrEqual(10));


  //Comparison with the Less Than Operator
  function testLessThan(val) {
    if (/*val to*/val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (/*val to*/val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  console.log(testLessThan(10));

  //Comparison with the Less Than Or Equal To Operator
  function testLessOrEqual(val) {
    if (/*val to*/val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (/*val to*/val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  console.log(testLessOrEqual(10));


  //Comparisons with the Logical And Operator
  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val) {
      if (val) {
        return "Yes";
      }
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);

  answer:
    function testLogicalAnd(val) {  
    if (val <= 50 && val >= 25) {
     
        return "Yes";
      
    }
      return "No";
  }
  
  testLogicalAnd(10);

  //Comparisons with the Logical Or Operator
    function testLogicalOr(val) {
  
    if (val) {
      return "Outside";
    }
  
    if (val) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);

  answer:
  function testLogicalOr(val) {
    if (val < 10 || val > 20) {
      return "Outside";
    }
      return "Inside";
  }
    testLogicalOr(15);

    //Introducing Else Statements
    function testElse(val) {
        var result = "";
        // Only change code below this line
      
        if (val > 5) {
          result = "Bigger than 5";
        }
      
        if (val <= 5) {
          result = "5 or Smaller";
        }
      
        // Only change code above this line
        return result;
      }
      
      testElse(4);

      abswer:
      function testElse(val) {
        var result = "";
        if (val > 5) {
          result = "Bigger than 5";
        } else {
            result = "5 or Smaller";
        }
        return result;
      }
      
      console.log(testElse(4));


      //Introducing Else If Statements

      function testElseIf(val) {
        if (val > 10) {
          return "Greater than 10";
        }
      
        if (val < 5) {
          return "Smaller than 5";
        }
      
        return "Between 5 and 10";
      }
      
      testElseIf(7);

      answe:
      function testElseIf(val) {
        if (val > 10) {
          return "Greater than 10";
        } 
      
        else if (val < 5) {
          return "Smaller than 5";
        } else {
      
        return "Between 5 and 10";
      }
      }
      
      console.log(testElseIf(7));

      //Logical Order in If Else Statements
      function orderMyLogic(val) {
        if (val < 10) {
          return "Less than 10";
        } else if (val < 5) {
          return "Less than 5";
        } else {
          return "Greater than or equal to 10";
        }
      }
      
      orderMyLogic(7);

      answer:
      function orderMyLogic(val) {
        if (val < 5) {
          return "Less than 5";
        } else if (val < 10) {
          return "Less than 10";
        } else {
          return "Greater than or equal to 10";
        }
      }
      
      console.log(orderMyLogic(4));
      console.log(orderMyLogic(6));
      console.log(orderMyLogic(11));


      //Chaining If Else Statements
      function testSize(num) {
        // Only change code below this line
      
      
        return "Change Me";
        // Only change code above this line
      }
      
      testSize(7);

      answer:
      function testSize(num) {
        if (num < 5) {
          return "Tiny";
        } else if (num < 10) {
          return "Small";
        } else if (num < 15) {
          return "Medium";
        } else if (num < 20) {
          return "Large";
        } else {
          return "Huge";
        }
    }

//Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

caseInSwitch(1);

    answer:
    function caseInSwitch(val) {
      var answer = "";
    switch (val) {
      case 1:
      return "alpha";
      break;
      case 2:
      return"beta";
      break;
      case 3:
      return"gamma"; 
      break; 
      case 4:
      return"delta";
      break;
    }

    return answer;
}


caseInSwitch(1);


//Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

switchOfStuff(1);


switchOfStuff(1);

answer:
function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case ("a"): 
    return "apple";
    break;
    case ("b"):
      return "bird";
      break;
      case ("c"):
        return "cat";
  break;
  case ("d"):
    return "stuff";
    break;
  case 4:
    return "stuff";
    break;
    default:
      answer = "stuff"
      
        return answer;
      }
      
      
      
    }


    //Return Early Pattern for Functions
function abTest(a, b) {
  // Only change code below this line


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(0,0));

answer:
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(0,0));



//Counting Cards

var count = 0;

function cc(card) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

answer:
let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
cc(2); cc(3); cc(7); cc('K'); cc('A');


//Build JavaScript Objects
var myDog = {
  // Only change code below this line
  
  // Only change code above this line
  };

  answer:
  var myDog = {
    name: "Bobby",
    legs: 4,
    tails: 1,
    friends: ["dogs", "people"]
    };




    //Accessing Object Properties with Dot Notation
    // Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj;      // Change this line
var shirtValue = testObj;    // Change this line

answer:
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat;      
var shirtValue = testObj.shirt;   


//Accessing Object Properties with Bracket Notation
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj;   // Change this line
var drinkValue = testObj;    // Change this line

answer:
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"];   
var drinkValue = testObj["the drink"];    



//Accessing Object Properties with Variables
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber;       // Change this line
var player = testObj;   // Change this line

answer:
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;     
var player = testObj[playerNumber]; 


//Updating Object Properties
// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

answer:
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

// console.log(myDog)