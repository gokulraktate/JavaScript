// array

const myArr = [0,1,2,3,4,5]      //declaration
const myArray=['Gokul','Raktate']
const myArr2= new Array(1,2,3,4)

console.log(myArr[3]);


// array methods

myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(9)     //add element at front
console.log(myArr);
myArr.shift()        //delete front element
console.log(myArr);

console.log(myArr.includes(4));
console.log(myArr.indexOf(4));


const newArr= myArr.join()     //array to string
console.log(newArr);
console.log(typeof newArr);


// slice , splice
console.log("A" , myArr);     //array name A and values

const myArr1= myArr.slice(1,3);  // [1,2]

console.log("B" , myArr1);

const myArr3= myArr.splice(1,3);

console.log("B" , myArr3);     //includes last value also [1,2,3]
