let gradYear = 1994;
let highSchool = "Bill Murray High School";

console.log("I graduated from " + highSchool + " in " + gradYear + ".");

//length - returns the length of a string (including spaces)
console.log(highSchool.length);

//lower or uppercase
console.log(highSchool.toUpperCase());
console.log(highSchool.toLowerCase());

console.log(highSchool.split(" ")); //splits the string into an array on each space['Bill', 'Murray', 'High', 'School' ]
console.log(highSchool.slice(0, 11)); // Extracts from highSchool[0] to and including highSchool[11]