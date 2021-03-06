// Your code here
// Implement a function called saturdayFun. It should return a String like 
// "This Saturday, I want to ....!"
//  Fill in the ... with the activity that's passed in as the first parameter. 
// If nothing is passed in, default to "roller-skate".
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

// Implement a function called mondayWork. It should return a String like 
// "This Monday, I will ... ." Fill in the ... with the activity that's passed in as the first parameter. 
// If nothing is passed in, default to "go to the office".
function mondayWork(activity = "go to the office") {
    return (`This Monday, I will ${activity}.`);
}

// Implement a function called wrapAdjective
// It should take as parameter a String that will be used to create visual flair
// You may call the parameter whatever you like, but its default value should be "*"
function wrapAdjective(flair = "*") {    
    // Call example: let encouragingPromptFunction = wrapAdjective("!!!")
    // let encouragingPromptFunction = wrapAdjective("!!!") 
    // It should return a function. This "inner" function should:
    // take a single parameter that should default to "special". Name it however you wish.
        return function(adj = "special") {
            return `You are ${flair}${adj}${flair}!`
        }
}

// defines an object called Calculator
// has a JavaScript Object called Calculator as a local variable: 
let Calculator = {
    // that has a function called add
    add() {
        //  calculates 1 + 3:
        return 1 + 3    
    },

   // that has a function called subtract
    subtract() {
        // subtracts 1 - 3
        return 1 - 3 
    },

    // that has a function called multiply
    multiply() {
        // calculates 1 * 3
        return 1 * 3
    },

    // that has a function called divide
    divide() {
        // calculates 10 / 5
        return 10 / 5
    }
}

// Defines a function called actionApplyer
// receives two arguments: a starting integer and an array of functions
function actionApplyer(startInt, arrayOfFunctions) {
    // loop over that array and call each function with our starting argument
                                        // update the argument
    // returns the given starting point, unchanged, when the array is empty:
    arrayOfFunctions.forEach(answer => startInt = answer(startInt));
    return startInt
}