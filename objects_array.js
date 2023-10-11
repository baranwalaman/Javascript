let obj1 =[{
    Id : 223,
    course : "cse",
    college : "tmu"
}]


obj1[0].name = "Aman"

// console.log(obj1);

// const returnedTarget = Object.assign(obj1[0].name = "Aman");
// console.log(returnedTarget);

// -------------------------------------------------------------------------------

// let score ={
//     no : 82
// }
// let marks ={
//     marks : 900
// }
// const returnedTarget1 = Object.assign(marks, score);
// console.log(returnedTarget1);

//--------------------------------------------------------------------------

let tinderUser = new Object  //singleton

tinderUser.name="aman"
tinderUser.id=15
tinderUser.age= 22
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.hasOwnProperty("date"));