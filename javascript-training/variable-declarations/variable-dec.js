//1)initialization of variable
const a = 10; //constant value must be initialized at the time of declaration
let b = 20; //let variable can be initialized later
var c = 30; //var variable can be initialized later


//2)reassignment of variable
// a = 15; //error: cannot reassign a constant variable
b = 25; //reassignment is allowed for let variable
c = 35; //reassignment is allowed for var variable

//3) redeclaration of variable
// const a = 50; //error: cannot redeclare a constant variable
// let b = 60; //error: cannot redeclare a let variable
var c = 70; //redeclaration is allowed for var variable

//4) scope of variable==> where can we use data?
//const and let variables are block-scoped, while var variables are not block scoped

{
    const x = 100;
    let y = 200;
    var z = 300;
    //console.log(x); //100 //allowed to access x inside the block    
    //console.log(y); //200 //allowed to access y inside the block
    //console.log(z); //300//allowed to access z inside the block
}

//console.log(x); //error: x is not defined outside the block
//console.log(y); //error: y is not defined outside the block
console.log(z); //300 //allowed to access z outside the block   
