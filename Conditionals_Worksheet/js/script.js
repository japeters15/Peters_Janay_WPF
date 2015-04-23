// Janay Peters
// 04/23/2015
// Conditional Worksheet- Last Chance for Gas

alert ("Lets see if you can make it across the desert with the gas you have in your tank or if you need to fill up now !");

var efficient = prompt ("What is the gas efficiency of your car ? (mpg)"); // I used the mini cooper and I put 30 mpg.

alert ("Your gas tank is 50% full!");

var reading = (2);

var tank = prompt ("How many gallons is your gas tank ?"); // I said 13.2 gallons

var enough = tank / reading ;

console.log (enough);

var gas = enough * efficient;

console.log (gas);


if(gas > 200){
    console.log("You can make it without getting gas!");
}else{
    console.log("You only have" + " " + enough + " " + "gallons of gas in your tank, better get gas now!");
}

