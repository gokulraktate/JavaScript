let a = 10;
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);



if (true) {
  let a1 = 10;
  const b1 = 20;
  var c1 = 30;
}

// console.log(a1);     not defined error
// console.log(b1);     not defined error
console.log(c1);


// Global and local

let ans=300

if(true){
    let ans=200
    console.log("Local:",ans);
    
}

console.log("Global",ans);
