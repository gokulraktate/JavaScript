function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(2000,3000,3000,20002,3222));




const user={
    name:"Gokul",
    age:21
}

function handleObject(anyobject){
    console.log(`Hello ${anyobject.name} , your age is ${anyobject.age}`);
}

console.log(handleObject(user));



const myArray=[100,200,300,400]

function handleArray(anyarray){
    console.log(anyarray[1]); 
}

console.log(handleArray(myArray));
