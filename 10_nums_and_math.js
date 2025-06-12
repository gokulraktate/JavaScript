// Numbers

const score=400
console.log(score);


const bal=new Number(100)
console.log(bal);
console.log(bal.toString());
console.log(bal.toFixed(2));

const val=234.373382
console.log(val);
console.log(val.toFixed(1));


// Maths
// Math library is in built in JS

console.log(Math);
console.log(Math.abs(-12));
console.log(Math.round(4.7));

console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));

console.log(Math.min(1,2,6,8,3));
console.log(Math.max(1,2,6,8,3));

console.log(Math.random());         //always random value bet 0 to 1

console.log(Math.random()*10);      //0 to 10
console.log(Math.random()*100);      //0 to 100

const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min+1)) + min);
