//Janay Peters
// 04/22/2015
// Conditionals Assignment

//You and friends are going out for a night on the town, but you have to decide what size vehicle to take,
//and your budget for the night.

alert ("I am trying to figure out if you can chill with friends tonight. If you can, we have to set up your budget!");

var payCheck = prompt ("How much did you make on your pay check this week? (No commas please)"); //Finding out how much they made, I said 2000.

var bills = prompt ("How much in bills do you have to pay this month?"); // My answer was 500, in order to chill!

var leftOver = payCheck - bills; // payCheck (2000) - bills (500) = 1500.

var nightOut = 1000;

console.log (leftOver);

if(bills > nightOut){
    console.log("You can't go out tonight because you don't have enough money.");// I have 1500 left over so I can go out!
}else {
    console.log("Yay, you can chill because you have enough money left over!");
}

alert ("So, if you are able to go out tonight, we have to know how much to spend. Let's set your budget at $50.00!");

var budget = 50;

var overUnder;

var night = prompt ("You and your friends decided to eat at the Grand Floridian Hotel. How much did you spend?")// I spent 50 at the restaurant

console.log (night);


overUnder = (night <= budget) ? "Great, you stayed under budget!" : "Aw, you didn't stay within your budget!"; // I came in right at my budget!

console.log(overUnder);

if (night <= budget && nightOut > 50){
    console.log("You did great planning your night out and sticking to budget!");
}else{
    console.log("You didn't do a great job planning your night out. Lets try to do better next time!");
}