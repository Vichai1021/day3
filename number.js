var academy = "Asia Developer Academy";

console.log(academy.length);
console.log(academy.toUpperCase());
console.log(academy.toLowerCase());
console.log(academy.charAt(6));
console.log(academy.indexOf(""));
console.log(academy.lastIndexOf('e'));
console.log(academy.substring(5,14));
console.log(academy.split(" "));

//number exercise
var newNumber = 10.23456789;

console.log(newNumber.toFixed(3)); //for decimal point
console.log(newNumber.toPrecision(3));//for total digits


//math exercise
var anotherNumber = 10.3

console.log(Math.round(anotherNumber));//round down or up based on decimal
console.log(Math.ceil(anotherNumber));//round up
console.log(Math.floor(anotherNumber));//round down
//generate a random number between 0 and 1
console.log(Math.random(anotherNumber));


//random number between 1 and 100

console.log(Math.ceil(Math.random()*100)); //use Math.floor if want range to start from 0
