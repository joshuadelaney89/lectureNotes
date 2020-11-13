// ****** Relational Operators ******

// Greater Than: >
// Less Than: <
// Less Than or Equal To: <=
// Greater Than or Equal To: >=

// ****** Logical Operators ******

// AND: &&
//OR: ||

// ****** Logical Operators ******
// Equal: ==
// Not Equal: !=

// ****** Strict ******
//Equal: ===
// Not Equal: !==


let age = 15

if (age >= 21) {
    console.log('You can buy alcohol');
}else {
    console.log('You cannot buy alcohol');
}

/* 
CHALLENGE 1
Who's name is longer?


BRONZE

Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.


SILVER

Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.


GOLD

In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
 */

let nameOne = 'Joshua'
let nameTwo = 'Michael'

console.log(nameOne.length);
console.log(nameTwo.length);

if (nameOne.length > nameTwo.length) {
    console.log("My name is longer than Michael's.");
}else {
    console.log("My name is longer than Joshua's.");
}

console.log(`Michael has the longer name by ${nameTwo.length - nameOne.length} letter!`);