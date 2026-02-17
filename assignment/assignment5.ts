/*Assignment (Conditional Statements & Loops)

Employee Table
S.No Name Base Salary Experience (Years) Year-End Rating (Out of

5)

1Alice Johnson 75000.0 5.1 4.2
2 Bob Smith 68000.0 3.2 3.8
3 Carol Davis 82000.0 7.1 4.5
4 David Brown 90000.0 10.2 2.5
5 Eva Green 60000.0 2.4 3.5

Hike
Rating % of base Salary as variable pay Bonus
> =4.0 15.0 1500
>=3 && < 4 10.0 1200
< 3.0 3.0 300

Extra Perks
Employees with Experience >= 5 Years get extra Reward of 5000; 

There are 5 Employee records. Now Calculate the Hike percentage of each Employee and store the
Values in Map with EmployeeName and HikePercentagevalue and Print them.

Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
Hike % = Hike / Base Salary .*/

interface Emp {
Name :string,
BaseSalary : number,
Experience : number,
Rating:number
}

let empDetail1 : Emp[] = [{Name :"Alice Johnson",BaseSalary:75000.0, Experience:5.1,Rating:4.2},
    {Name:"Bob Smith",BaseSalary:68000.0, Experience:3.2,Rating:3.8},
    {Name:"Carol Davis",BaseSalary:82000.0, Experience:7.1,Rating:4.5},
    {Name:"David Brown",BaseSalary:90000.0, Experience:10.2,Rating:2.5},
    {Name:"Eva Green",BaseSalary:60000.0, Experience:2.4,Rating:3.5}
]

function variablePayAndBonus(rating:number):{variable: number, bonus: number} {
  if(rating>=4){
  return {variable:15, bonus:1500}}
   else if(rating >= 3 && rating < 4){
    return {variable:10, bonus:1200}
  }
  else{
    return {variable:3, bonus:300}
}

} 
console.log(variablePayAndBonus(1))

function getReward(exp:number):number{
    if(exp>=5){
    return 5000}
    else{return 0}
    }

console.log(getReward(1))

// 5) Hike Calculation Function
function calculateHike(emp: Emp): number {

    let payDetails = variablePayAndBonus(emp.Rating);
    let reward = getReward(emp.Experience);

    // Convert percentage to decimal
    let variableAmount = emp.BaseSalary * (payDetails.variable / 100);

    let hike = variableAmount + payDetails.bonus + reward;

    let hikePercent = hike / emp.BaseSalary;

    return hikePercent;
}


// 6) Store in Map
let hikeMap = new Map<string, number>();

for (let emp of empDetail1) {
    let percent = calculateHike(emp);
    hikeMap.set(emp.Name, percent);
}


// 7) Print Output
for (let [name, percent] of hikeMap) {
    console.log(`${name} → Hike %: ${(percent * 100).toFixed(2)}%`);
}