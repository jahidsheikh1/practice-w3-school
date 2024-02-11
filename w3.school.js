// let rendom_name = "valvo"

// let x = 50;

// let f = 10;
// let g = 50;
// document.("demo").innerHTML = x  


// let s = 5;
// let h = 15;
// let k = s + h;
// alert (k);

// let firstneme = "johan"; 
// let lastname = "korim";
// let age = 35;
// console.log(age)

// let firstName = "John", lastName = "Doe", age = 35;


// let poorCountry=['bangladesh','india'];
// let richCountry=['america','canada','Italy'];

// richCountry.push(poorCountry);

// function selpe(){
    
// }



// selpe()
 

 

// let text1 = "20";
// let text2 = "5";
// let result = text1 < text2;

// console.log(result);


// let text1 = "John";
// let text2 = "Doe";
// let text3 = text1 + " " + text2;

// console.log(text3);

// let x = 5 + 5;
// let y = "5" + 5;
// let z = "Hello" + 5;

// console.log(x);
// console.log(y);
// console.log(z);


// let a = 5;
// let x = (100 + 50) * a;

// console.log(x);

// let x = 5; 
// x++;
// let z = x;

// console.log(z);


// let x = 5;
// let z = x ** 2; 

// console.log(z);


// function displayDate() {
//     document.getElementById("demo").innerHTML = Date();
//   }


//   displayDate()

//   document.addEventListener("fullscreenerror", function() {
//     alert("Fullscreen denied")
//   });


//   const name = "W3Schools";
//  let letter = name[2];

//  let text = "I love cats. Cats are very easy to love. Cats are very popular."
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");


// document.getElementById("demo").innerHTML = text;

// const numbers = [1,2,3,4,5,6,];
// let sum = 0;
// numbers.forEach(item => {
// sum = sum + item;
// })

// console.log(sum);

// const number = [1,2,3,4,5,6,];

// let a = number.pop();

// console.log(a);


// const number = [1,2,3,4,5,6,];

// let a = number.push(4);

// console.log(a);


// let text = "HELLO WORLD";
// let char = text[0];



// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);




// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);


// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7);

// let str = "Apple, Banana, Kiwi";
// let part = str.substr(-4);


// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);



// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2);


// let text = "5";
// let padded = text.padEnd(4,"0");
// console.log(padded);


// let text = "Hello world!";
// let result = text.repeat(2);



// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate")
// console.log(index);


// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// document.getElementById("demo").innerHTML = "First number over 18 is " + first;

// function myFunction(value, index, array) {
//   return value > 18;
// }

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const reversed = months.toReversed();

// console.log(reversed);


// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){
// return a - b});


// console.log(points);


// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(){
//   return 0.5 - Math.random()});
//  console.log(points);


//  const points = [41,100,1,5,25,10];

//  points.sort(function(){
//   return 0.5 - Math.random()
//  })


// const numbers = [45, 4, 9, 16, 25];
// let txt = "";


// function myFunction(value, index, array) {
//   txt += value + "<br>";
//   console.log(value);
//   console.log(index);
//   console.log(array);
// }

// numbers.forEach(myFunction);


// const numbers = [45, 4, 9, 16, 25];



// function myFunction(total, value, index, array) {
//   return total + value;;
// }

// const newnumber = numbers.reduce(myFunction);

// console.log(newnumber);

// function getRando(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// console.log(getRando(1,100));



// const students = ["shakil", "hasan", "tamzid", "akash"]; /*array*/

// console.log(students.sort()); 


// const RollNumber =[1,5,8,7,3,10,50,60,4,]; /*array + number*/


// console.log(RollNumber.sort(function(a,b){
//   return b-a;
// })); /* function*/


// function IsLeapYear(year){
//     if((year % 400 === 0) || (( year % 4 === 0 ) $$ ( year % 100 !== 0 ))){
//       console.log();
//     }

// }


// const vowels = [ "a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]; /*array*/

// function CountVowels(sentence){
//   let count = 0;
//   const letters = Array.from(sentence);

//   letters.forEach(function(value){
//     if(vowels.includes(value)){
//       count++;
//     }
//   });
//   return count;
// }

// console.log(CountVowels("i love you shakil"));



// let x = 5;
// let y = 4;

// let a = (x >= 4);

// console.log(a);



// var age = n;
// var voteable = (age 
// <
//  18) 
// ?
//  "Too young" 
// :
//  "Old enough";

// console.log(voteable);



// let text;
// switch (new Date().getDay()) {
//   case 4:
//   case 5:
//     text = "Soon it is Weekend";
//     break;
//   case 0:
//   case 6:
//     text = "It is Weekend";
//     break;
//   default:
//     text = "Looking forward to the Weekend";
// }


// console.log(text);





// const person = {fname:"John", lname:"Doe", age:25};


// for (let x in person) {
//   console.log(person[x]); 

  
// }



// const numbers = [45, 4, 9, 16, 25];


// for (let x in numbers) {
//   console.log(x); 
// }


// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value;

// }


// const person = {fname:"John", lname:"Doe", age:25};


// for (let x in person) {
//   text += person[x];
// }


// Create a Map
// const fruits = new Map();

// Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);



// console.log(fruits.delete("apples"));


// const fruits = new Map([
//   [555, 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);


// let text = "";
// fruits.forEach (function(value, key) {
//   text += key + ' = ' + value;
// })




// let text = "";
// for (const x of fruits.entries()) {
//   text = Text + x;
// } 


// console.log(text);


// let y = "5"; // y is a string 
// let x = "shakil"; // x is a string
// let z = 5555; // z is a number 



// class sakil {
//   constructor(){
//     this.name = name;
//   }
// }



// const sentence = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

// const matches = sentence.match(/a/gi);
// const occurances = matches.length;

// const matches = sentence.match(/a/gi);
// const occurances = matches ? matches.length : 0;

// console.log(occurances);


// const position = sentence.search(/a/i);

// console.log(position);


// let positoon = sentence.search(/ass/i);

// positoon = positoon >= 0 ? positoon : "not found!";

// console.log(positoon);

//  function linearSearch(arr, val){
//   const length = arr.length;

//   for (let i = 0; i < length; i++){
//     if(arr[i] === val){
//       return i;
//     }
//   }
//   return "not fount!";
//  }


//  console.log(linearSearch(["a","b","c","d","e","f","g",],"h")); 


// function longestString(names){
//   let longestWord = '';

//   for( name of names) {
//     if(name.length >  longestWord.length) {
//       longestWord = name;
//     }
//   }


// return [longestWord, names.indexOf(longestWord)];


  
// }

//  console.log(longestString(["A","B","D","d","e","f","g",]));


// const person = {
//   name: "shakil",
//   age: "25"
// }

// person.country = "bangladesh";

// console.log(person);


// const person = {
//   name: "shakil",
//   age: "35"
// }

// person.country = "bangladesh";

// console.log(person);


// const person = {
//   name: " shakil",
//   lname: " hasan",
//   age: 21
// }

// let text = "";

// for (let x in person){
//   text += person [x];
// }

// console.log(text);


// person.firstname + " is " + person.age + " years old."; 

// person["firstname"] + " is " + person["age"] + " years old.";


// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// } 

// let x = "";

// for (let i in myObj.cars) {
//   x += "<h1>" + myObj.cars[i].name + "</h1>";
//   for (let j in myObj.cars[i].models) {
//     x += myObj.cars[i].models[j];
//   }

// }
// console.log(x);


// const person = {
//   firstName: "jahid",
//   lastName: "shakil",
//   age: 25,
//   fullName: function(){
//     return this.firstName + " " + this.lastName;
//   }
// };

// console.log(person.fullName());


// const person = {
//     name: " shakil",
//     lastName: " shakil",
//     age: " 25"
// }

// let txt = "";

// for (let x in person){
//   txt += person[x];
// }

// console.log(txt);


// const person = {
//    firstName: "shakil",
//    lastName: "hasan",
//    language: "ban",
//    get lang(){
//     return this.language;
//    }
// }


// console.log(person.lang);
// return this.firstName + " " + this.lastName;

// const person = {firstNmae: "shakil", lastName: "hasan", age: "19",

// fullName: function (){
//    return this.firstNmae + " " + this.lastName;
// }

// }

// console.log(person.fullName());



// const person = {
//     name: " shakil",
//     lastName: " shakil",
//     age: " 25"
// }

// let txt = "";

// for (let x in person){
//   txt += person[x];
// }

// console.log(txt);


// const person = {
//    firstName: "shakil",
//    lastName: "name",
//    age: "25" 
// }


// let x = "";

// for (let a in person){
//   x += person[a];
// }

// console.log(x);

// const person = {
//   firstName: "shakil",
//   lastName: "hasan",
//   age: 35
// }

// let text = " ";

// for (let x in person){
//    text += person[x];
// }


// console.log(text);


// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }
// let text = "";

// for (let x in myObj.cars){
//   text += "<h2>" + myObj.cars[x].name + "</h2>";
//   for (let j in myObj.cars[x].models){
//     text += myObj.cars[x].models[j] + "<br>";
//   }
// }
// console.log(text);


const number = [ 1, 2, 3, 4, 5, 6,]; //array

// for ( let i=0; i < number.length; i++){
//     console.log(number[i]);
// }

for ( let i=0; i < number.length; i++){
    console.log(number[i]);
}

