
Assignment Details

Whiteboard Interview Introduction
This is often a part of a technical interview. The same, Who, How, What, Where, and Why still apply.

Each member of the group should pick a problem and talk through the solution out loud one person at a time. Start by trying to solve the problem without looking at the answer. If you get stuck, explain what you expect as inputs and outputs. Reference the solution if needed to finish talking through the solution.

Fundamentals of Whiteboard Problem:
Make your best attempt at solving the problem
Ask for clarification
Draw a few input outputs (“Yellow” -> “Blue”) to confirm
Think out loud.
Making mistakes is better than doing nothing.
Admit when you don’t know things. “I’m not really sure, but this is how I might start…”
Ask questions when you get stuck or if you start making up functions, “I think strings have a .split() function that does these nice things for me? Is it ok to use this?”.
Be honest about your strengths and weaknesses
When you are done, test your solution, walk through it, try to think of edge cases that would break it.
Don't stop thinking out loud.
Reverse a string (example)
The question:

Write a function that reverses a string.

Example clarifying questions:

JavaScript has a .reverse() method, may I use that? Not for this problem.
Will it ever receive anything other than a string? You may assume it always takes in a string.
Example test cases:

"cat" -> "tac"
hello world -> "dlrow olleh"
"What up?" -> "?pu tahW"
Lessons:

When asked to build something out in a for loop, instantiate outside the loop.
Iterate all the way down to 0 when iterating in reverse
Example Solution:

const stringReverser = originalString => {
    let reversedString = "";
    for (let i = originalString.length - 1; i >= 0; i--) {
        reversedString += originalString[i];
    }
    return reversedString;
}
Conditionals and Mod Operator
Fizz-Buzz
The question:

Write a function that takes in a number. If the number is divisible by 3, return "Fizz". If the number is divisible by 5, return "Buzz". If the number is divisible by both 3 and 5, return "FizzBuzz". Otherwise, just return the number that was passed into the function.

Example clarifying questions:

Will they always be positive integers? Yes.
Should it always return a string? No. It should return a number unless it is returning "Fizz", "Buzz", or "FizzBuzz".
Example test cases:

1 -> 1
2 -> 2
3 -> Fizz
4 -> 4
5 -> Buzz
6 -> Fizz
10 -> Buzz
15 -> FizzBuzz
Lessons:

The Mod operator % returns the remainder
Start with the most specific check first (the three and five) and then go to the other checks. The problem is presented in the opposite order to confuse.
Example Solution:

const fizzBuzz = number => {
    if(number % 15 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number;
    }
}
Leap Year
Write a program that takes in a year (as an integer) and returns true if the year is a leap year. Years that are divisible by 4 are leap years, but years that are divisible by 100 are not leap years, but years that are divisible by 400 are leap years.

Example clarifying questions:

Will they always be positive integers? Yes.
How will years BC be indicated? 0 is the smallest year you need to worry about.
Should it always return a boolean? Yes.
Example test cases:

1999 -> false (normal year)
2004 -> true (divisible by 4)
2100 -> false (divisible by 100)
2000 -> true (divisible by 400)
Lessons:

The Mod operator % returns the remainder
Start with the most specific check first (the 400) and then go to the other checks.
Example Solution:

const leapYear = year => {
    if(number % 400 === 0) {
        return true;
    } else if (number % 100 === 0) {
        return false;
    } else if (number % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
Is it a BLT?
Write a function that accepts an array of ingredients, and determines whether they make a BLT sandwich. An array is a sandwich if the first and last items are both "bread", and the middle contains "bacon", "lettuce" and "tomatoes".

Example clarifying questions:

Will I always receive an array of string? Yes.
Can the sandwich have additional ingredients? Yes, as long as they are inside the "bread"
Can the ingredients be in any order? Yes, any order inside the "bread"
Example test cases:

["bread", "bacon", "lettuce", "blue cheese", "tomatoes", "bread"] --> true
["bread", "lettuce", "bacon", "tomatoes"] --> false (missing "bread" at end)
["bread", "lettuce", "tomatoes", "bacon", "bread"] --> true
["bread", "lettuce", "tomatoes", "bacon", "bread", "cheese"] --> false ("cheese" is outside the "bread")
Example Solution:

const isBLT = ingredients => {
    // Check that we have bread on both sides
    const hasBreadOnBothSides = (
      ingredients[0] === "bread" &&
      ingredients[ingredients.length - 1] === "bread"
    );
    
    // We'll loop through the array looking for each of these ingredients
    // To start, assume we don't have them
    let hasBacon = false;
    let hasLettuce = false;
    let hasTomatoes = false;
    
    for (let item of ingredients) {
       if (item === "bacon") {
         hasBacon = true;
       }
       else if (item === "lettuce") {
         hasLettuce = true;
       }
       else if (item === "tomatoes") {
         hasTomatoes = true;
       }
    }
    
    // It's a BLT if it meets all these conditions
    return (
      hasBreadOnBothSides &&
      hasBacon &&
      hasLettuce &&
      hasTomatoes
    );
}
Move odd numbers back
Prompt

Write a function that takes in an array of numbers and either the word 'odd' or 'even', and then returns a new array containing the same numbers, in the same order, but with all odd or even numbers (based on the word passed in) moved to the end of the array.

Clarifications:

Don't modify the input array!
Assume the array will only contain numbers
If the array is empty, should return an empty array
Numbers moved to the end should be in the order they originally appeared
Example test cases:

[ 0, 6, 3, 1, 4 ], even -> [ 3, 1, 0, 6, 4 ]
[ 0, 6, 3, 1, 4 ], odd -> [ 0, 6, 4, 3, 1 ]
[ ], odd -> [ ]
Example solution:
function moveNumbersBack(list, word) {
  let odds = [];
  let evens = [];
  for (num of list) {
    if (num%2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  }
  if (word === 'odd') {
    return [...evens, ...odds];
  } else {
    return [ ...odds, ...evens];
  }
}
Word Counter
Prompt:

Write a function that takes in two arguments, an array of strings and a string. The function should return the number of times the string is found in the array.

Example clarifying questions:

Will they always be array of strings and a string? Yes.
May I use built in methods like .toLowercase()? Yes
Will the array always have strings? It may be empty, if it is, return 0.
Does capitalization matter? No. You may assume all characters are lowercase.
Example test cases:

["apple", "pizza", "orange", "apple", "sour apple"], "apple" -> 2
["apple", "pizza", "orange", "apple", "sour apple"], "pizza" -> 1
["apple", "pizza", "orange", "apple", "sour apple"], "sour" -> 0
["sour", "soiree", "Sour", "sour", "sour"], "sour" -> 3
[], "banana" -> 0
Interviewer Note: To complicate the problem, allow letters to match even if one is capitalized. Example:

["sour", "soiree", "Sour", "sour", "sour"], "sour" -> 4
Example Solution:

const countWordMatches = (arrayToCheck, wordToCheck) => {
    let wordCount = 0;
    for (let i = 0; i < arrayToCheck.length; i++) {
        if (arrayToCheck[i] == wordToCheck) {
            wordCount++;
        }
    }
    return wordCount;
}
Add Up the Numbers
Prompt:

Write a function that takes in a number. Return the sum of all the numbers from 1 to the number you passed in. For example, if we pass in 4, we'd return 1 + 2 + 3 + 4 = 10.

Example clarifying questions:

Can the number passed in be negative? No.
Can the number be zero? No.
Will it always be a number? Yes.
Example test cases:

addItUp(4) -> 10
addItUp(6) -> 21
addItUp(1) -> 1
Example solution:

function addItUp(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  
  return sum;
}

