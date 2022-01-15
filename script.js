'esversion: 6';
var val = 3;

function Name() {

    var val = 10;
    console.log(val);
}
Name();
let obj = {
    name: "Ajit",
    lastName: "Sharma "
};
console.log(`${obj.name + obj.lastName}`);
//nullish coalescing operator and logical || (or) operator

function chargeAmount() {
    return 10;
}

const message = chargeAmount() || "we are here to learn";
console.log(message);


// 1.Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".


// var scripts = new Array();
// scripts[0] = "PHP";
// scripts[1] = "ASP";
// scripts[2] = "JavaScript";
// scripts[3] = "HTML";

// for (i=0;i<scripts.length;i++)
// {
// document.write(scripts[i] + "<br >");
// }


// for (x=1; x <= 100; x++){
//     if( x % 3 == 0 ){
//         write("Fizz")
//     }
//     if( x % 5 == 0 ){
//         write("buzz")
//     }
//     if( ( x % 3 != 0 ) && ( x % 5 != 0 ) ){
//         write("fizzBuzz")
//     }
// }

function fizzBuzz() {

    let i;
    for (i = 0; i < 100; i++) {
        var arr = new Array(i); //got stuck 
        console.log(arr);

    }
    //console.log(arr);
}
fizzBuzz();

// printing star pattern
const printPattern = (n) => {

    for (let i = 0; i <= n; i++) {
        let star = "*";
        // for (let j=0; j<=i; j++)
        // {
        console.log(`${star}`.repeat(i)); // we used template literals or template strings here.
        // document.write("<p>Hello this is me</p>")

        // } 

    }
};
// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.



printPattern(5);

const firstName = "Mohasin";
const secondName = "ajit";
//simple printing in console
console.log("we are here to do some ques with " + firstName + " and  " + secondName);

//template literals or template strings they both are same.
console.log(`we are here to do some ques with ${firstName} with ${secondName}`);




//For in loop:- 
const student = {
    name: "ajit", // name and roll is property 
    roll: 23
};
// consoling the whole object at a time
for (var mat in student) {
    console.log(`${mat}:${student[mat]}`); // implementing template literals in for...in loop.
}

// Using the for...in loop, we can easily access each of the attribute names (key name )
// for(key in student){
//   console.log(key)
// }

// We can also access the values of each property by using the property name as the index value of the object.
// for(value in student){

//   console.log(student[value]) 
// }

//For..of loop
// The for...in statement is useful for iterating over object properties, but to iterate over iterable objects like arrays and strings, we can use the for...of statement. The for...of statement is a newer feature as of ECMAScript 6. ECMAScript (or ES) is a scripting-language specification created to standardize JavaScript.

const arr = ["Ajit", "Harish", "Satyam", "Mohasin"];
// for(let i = 0 ; i< arr.length;i++){
//   //DO something
// } can be written as:-
for (let i of arr) {
    console.log(i);
}

console.log(".............");

// shorthand property 
let a = 'foo',
    b = 42,
    c = {};

// Shorthand property names (ES2015)
let o = { a, b, c };

// In other words, 
console.log((o.a === { a }.a)); // true

// let a = {
//x: 1, 
// x: 2}
// console.log(a) // {x: 2}