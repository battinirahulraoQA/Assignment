/*
Assignment -3 (Arrays/Datatypes/Operators)

1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students

Expected Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89.0

*/

let studentNames:string[] =["Suresh","Mahesh","Naresh"]
let marks:number[] =[75,80,82]
let updatedMarks:number[]=[]
let sum=0
 console.log("Updated Marks: ")
for(let i:number =0; i<studentNames.length; i++){ 
   let updated = marks[i] + 10;
   updatedMarks[i]= updated 
   sum += updated
   console.log(studentNames[i],updated )
   
}
   let Average = sum/studentNames.length 
   console.log(`Average Marks: ${Average.toFixed(1)}`)