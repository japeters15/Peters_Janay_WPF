/*
Janay Peters
Expressions Assignment
04/15/2015
 */

var height = prompt("I am calculating the surface area of a home. \nPlease enter the height of room 1");
var width = prompt("Please enter the width of room 1");
var area = height * width;

console.log(area);

alert("the area of room 1 is"+ area);

var height2 =  prompt("Please enter height of room 2");
var width2 = prompt("Please enter width of room 2");

var area2 = height2 * width2;

console.log(area2);

alert("the area of room 2 is"+ area2);

var height3 = prompt("Please enter height of room 3");
var width3 = prompt("Please enter width of room 3");

var area3 = height3 * width3;

console.log(area3);

alert("the area of room 3 is"+ area3);

var answer = [area, area2, area3];

var total= answer[0] + answer[1] + answer[2];
console.log(total);

alert("The total Surface Area for the home is" + total);



