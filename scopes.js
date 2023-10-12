// var c = 200
// let a = 500
// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }
// console.log(a);
// // console.log(b);
// console.log(c);



addOne(5) // no problem

function addOne(num){
    return num + 1
}


addTwo(5) //problem 

const addTwo = function(num){
    return num + 2
}