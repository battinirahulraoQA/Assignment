/*
Assignment-2 (Conditional Statements)

A bank evaluates loan applicants based on the following criteria:
1. Credit Score:
o If the credit score is above 750, the loan is automatically approved.
o If the credit score is between 650 and 750, additional checks are performed.
o If the credit score is below 650, the loan is denied.
2. Income:
o For credit scores between 650 and 750, the customer’s income must be at least $50,000
for the loan to be considered.

3. Employment Status:
o If the customer’s income is at least 50,000, the system checks whether the customer is
employed.
o If the customer is unemployed, the loan is denied.
4. Debt-to-Income Ratio:
o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
o If the DTI ratio is less than 40%, the loan is approved.
o If the DTI ratio is 40% or greater, the loan is denied.

Create common function and then based on below details, print whether user is eligible to get the loan
or not
customerName = "John Doe";
creditScore = 720;
income = 55000.0;
isEmployed = true;
debtToIncomeRatio = 35.0;

*/


interface customerDetails {    // creating interface to define the data type on each key value pair inside the object
    customerName:string,
    creditScore:number,
    income:number,
    isEmployed : boolean,
    deptToIncomeRatio : number
}

let customerData1:customerDetails={    // creating object and assigning the type "customerDetails"
    customerName:"B RAHUL RAO",
    creditScore:651,
    income:51000,
    isEmployed : true,
    deptToIncomeRatio : 400.0
}

let customerData2:customerDetails={    // creating object and assigning the type "customerDetails"
    customerName:"John doe",
    creditScore:651,
    income:51000,
    isEmployed : true,
    deptToIncomeRatio : 4.0
}



function checkLoanEligibility(customer:customerDetails){        //creating a function called checkLoanEligibility and cretaing a variable customer to pass the argument//we can pass the object given above 
    if(customer.creditScore > 750){
        console.log(`${customer.customerName},Your loan is approved.`)
    }
    else if(customer.creditScore < 650){
        console.log(`${customer.customerName},Your loan is denied`)
    }

    else if (customer.creditScore >= 650 && customer.creditScore <=750){
        console.log("Doing additonal Check ");
        if(customer.income <= 50000)
            {
            console.log(`${customer.customerName}Loan denied because salary is less than 50000`)
            }
        else
             {
            console.log(`Income is ${customer.income}, which is greater than the minimum requirement, Now checking if the customer is employed`)
            if (!customer.isEmployed)
                {
                console.log(`${customer.customerName}, Loan denied as you are unemployed`)
                }
            else if(customer.deptToIncomeRatio < 40.0 )
             {
        console.log(`${customer.customerName} is employed and DTI is less than 40 so loan pass`)
             }
            else{
                console.log(`${customer.customerName} LOAN DENIED, DTI is more than 40`)
            }
        }
        }
}
checkLoanEligibility(customerData1)    //calling the function by passing the object as argument
checkLoanEligibility(customerData2)    //calling the function by passing the object as argument

