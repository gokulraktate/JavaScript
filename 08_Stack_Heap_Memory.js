// Stack (Primitive)  ,  Heap (Non-Primitive)

// All primitive datatypes stores the Value in Stack

let name= "Gokul"
let AnotherName=name;

console.log(name);

AnotherName="Krishna"

console.log(AnotherName);




// Heap

// Non primitive data stores a reference in heap if changes occurs then all the reference value is updated

const user1={
    name:"Gokul",
    age:20
}

const user2=user1
user2.name="Krishna"

console.log(user1);
console.log(user2);
