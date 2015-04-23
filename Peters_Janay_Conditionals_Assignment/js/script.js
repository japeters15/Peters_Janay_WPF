//Janay Peters
// 04/22/2015
// Conditionals Assignment

//You and friends are going out for a night on the town, but you have to decide what size vehicle to take,
//and your budget for the night.

alert ("I am trying to figure if you can go out with friends tonight. If you can, we have to set up your budget!");

var payCheck = prompt ("How much did you make on your pay check this week?");

var bills = prompt ("How much in bills do you have to pay this month?");

var leftOver = payCheck - bills;

var nightOut = true

console.log (leftOver);

if(nightOut){
    console.log("You can go out tonight")
}
