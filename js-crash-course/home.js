console.log('Hey,This is Faisal.');
// alert('WOW! JavaScript is awesome.');

//Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

var height = 5.6;
console.log(height);

document.getElementById('someText').innerHTML = 'Hello World!';
document.getElementById('name').innerHTML = //greeting();

// prompt("What is your age ?");

// increment
number1 = 10;
number1++;
number1++;
console.log(number1);
// decrement
number1--;
console.log(number1);

// Divide /, multiply *, remainder %

console.log(number1 / 3);

// Increment and Decrement by any number

number1 += 15;
console.log(number1);

//Functions
// a. Create a function
// b. Call a function

function fun(){
    alert('Hey Faisal, This is a function');
    console.log('Function is working');
}

fun(); 

/* Let's Create a function that take in a name 
and says hello followed by your name */

function greeting(){
   var name = prompt('what is your name?');
   var result = 'Hello ' + name; //JS String Concatenation
return result;
}

//How do arguments works in function
//How do we add 2 numbers together in a function

function sumNumbers(num1,num2){
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(12,12);

//While Loops

//  var num = 40;

//  while(num < 100){
//     num+=1;
//     console.log(num);
//  }


//For Loops

for (let num = 0; num < 10; num++){
    console.log(num);
}


//Data Types

let yourAge = 18; //number
let yourName = 'Faisal'; //String
let name = {first:'Faisal',last:'Ahammed'}; //Object
let isMarried = true; //Boolean
let groceries = ['apple','banana','orange']; //array
let random; //undefined
let nothing = null; //value null

//Strings in JavaScript (Common methods)

let fruit = 'Rahim';
let moreFruits = 'banana\napple';
console.log(moreFruits);

console.log(fruit.length);
console.log(fruit.indexOf('as'));
console.log(fruit.slice(0,4));
console.log(fruit.replace('Rah','Kar'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(''));


