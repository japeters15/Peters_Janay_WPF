//Janay Peters
// 04/29/2015
// Functions Assignment


var car1 = prompt ("Hello, I am conducting a study about gas mileage! Lets say that you have two cars with full tanks of gas, we have to figure out which one could travel the furthest distance! What size gallon tank does your first car have?");

var mile = prompt ("What are the average miles per gallon?")

var total = mpg (car1, mile);

function mpg(m, g){
    var distance = m * g;
    return distance;
}

console.log(total);

var car2 = prompt("Now lets find out what size tank your second car has!");

var mile2 = prompt("What are the average miles per gallon?");


var mpg2 = function(m2 , g2){
    var distance2 = m2 * g2;
    return distance2;
}

var a = mpg2(car2, mile2);

console.log(a);


if (total > a){
    console.log("Your first car will go the furthest!");
}else{
    console.log("Your second car will go the furthest!");
}

