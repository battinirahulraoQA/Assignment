/*
Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions */ 

let transactionAmount:number[] =[50000,-2000,3000,-15000,-200,-300,4000,-3000]
let creditTotal:number=0
let debitTotal:number=0
let creditCount=0
let debitCount=0
let susAmount =0
let balance =0
for(let i:number=0; i<transactionAmount.length ;i++){
    balance+=transactionAmount[i]
if(transactionAmount[i]>0){
    creditCount++
    creditTotal+=transactionAmount[i]
}else{
    debitCount++
    debitTotal+=transactionAmount[i]
}
if(transactionAmount[i]>10000 || transactionAmount[i]<-10000){
    susAmount++
}
}
console.log(`1) Total number of credit: ${creditCount} , Total number of debits: ${debitCount}`)
console.log(`2) Total amount credited: ${creditTotal}`)
console.log(`3) Total amount debited: ${Math.abs(debitTotal)}`) //Math.abs(number)
console.log(`4) Total amount remaining at the end in Bank Account ${balance}`)
console.log(`5) Total number Suspicious credit/ debit Transaction with Amount ${susAmount}`)
