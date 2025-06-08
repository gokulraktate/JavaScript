let age = 21
console.log(typeof age);      //number

let age1 = String(age)
console.log(typeof age1);     //string


let abc="20xyz"
let abc1=Number(abc)
console.log(typeof abc1);     //number
console.log(abc1);           //NaN  (Not a Number)


let ab=null
let ab1=Number(ab)
console.log(typeof ab1);     //number
console.log(ab1);           //0


let a=undefined
let a1=Number(ab)
console.log(typeof a1);     //number
console.log(a1);           //NaN


let x=true
let x1=Number(x)
console.log(typeof x1);     //number
console.log(x1);           //1     (1 for True and 0 for False) 


let loggedIn=1
let loggedIn1=Boolean(loggedIn)
console.log(typeof loggedIn1);     //Boolean
console.log(loggedIn1);            //true





// "33" => 33
// "33abc" => NaN
// ture => 1; false => 0;
// 1 => true; 0 => false;
// "" =>false; "Gokul" => true