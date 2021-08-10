/*** Section 3 values and variables 


var myName = 'Sonu';
var myAge = 21;

console.log(myAge);  ***/

/**Secton 4 Data type in JS */

//var myName = "sonu";
//console.log(myName);



/**var iAmSonu = true;
console.log(iAmSonu);

//typeof operator
console.log(typeof(iAmSonu)); */

/**var myPhoneNumeber = 999797979;
var myName = "sonu";

console.log(isNaN(myPhoneNumeber));
console.log(isNaN(myName));

if(isNaN(myName)) {
    console.log("plz enter valid phone Number");
} **/


//Nan Practice
/** 
NaN === NaN;  //false
Number.NaN === NaN; //true
isNaN(NaN); //true
isNaN(Number.NaN); //true
Number.isNaN(NaN); //true


console.log(isNaN(Number.NaN)); **/


/** Section 5 Arithmetic operators in Java*/
//what will be the output of 3**3?
//What will be the output, when we add a number and a string? 
//write a program to swap two numbers?
//write a program to swap two numbers without using third variable?


//console.log(3**3);

/**var a = 5;
var b = 10;

var c = b; ///c = 10

b = a; // b = 5
a = c;

console.log("the value of a is" + a);
console.log("the value of b is" + b);  */


//sol 4

/***var a = 5;
var b = 10;

//output b=5 a=10

a = a+b; //a = 15'

b = a - b; //b = 5;

a = a - b;

console.log("the value of a is " + a);
console.log("the value of b is " + b);   **/


//Sectin 4 Control statemens and loops


/*
var tomr = 'sunny';
if(tomr == 'rain'){
    console.log('raincoat needed');


}else{
    console.log('NO raincoat');

}  */


//challenge time

//write a program that works out whether  if a 
//given year is a leap year or not?



/*var year = 2020;
if (year % 4 === 0){
  if(year % 100 === 0){
      if(year % 400 === 0){
          console.log("The year " + year + " is a leap year");

      }else{
          console.log("The year " + year + " is not aleap year");

      }

  }else{
      console.log("The year " + year + " is  a leap year");
  }
}else{
    console.log("The year " + year + " is not a leap year");

} */








/*var year = 2021;
if (year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            console.log("The year " + year + " is a leap year");

        }else{
            console.log("The year " + year + " is not a leap year");

        }

    }else{
        console.log("The year " + year + " is a leap year");
    }

}else{
    console.log("The year " + year + " is not a leap year");
}*/

//What is truthy and falsy values in JavaScript?
//we have a total 5 falsy values in Javascript?
// 0, "",undefined,null, NaN, false** is false anyway

// if (score = 0){
//     console.log("Yay, We won the game");

// }else{
//     console.log("OMG, we loss the game");
// }



//Conditional (Ternary ) operator
// The conditional (ternary) operator is the only Javascript operator  
// that takes three operands
// var age = 19;
// if(age > 18){
//     console.log("you are eligible to vote");

// }else{
//     console.log("you are not eligible to vote");
// }

// var age = 17;
// console.log((age >= 18) ? "you can vote" : "you can't vote");

//Switch statement
//Evalutates an expression, matching the expression's value to a
// case clause, and executes statements associated with that case.

//1st without break statement
// Find the area of circle, triangle and rectangle?

// var area = "circle";
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){

// case 'circle' :
//     console.log("the area of the circle is : " + PI*r**2);
//     break;

//     case 'triangle' :
//         console.log("the area of the triangle is : " + (l+b)/2);
//         break;

//         case 'rectangle' :
//             console.log("the area of the rectangle is : " + (l*b));
//             break;

//             default:
//                 console.log("please enter valid data");

// }

// 4 while loop statement
//The while statement creates a loop that executes a specified statement
// as long as the test condition evaluates to true.

// var num = 0;
 
// while(num <= 1000){
//     console.log(num);
//     num++;
// }

// 5 Do-while loop statement

// var num = 20;

// do{
//     console.log(num);
//     num++;
// }while(num <= 10);


// FOr loop statement


// for(var num = 0; num <= 10; num++){
//     console.log(num);
// }


//6 challenge Time
//JS program to print table for given number (8)?


// for(var num = 1; num <= 10; num++){
//     var tableOf = 8;
//     console.log(tableOf + " * " + num + " = " + tableOf * num);
// }

//Section 5 Functions in JavaScript

// A JS funtion is a block of code designed to perform a particular task

// function sum(){
//     var a = 10, b = 20;
//     var total = a+b;
//     console.log(total);
// }
// sum();

//What is the difference between function parameter and function arguments

// function sum(a,b){
    
//     var total = a+b;
//     console.log(total);
// }
// sum();
// sum(20,30);
// sum(10,80);

//Funtion expressions
//"Function expressions simplu means to create
// a function and put itinto the variable"

// function sum(a,b){
   
//     var total = a+b;
//     console.log(total);
// }
// var funExp = sum(5,15);


//return keyword

// function sum(a,b){
//    return total = a+b;  
// }
// var funExp = sum(5,15);

// console.log(funExp )

//Function expression

// var funExp = function (a,b){
//     return total = a+b;  
//  }
//   var sum = funExp(5,15);
 
//  console.log('the sum of two no is ' + sum  );


// Now its time for Modern Js

//Features of EMACScript 2015 also known as ES6

// LET VS CONST VS VAR

// var myName = "sonu alam";
// console.log(myName);

// myName = "Alam sonu";
// console.log(myName);



// let myName = "sonu alam";
// console.log(myName);

// myName = "Alam sonu";
// console.log(myName);

// const myName = "sonu alam";
// console.log(myName);

// myName = "Alam sonu";
// console.log(myName);

// function biodata(){
//     var myFirstName = "sonu";
//     console.log(myFirstName);


//     if(true){
//         var myLastName = "alam";
//         console.log('inner ' + myLastName);
//         console.log('inner ' + myFirstName);
//     }

//     console.log('innerOuter ' + myLastName);

// }

// biodata();

//Template literals (Template strings)

// JavaScript program to print table for  given number


// for (let num = 1; num<=10; num++){
//     let tableOf = 12;

//     console.log(` ${tableOf} * ${num} = ${tableOf * num}`);
// }


//Default Parameters
//Default function  parameters allow named parameter to be
// initialized with default values if no value or undefined is passed.

// function mult(a,b=5){
//     return a*b;

// }

// console.log(mult(5));


//Fat Arror Function

// console.log(sum());

// function sum() {

//     let a = 5; b = 6;
//     let sum = a+b;
//     return `the sum of the two number is ${sum}`;
// }


//How to convert in into Fat Arrow Function



// const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;



// console.log(sum());


//Section 7 Arrays in Javascript 🤚


//when we use var,we can store only one value at a time.
//when we feel like storing multiple valuesin one variable then
//instead of var, we will use Array

// In JavaScript. we have an Array cclass, and
//arraus are the prototype of this class.

//example



//Traversal in an Array  🙋‍♂️
//navigate through an array
//if we want to get the single data at a time and also
//if we want to change the data


// var myFriends = ['sonu','vinod','monu','alam','sonu','vinod','monu','alam','arjun'];
// console.log(myFriends[myFriends.length - 1]);


//if we want to check the lenght of  elements of an array

// console.log(myFriends.length);

//we use for loop to navigate

// var myFriends = ['sonu','vinod','monu','alam','sonu'];

// for(var i=0; i<myFriends.length; i++){
//  console.log(myFriends[i]);
// }



//After ES6 we have for..in and for..of loop too

//  var myFriends = ['sonu','vinod','monu','alam',];

// for(let elements in myFriends){
//     console.log(elements);
// }

// for(let elements of myFriends){
//     console.log(elements);
// }

//Array.prototype.forEach()
//calls a function for each element in the array

// var myFriends = ['sonu','vinod','monu','alam',];

// myFriends.forEach(function (element, index, array) {
//    console.log(element + " index : " + index + " " + array);
// });

    
//    var myFriends = ['sonu','vinod','monu','alam',];
//  myFriends.forEach((element, index, array) => {
//     console.log(element + " index : " + index + " " + array);
// });

// Array Subsection 2   : 🙋‍♂️ searching and filter in an Array

//Array.prototype.indexOf()🙋

// Returns the first (least) index of an element within the array equal
// to an element, or -1 if none is found. It search the element from the
// 0th index number

//  var myFriendNames = ['sonu','vinod','monu','alam',];

//  console.log(myFriendNames.indexOf("alam", 3));



// Array.protoype.lastIndexOf()🙋
//Returns the last (greatest) index of an element within the array equal
//to an element, or -1 of none is found. It search the element last to first


// var myFriendNames = ['sonu','vinod','monu','alam',];

// console.log(myFriendNames.lastIndexOf("alam",));


// Array.prototype.includes()
// Determines whether the array contains a value.
// returning true or false as appropriate.

// var myFriendNames = ['sonu','vinod','monu','alam'];

// console.log(myFriendNames.includes("alam", 3));

// Array.prototype.find() 🙋‍♀️

// arr.find(callback(element[,index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the
// array satisfies the testing function, or undefined if not found
// only problem is that it return only one element

 
// const prices = [200,300,350,400,500,600];


// price < 400

// const findElem = prices.find((currVal) => {
//    return  currVal < 400;
// });

// console.log(findElem);



// console.log(  prices.find((currVal) => currVal < 400    ) );



// Array .prototype.findIndex() 🙋


// console.log(  prices.findIndex((currVal) => currVal < 400    ) );


// Array.Protoype.filter() 🙋‍♂️

// Returns a new array cntaining all elements of the calllinf
// array for which the provided filteering function returns true.


// const prices = [200,300,350,400,500,600];

// price < 400

// const newPriceTag = prices.filter(( elem, index)  =>   {
//     return elem > 1400;
// } );

// console.log(newPriceTag);

// 3  Array subsection  👉  How to sort an Array

// Array.prototype.sort() 🙋
//return the array. The default sort order is ascending, built
// upon converting the elements into strings,
// then comparing their sequences of UTF-16 code units values.


//  const months = ['March', 'Jan', 'Feb', 'April' 'Dec','Nov'];

//  console.log(months.sort());

// const array1 = [1, 30, 4, 21, 100000, 99];

// console.log(array1.sort());

// However if numbers are sorted as strings
// "25" is bigger than "100", because "2" is bigger than "1"

// Becausee of this, the sort() method will produce an incorrect
// result when sorting numbers.


// 4 Array subsection 👉 Perform CRUD   

// Array.prototype.push() 🙋
// The push() method adds one or more elements to the
// end of an array and returns the new length of the array


// const animals = ['pigs', 'goats', 'sheep'];

// // const count = animals.push('chicken');

// // console.log(animals);
// // console.log(count);

// animals.push('chicken', 'cats', 'cow');
// console.log(animals);

// Array.prototype.unshift() 🙋
// The inshift() method adds one or more elements to the
// beginning of an array and returns the new length of the array.

//const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.unshift('chicken');

// console.log(animals);
// console.log(count);

// animals.unshift('chicken', 'cats', 'cow');
// console.log(animals);


// 2nd example

// const myNumbers = [1,2,3,5];

// myNumbers.unshift(4,6);
// console.log(myNumbers);



// Array.prototype.pop()🙋
// The pop() method removes the last element from an array and returns
// that element. This method changes the length of the array.

// const plants = ['brocolo', 'cauliflower', 'kale', 'tomato', 'cabbage'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);


// Array.protoype.shift()🙋
// The shift() method removes the first element from an array and returns
// that removed element. This method changes the lenght of the array.




// const plants = ['brocolo', 'cauliflower', 'kale', 'tomato', 'cabbage'];

// console.log(plants);
// console.log(plants.shift());
// console.log(plants)

//CHALLENGE TIME 💡 10

// Array.prototype.splice() 🙋
// Adds and/or removes elements from an array.

// 1. Add Dec at the end of an array?
// 2. What is the return value of splice method?
// 3 Update march to March (update) ?
// 4 Delete June from an array?

// const months = ['Jan', 'march', 'April', 'June', 'July'];

//sol1:

// const newMonth = months.splice(months.length,0, "Dec");
// console.log(months);
// console.log(months.length);


//sol2:
//const months = ['Jan', 'march', 'April', 'June', 'July'];
// console.log(newMonth);

//sol3:


// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1, 'june');
    
// console.log(months);
    
// }else{
//     console.log('No such data found');
// }


//sol4:


// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1);
    
// console.log(months);
// console.log(updateMonth);
    
// }else{
//     console.log('No such data found');
// }



// 5 Array Subsection 4 👉 Map and Reduce Method

// Array.prototype.map() 🙋

// let newArray = arr.map(callback(currentValue[, index[, array]])){
    //return element for newArray, after executing something

// }[, thisArg]);

//Returns a new Array containing the results of calling a
// function on every element in this array.

//  const array1 =[1, 2, 9, 16, 25];

//  num > 9

// let newArr = array1.map((curElem, index,arr) =>   {
//      return curElem > 9;
// }  );

// console.log(array1);
// console.log(newArr);


// let newArr = array1.map((curElm, index, arr)    =>  {
//     return `Index no = ${index} and the value is ${curElm} belong to ${arr}`
// })
// console.log(newArr);

// output

// [

// 'Index no = 0 and the value is 1 belong to 1,2,9,16,25',
// 'Index no = 1 and the value is 2 belong to 1,2,9,16,25',
// 'Index no = 2 and the value is 9 belong to 1,2,9,16,25',
// 'Index no = 3 and the value is 16 belong to 1,2,9,16,25',
// 'Index no = 4 and the value is 25 belong to 1,2,9,16,25'
// ]

// let newArrfor = array1.map((curElm, index, arr)    =>  {
//     return `Index no = ${index} and the value is ${curElm} belong to ${arr}`
// })
// console.log(newArrfor);




// 9: Challenge Time 🏳️

//  1: Find the square root of each element in an array?
//  2: Multiply each element by 2 and return only those
//  elements which are greater than 10?

// sol1: 

// let arr = [25, 36, 49, 64, 81];

// let arrSqr = arr.map((curElem )  =>  Math.sqrt(curElem));


// console.log(arrSqr);

//sol2

// let arr = [2, 3, 4, 6, 8];

// let arr2 = arr.map((curElm)  =>   curElm * 2).filter((curElem)  => curElem > 10).reduce((accumulator, curElem) => {
//     return accumulator += curElem;
// });

// console.log(arr2)

// we can use the chaining too



// 👉Reduce  Method
// flatten an array means to convert the 3d or 2d array into a 
// single dimensional array

// The  reduce() method executes a reducer function  (that you provide)
// on each element of the Array, resulting in single output value.

// The reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

// let arr = [5,6,2];

// let sum = arr.reduce((accumulator, curElem, index, arr)  => {
//         return accumulator += curElem;
// })

// console.log(sum);

// let arr = [5,6,2];

// let sum = arr.reduce((accumulator, curElem, index, arr)  => {
//         return accumulator += curElem;
// },7)

// console.log(sum);


// How to flatten an array
//  converting 2d and 3d array into one dimensional array

// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', 'zone_8'],
// ];

// let flatArr =  arr.reduce((accum, currval)   =>  {
//             return accum.concat(currval);
// })

// console.log(flatArr);


// Section 7 STRINGS IN JAVASCRIPT 💪

// A JavaScript string is zero or more characters written inside  quotes.
// JavaScript steings are used for storing and manipulating Text.
// You can use single or double quotes
// Strings can be created as primitives
// from string literals, or as objects , using the string() constructor

// let myName ="sonu alam";
// let myChannelName = 'sonu alam';

// let ytName = new String("Red koffin");

// console.log(myName);
// console.log((ytName));


//👉How to find the length of a string
// String.prototype.length🙋
// Reflects the length of the string

// let myName = "Sonu Alam";
// console.log(myName.length);


// 👉 Escape character

// let anySentence = "We are the so-called \"Vikings\" from the north.";
// console.log(anySentence);

//if you dont want to mess, simply use the alterante quotes

// let anySentence = "We are the so-called 'Vikings' from the north.";
// console.log(anySentence);

//👉 Finding a String in a string

// String.prototype.indexOf(searcbhValue [, fromIndex])🙋
// the indexOf() method returns the index of (the position of) the first
// occurence of a specified text in a string


// const myBioData = 'I am the Sonu Alam';
// console.log(myBioData.indexOf("Sonu"));

// String.prototype.lastIndexOf(searchValue [, fromIndex])🙋‍♂️
// Returns the index within the calling String object of the
// last occurrence of searchValue, or -1 if not found.


// const myBioData = 'I am the Sonu Alam';
// console.log(myBioData.indexOf("Sonu"));

// Searching for a String in a String
// String.prototype.search(regexp) 🙋


// const myBioData = 'I am the Sonu Alam';
// let sData = myBioData.search("Sonu");
// console.log(sData);

//👉 Extracting Strings Parts

// THere are 3 methods for extracting a part of a string:


//slice(start, end)
//substring(start, end)
//substr(start, length)

//The slice() Method 🙋‍♂️
// slice() extracts a part of a string and returns the extracted part
// in a new string.

// The method  takes 2 parameters: the start position,
// and the end position(end not included).


// var str = "Apple, Banana, kiwi";

// let res = str.slice(0,4);
// console.log(res);

// 😃11: CHalllenge Time 🎏

// Display only 280 characters of a string like the
//one used in Twitter?

// let myTweets = "Lorem .................--280 characters";

// let myTweets = myTweets.slice(0,280);
// console.log(myActualTweet);
// console.log(myActualTweet.length);


// The substring() Method 🙋‍♀️
// substring() is similar to slice().

// The difference is that substring() cannot accept
// negative indexes

// var str = "Apple, Banana, kiwi";
// let res = str.substring(7,-2);
// console.log(res);

//The substr() Method 🙋
//substr() is similar to slice()


// var str = "Apple, Banana, kiwi";



// let res = str.substr(-8);
// console.log(res);


// 👉 Replacing String Content()
// String.prototype.replace(searchFor, replaceWith) 🙋‍♂️

// The replace() method replaces a specified value
// with another value in a string.

// let myBioData = 'I am md sonu alam ';


// let replaceData = myBioData.replace('alam', 'Alam');
// console.log(replaceData);

//points to remember
// 1.The replace() method does not change the string
// it is called on. It returns a new string.
//2: By default, the replace() method replaces only
// the first match
//3: By default the replace() method is case sensitive.


//👉 Extracting string characters

// There are 3 methods for extracting string characters:

//charAt(position)
//charCodeAt(position)
//Property access [ ]

// The charAt() Method 🙋‍♂️
// The charAt() method returns the character at a
// specified index (position ) in a string

// let str = "HELLO WORLD";

// console.log(str.charAt(0));

// The charCodeAt() Method 🙋‍♂️
// The charCodeAt() Method returns the unicode of the 
// character at a specified index in a string:
// The method returns a UTF=16 code
// (an integer between - and 65535).

// var str = "HELLO WORLD";
// console.log(str.charCodeAt(0));

//  😄12: Challenge Time 🏳️

//Return the Unicodee of the last character in a string


// let str = "HELLO WORLD";

// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));

//Property Access
// ECMAScriot 5 (2009) allows property access [ ] on strings

// let str = "HELLO WORLD";
// console.log(str[1]);

// 👉 Other useful methods

// let myName = "sonu alam";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());


// The concat() Method 🙋‍♂️

// let fName = 'sonu'
// let lName = 'alam'

// console.log(fName + lName);
// console.log(fName.concat(lName));

//String.trim() 🙋
//THe trim()  Method removes whitespace from both sides of a string

// var str = "       Hello          World!         ";
// console.log(str.trim());


// Converting a String to an ARray
// a string can be converted to an array with the 
// split() method

// var txt = "a,b,c,d,e";
// console.log(txt.split(","));
// console.log(txt.split(" "));
// console.log(txt.split(" | "));


// Section 8 👉 Date and TIme in JavaScript  //

// JavaScript Date objects represent a single moment in time in a  
// platform-independent format . Date objects contain a Number that
//  represents a  milliseconds since 1 January 1970 UTC

// 👉 Creating Date objects
// There are 4 ways to  create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
// // we cannot avoid month section
// new Date(date string)


// new Date() 🙋‍♂️
// Date objects are created with the new Date() constructor.

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

//Date.now()🙋

// Returns the numeric value corresponding to the current time-the number
// of milliseconds elapsed since January 1, 1970 00:00:00 UTC

//console.log(Date.now());



//new Date(year, month, ...)🙋
//7 numbers specify year, month, day, hour, minute, second
// and milliseconds (in that order)
// NOte: JavaScript counts months from 0 to 11.

// January is 0. December is 11.

// var d = new Date(2021, 0, 5, 10, 33, 30, 0);
// console.log(d.toLocaleString());

// new Date(dateString) 🙋
// new Date(dateString) creates a new date object from a date string

// var d = new Date("October 13, 2021 11:13:00");
// console.log(d.toLocaleString());

// new Date(milliseconds) 🙋‍♂️
// new Date(milliseconds)  creates a new object as zero time plus millisecond.



// var d = new Date(0);



// 👉 Dates Method

// const curDate = new Date();

// // how to get individual dates

// // console.log(curDate.toLocaleString());
// // console.log(curDate.getFullYear());
// // console.log(curDate.getMonth());
// // console.log(curDate.getDate());
// // console.log(curDate.getDay());

// // How to set the individual date

// console.log(curDate.setFullYear(2022));
// // The setFullYear() method can optionally set month and day

// console.log(curDate.setFullYear(2022, 10, 5));
// console.log(curDate.setMonth(10));
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());


// 👉 Time Methodds

//  const curTime = new Date();

// // how to get the individual Time

// console.log(curTime.getTime());
// // The getTime()  method returns the number of milliseconds since
// // Janary 1,1970
// console.log(curTime.getHours());
// // THe getHours() method returns the hours of a date as a number
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// how to set the individual Time

// let curTime = new Date();
// //console.log(curTime.setTime());
// // The setTime() method returns the number of milliseconds since January 1, 1970
// console.log(curTime.setHours(5));

// // The setHours() method returns the hours of the date as a number
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));


// Practice TIme



/***Section 9👉 Math Object in JS */

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

//console.log(Math.PI);🙋‍♂️

//console.log(Math.PI);  


// Math.round() 🙋
// returns the value of x rounded to its nearest integer

// let num = 10.5565;
// console.log(Math.round(num));

//Math.pow() 🙋‍♂️
// Math.pow(x,y) returns the value of x to the power of y

// console.log(Math.pow(2,3));
// console.log(2**3);

// Math.sqrt() 🙋‍♂️


// Math.abs() 🙋‍♂️
// Math.abs(x) returns the absolute (positive) value of x


// Math.ceil() 🙋
// Math.ceil(x) returns the value of x rounded up to its nearest integer

// console.log(Math.ceil(4.51));
// console.log(Math.round(4.51));

// Math.floor() 🙋‍♂️
// Math.floor(x)  returns the value of x rounded down to its nearest integer

// console.log(Math.floor(4.7));
// console.log(Math.floor(99.1));

// Math.min()🙋‍♂️

// Math.max()🙋‍♂️

// Math.random() 🙋‍♂️
// Math.random() return a random number between 0 (inclusive), and 1 (exclusive)


//console.log(Math.random()*10);
//console.log(Math.floor(Math.random()*10)); // 0 to 9


// Math.trunc() 🙋‍♂️
// Math.trunc() returns the integer part of a number

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));

//Practice Time

// if the argument is a positive number, Math.trunc() is equivalent to
// Math.floor(),
//otherwise Math.trunc() is equivalent to Math.ceil().



/**Section 👉 10 DOM in JavaScript */

//Section  11 👉 EVENTS in JavaScript//


//HTML events are 'things' that happen to HTML elements.
// Whebn Js is used in HTML pages, JS can react on these events

// SEction 1 ==> 4 ways of writng Events in JavaScript

// 1:using inline events alert();
//2: By calling a function 
//3: using Inline events( HTML onclick="" property and element.onclick)
//4: using Event Listeners (addEvenListener and IE's attachEvent)

//Check the Events HTML File



// 1:using inline events alert();





//2: By calling a function 
// const callingFunction = () => {
//     alert('most common way of writng function');
// }


// //3: using Inline events( HTML onclick="" property and element.onclick)
// const thirdWay = document.getElementById('thirdWay');

// thirdWay.onClick = function () {
//     alert('most common way of writing a funcion');

// }

// //4: using Event Listeners (addEvenListener and IE's attachEvent)
// const fourtWay = document.querySelector('#fourthWay');

// fourtWay.addEventListener('click', () => {
//     alert('I love this way of writing');
// });



// Section 2️⃣: What is Event object?
//Event object is the parent object of the event object.
//for Example
//MouseEvent, focusEvent, KeyboardEvent etc

//section 3️⃣ MOuse Event in JS
// The MouseEvent Object
// Events that occur when the mouse interacts with the 
// document belongs to the MouseEvent Object.


// Section 4️⃣ KeyboardEvent in Javascript
// Events that occur when the user presses a key on the keyboard
// belongs to the KeyBoardEvent Object.
//

//Setion 5️⃣ InputEvents in JS


/**👉 JavaScript Timing Events */

//*********************************************** */

// The window object allows execution of code at specified time intervals.

// These time intervals are called timing events.

// The two key methods to use with JavaScript are:

//setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), nut repeats the execution of the function continuously.


// 👉 object oriented Javascript

// 1️⃣ What is Object Literal?

// Object literal is simply a key:value pair data structure.

// Storing variables and functions together in one container,
// 


// How to create an Object?

//1st Way

// let bioData = {
//     myName : "sonu alam",
//     myAge : 21,
//     getData : function(){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }

// bioData.getData();

// 2nd Way no need ot write functions as well after ES6l

//  let bioData = {
//     myName : "sonu alam",
//     myAge : 21,
//     getData (){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }

// bioData.getData();

//👉 What if we want object as a value inside an object

// let bioData = {
//     myName : {
//         realName : "Sonu",
//         channelName : "redkoffin"
//     } ,
//     myAge : 21,
//     getData (){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }

// console.log(bioData.myName.channelName );




//2️⃣ What is this object?

// The definition of "this" object is that it contain the current context.

// The this object can have different values depending on where it is placed.

// FOr Example 1

// console.log(this);

// It refers to the current context and here window is the global object



//**ECMA 2016/ ES7 */

// Basically only two were introduced 

// 1. Array.prototype.includes
// const colors = ['red','green','blue','white','pink'];
// const isPresent = colors.includes('red');
// console.log(isPresent);



// 2.Exponentiation operator


//console.log(2**2);

// 👉 ES8 2017

// String padding
// Object.values()
//Object.entries()

// const message = "my name is sonu";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padStart(10));



//ES2018

// const person = { name:'Fred', age: 87, degree: 'mcs'};

// const sPerson = {...person};

// console.log(person);
// console.log(sPerson);




//👉 ES 2019
//Array.prototype.{flat,flatMap}
//Object.fromEntries()




///ES 2020

// #1: BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);




// 📰 ADVANCED JAVASCRIPT///



// we need a calculator

// const add = (a,b) => {
//     return a+b;
// }

// const subs = (a,b) => {
//     return Math.abs(a-b);
// }

// const mult = (a,b) => {
//     return a*b;
// }

// const calculator = (num1,num2, operator) => {
//     return operator(num1,num2);
   
// }



// console.log(calculator(5,2,add));

