//MATH:-> This is an inbuilt object in javaScript .that has properties and method for mathematical constant and function.

//console.log(Math.random()); // we can generate the random value from this method

//console.log(Math.PI); // From this method we can get thevalue of PI

//console.log(Math.round(2.8)); // from this method we can the round value 

//console.log(Math.round(2.2)); 

//console.log(Math.max(2,1,4,3)); // From this method we can get the maximum value from the given values

//console.log(Math.min(4,2,1,3)); // From this method we can get the minimum value from this the given values

//console.log(Math.abs(-2)); // From this method we can get the absolute value like if we have negative value 
// then this method return positive value and in the positive value case it always return positive value.
//console.log(Math.abs(2));


//STRING

//In javaScript string are two types one is primitive string and another one one is object string
//1. primitive string
//2. object string
// we can check it the type of string using 'typeof' Method.

let lastName = 'Kumar';

let firstName = new String('Rahul');

console.log(lastName);
console.log(firstName);

// console.log(lastName.length());
// console.log(lastName[0]);
// console.log(lastName.includes('kr'));
// console.log(lastName.startsWith('kr'));
// console.log(lastName.startsWith('Ra'));
// console.log(lastName.endsWith('ar'));
// console.log(lastName.toUpperCase());

// let message = 'This is my first message';
// let word = message.split(' '); // this split method retunr the arry of string separately
// console.log(word);
// let second=message.replace('first', 'second');
// console.log(second);

//Template Literal :-> It is a way to create string using backtics intsed of quotes it allow you to :
//1. innsert variable easily using ${}called string interpolation.
//2. write multi-line string without using \n.
// it help us to increate the readabilty of the code.

// let mail = `Hello Kumar 

// Thanks for the oppurtinity
// Regards
// Rahul`;
// console.log(mail);

// let name = "Rahul Kumar";

// let e_mail = `Hii this meaage receive from, ${name}!`;
// console.log(e_mail);

// DATE AND TIME :-> In javascript we use Date and TIme method for get,set and format the date and time.
// Key points
//1. Date is used to create and manage the Date.
//2. Method allow you to get or set the date, time, year etc.
//3. work with timestamps(millisecond,since1947).

// let now = new Date();
// console.log(now);

//Getter :-> we are using this we can get the value using function.

// let now = new Date();

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

//STTER :-> setter is a method in javascript which help to set the value using function/method.

// let now = new Date();

// now.setDate(26);
// now.setFullYear(2001);
// now.setMonth(2);
// console.log(now);

//FORMATING DATE AND TIME

let now = new Date();

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());