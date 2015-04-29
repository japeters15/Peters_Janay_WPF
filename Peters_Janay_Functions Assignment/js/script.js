//Janay Peters
// 04/29/2015
// Functions Assignment


var car1 = prompt ("Hello, I an conducting a study about gas mileage! Lets say that you have two cars with full tanks of gas, we have to figure out which one could go the furthest distance! What size gallon tank does your first car have?");

var mile = prompt ("What are the average miles per gallon?")

var total = mpg (car1, mile);

function mpg(m, g){
    var distance = m * g;
    return distance;
}

console.log(total);
