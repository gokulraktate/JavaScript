const name= "Gokul"   //simple way to declare
const surname=new String("Raktate")   //another way to declare

const age=21

// console.log(name+age+ " Value");

console.log(`Hello my name is ${name} and my age is ${age}`);

console.log(surname[4]);


console.log(surname.length);
console.log(surname.toUpperCase());
console.log(surname.charAt(2));
console.log(surname.indexOf('t'));

const newString = surname.substring(0,3)
console.log(newString);

const slice= surname.slice(-2)
console.log(slice);


const temp = "      Gokul Raktate      "
console.log(temp);
console.log(temp.trim());

const url = "https://gokulraktate%20vercel.app"

console.log(url.replace('%20','.'));

console.log(url.includes("gokul"))


console.log(url.split('.'));

