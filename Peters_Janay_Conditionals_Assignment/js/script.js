//Janay Peters
// 04/22/2015
// Conditionals Assignment

//You and friends are going out for a night on the town, but you have to decide what size vehicle to take,
//and your budget for the night.

alert ("I am trying to figure out if you can chill with friends tonight. If you can, we have to set up your budget!");

var payCheck = prompt ("How much did you make on your pay check this week?");

var bills = prompt ("How much in bills do you have to pay this month?");

var leftOver = payCheck - bills;

var nightOut = 1000;

console.log (leftOver);

if(bills > nightOut){
    console.log("You can't go out tonight because you don't have enough money.");
}else {
    console.log("Yay, you can chill because you have enough money left over!");
}

alert ("So, if you are able to go out tonight, we have to know how much to spend. Let's set your budget at $50.00!");

var budget = 50;

var overUnder;

var night = prompt ("You and your friends decided to eat at the CheeseCake Factory. How much did you spend?")

console.log (night);


overUnder = (night <= budget) ? "Great, you stayed under budget!" : "Aw, you didn't stay within your budget!";

console.log(overUnder);
