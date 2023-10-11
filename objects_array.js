let obj1 =[{
    Id : 223,
    course : "cse",
    college : "tmu"
}]


//obj1[0].name = "Aman"

// console.log(obj1);

const returnedTarget = Object.assign(obj1[0].name = "Aman");
console.log(obj1);