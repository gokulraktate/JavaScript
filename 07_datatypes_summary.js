// Primitive  (Call by value datatypes)
// total 7

/*

1 String
2 Number
3 Boolean
4 Null
5 Undefined
6 Symbol (for unique value)
7 BigInt

*/

const val= "Gokul"
const value=22
const LoggedIn = false
const temp = null
let score;
const id = Symbol('123')    //unique
const Anotherid = Symbol('123')    //not equal to id

const bigNumber = 181818283783020n


// Reference (Non Primitive)

// 1 Array
// 2 Objects
// 3 Functions


const heros = ["Ironman" , "Thor" , "Thanos"]

let myobj={
    name:"Gokul",
    age:22
}


const myfun= function(){
    console.log("Hello World");
}