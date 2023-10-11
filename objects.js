//literals
const JSuser = {
    name: "Aman Baranwal",
    class: "Btechcse",
    age: 22,
    address: "Bhadohi"
}
// console.log(JSuser.name);
// console.log(JSuser["name"]);

//--------------------------------------------------------------------------------

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// Expected output: true

// -------------------------------------------------------------------------------

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

obj4 = {...obj1, ...obj2}
// console.log(obj4);


//--------------------------------------------------------------------------------


const user = {
    name: "Naman Baranwal",
    class: "Bcom",
    age: 22,
    address: "Bhadohi"
}

const {address: add} = user
console.log(add);

//json
//random user me api
//json formatter