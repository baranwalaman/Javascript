// function is_array(string){
//     if(toString.call(string) === '[object Array]'){
//         return true
//     }
//     return false
// }
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));





// function array_Clone(arr){
//     let newArr = [...arr]
//     return newArr
// }
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));




// function array_Clone(arr){
//     let newArr = arr.slice(2)
//     return newArr
// }
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));





// const string1 = "Aman"
// const arr = [...string1]
// console.log(arr);




// const string1 = "Aman"
// const arr = Array.from(string1)
// console.log(arr);



// const months = ['Jan', 'Feb', 'March', 'April', 'June'];
// months.splice(4, 1, 'May', 'June');
// console.log(months);


// function is_string(str){
//     if(toString.call(str) === '[object String]'){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(is_string("aman"));
// console.log(is_string([1, 2, 4, 0]));




// function is_Blank(str){
//     if(str.length == 0){
//         return true
//     }
//     return false
// }
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));




// function string_to_array(str){
//     let newString = str.split(" ")
//     return newString
// }
// console.log(string_to_array("Robin Singh"));





let input1 = "Aman is a good boy"
let input = "Aman is a good boy"
let str = [input1, input]
// newStr = str.replaceAll (",", " ")
console.log(str);



// function truncate_string(str, index){
// let newString = str.slice(0, index)
// return newString
// }
// console.log(truncate_string("Robin Singh",4));