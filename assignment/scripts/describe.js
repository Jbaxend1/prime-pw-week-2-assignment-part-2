// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// The variable (name) is established and defined as 'Dane"
// An if statement is used to test the condition if the variable name matches 'Mary'
// Console log is used to display condition test, which is not true in this case.
// Else statement is then tested since previous if statement was false
// Resulting console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Variable secret is established
// Variable 'code' is established with a value of 123
// If statement is then used to test if the exact value of 'code' is '123'
// This is true in which 'secret' is then established as 'super'
// code is then ran as '123' x 2
// Next the new value of code is then ran as a condition in which is checks if it is greater than 250
// The value of code is less than 250 at this point
// in which it doesn't change the variable 'secret' to 'duper'
// console.log output results in 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// isStudent Boolean variable established as being true
// age number variable established as a value of 34
// zip number variable established as 55407
// 
// if statement compound conditional is ran to test is var isStudent is true
// AND if var zip is greater than 8000
// results in console output of 'You're a student on the West Coast!'

// else if conditional isStudent is false OR age is less than 30 runs in the even that first condtional is false
// If this new conditional is true it's console log results in 'What are your hobbies?'

// In the event that both previous conditionals are false another else if is ran
// Conditional isStudent equal to true is ran
// If true it console logs 'Welcome to Prime'

// An else statement is then used to end the chain as a default in the case where all
// previous conditions are false it runs console output of 'How about the weather?'
// In the case of this condtion the final console log is 'Welcome to Prime'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// varaible colorOne and colorTwo are switched per the instructions. 
//colorOne should be 'blue' and colorTwo should be 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// const is a constant in which the value will never change.
// The instructions explicitly say to start with 2 variables
const time = 4;

// The instructions want you to test if both are true
// || implies it is testing as one OR the other being true
// correct operator is && in which both must be true to console log
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
// minAge is listed as a constant rather than a variable
const minAge = 21;

// The conditional should read if(age >= minAge) per the instructions
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

