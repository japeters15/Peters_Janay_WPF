// Janay Peters
// 04/23/2015
// Conditional Worksheet- Grade Letter Calculator

alert ("I am trying determine your letter grade in school!");

var grade = prompt ("What is your current grade?"); //I used 95


if (grade > 90){
    console.log("You have a" + " " + grade + " " + ", which means you earned an A in the class!");
}
if (grade >=80 && grade < 90){
    console.log("You have a" + " " + grade + " " + ", which means you earned an B in the class");
}
if (grade >=70 && grade < 80){
    console.log("You have a" + " " + grade + " " + ", which means you earned an C in the class");
}
if (grade >= 60 && grade < 70){
    console.log("You have a" + " " + grade + " " + ", which means you earned an D in the class");
}
if (grade >= 50 && grade < 60 ){
    console.log("You have a" + " " + grade + " " + ", which means you earned an A in the class");
}