//data types in javascript twpe of data types in javascript
//1) primitive data types: number, string, boolean, null, undefined, symbol
//2) non-primitive data types: object, array, function


//mutable and immutable data types in javascript
//1) mutable data types: object, array, function
//2) immutable data types: number, string, boolean, null, undefined, symbol


//Mutable(we can't change the original data)
let a=10;
a+10;
console.log(a); //10 //number is immutable data type


//immutable (we are changing th original data)
let obj = {
    "name":"rahul",
    "id":1234
};
obj.age=20; //object is mutable data type
console.log(obj)

//backticks are used to create template literals in JavaScript, which allow for easier string interpolation and multi-line strings. Template literals are enclosed by backticks (`) instead of single or double quotes.
let name = "rahul";
let age = 20;
console.log(`My name is ${name} and I am ${age} years old.`); //My name is rahul and I am 20 years old.


//1) object is a collection of key-value pairs. It is a non-primitive data type in JavaScript. Objects can contain properties and methods. Properties are the values associated with an object, while methods are functions that can be called on an object.
let person = {
    name: "rahul",
    age: 20,
    empId:1234,