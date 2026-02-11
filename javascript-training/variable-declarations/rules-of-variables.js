//Rules of Variables in JavaScript

//storing the data in javascript 
let empName = "rahul"; //string data valid variable
//1) Variable names must not be reserved keywords
//let let = 10; //error: 'let' is a reserved keyword
//2) Variable names must not be literal values
//let true = "rarhul"

//3) Varibale name must not start with a number
// let empName2="rauhl"
// let 2empname="rahul"//error: variable name cannot start with a number

//4) Variable names must not contain special characters
//let empname="rahul" //vslid variable
//let emp@name="rahul" //error: variable name cannot contain special characters except _ and $

//5) Variable names must not contain spaces
//let emp name="rahul" //error: variable name cannot contain spaces
let Name = "rahul"; //valid variable

//6) variables shoudl be uniique
let empame = "rahul"; //valid variable
//let empame="rahul" //error: variable name must be unique

//7) Variable names are case-sensitive
let EmppName = "rahul"; //valid variable
let emppName = "rahul"; //valid variable (different case)

//standards to be followed while naming variables
//1) Variable naming convention:
//regular variables should be in camelCase format
let empAddress = "bangalore"; //valid variable

//constant variables should be in UPPERCASE format
//const PI = 3.14; //valid constant variable
//const speedOfLight = 299792458; //valid constant variable
const SPEED_OF_LIGHT = 299792458; //valid constant variable
//class names should be uper camel case format followed by camelCase
class EmployeeDetails {
    constructor(empId, empName) {}}
//2) Variable names should be meaningful and self-descriptive
let carNumber = "KA01AB1234"; //valid variable