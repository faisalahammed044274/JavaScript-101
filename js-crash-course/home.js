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

function calling(name){
    return 'Hey ' + name;
}

// calling('Faisal')
console.log(calling('Faisal')); 
console.log(calling('Ahammed')); 


