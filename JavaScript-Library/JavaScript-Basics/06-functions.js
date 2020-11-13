function pacersWon(){
    console.log("Pacers won!");
}
pacersWon()
pacersWon()
pacersWon()
pacersWon()
pacersWon()

function numEntered(num){
    console.log("The number you entered was: ", num);
}
numEntered(5);
numEntered(4);
numEntered(3);
numEntered(2);
numEntered(1);

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}
addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}
subtractTwoNumbers(5, 7);
subtractTwoNumbers(6, 3);
subtractTwoNumbers(21, 12);

function getMyBattingAverage (atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage;
}
console.log(getMyBattingAverage(250, 91));

function add(x, y){
    let sum = x + y;
    return sum; //or return x + y;
}
console.log(add(1,1));

function fullName(first, last){
    let wholeName = first + " " + last;
    return wholeName; //or return first + " " + last;
}
console.log(fullName("Joshua", "Delaney"));

function indianaPrice(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice; //or return 1.07 * quantity * price;
}
console.log(indianaPrice(17, 5));