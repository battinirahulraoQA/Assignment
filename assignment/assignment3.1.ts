/*
Create two arrays:

studentNames = ["Amit","Ravi","Kiran","Neha"]
marks = [32, 67, 48, 90]

Tasks

1️⃣ Add 5 grace marks to each student and store in a new array finalMarks

2️⃣ For each student print:

Amit: 37 - Fail
Ravi: 72 - Pass
Kiran: 53 - Pass
Neha: 95 - Pass


Rule:

Pass if marks ≥ 40

Fail if marks < 40

3️⃣ Count how many students passed

4️⃣ After loop print:

Total Passed: 3
Class Pass Percentage: 75.0%

*/

let studentNames2:string[]=["Amit","Ravi","Kiran","Neha"]
let marks1:number[] = [32, 67, 48, 90]
let finalMarks:number[]=[]
let count=0
console.log(`Updated marks of student:`)
for(let i:number=0;i<studentNames2.length;i++){
      let updatedmarks =marks1[i]+=5
    finalMarks[i]=updatedmarks
    if (finalMarks[i] >= 40){
     console.log(`${studentNames2[i]} : ${updatedmarks} - Pass`)
     count++
    }
    else
        {
        console.log(`${studentNames2[i]} : ${updatedmarks} - Fail`)
        }
}
 
let Percentage = count / studentNames2.length *100
console.log(count)
console.log(`Pass Percentage Is : ${Percentage}`)
