const User= new Object(
    {
    name:"Gokul",
    age:19
    }
)

console.log(User);

User.id="123"
User.dept="Comp"

console.log(User);


const sample={
    name:"abc",
    email:"abc@gmail.com",
    fullname:{
        uersFullname:{
            firstname:"ab",
            lastname:"c"
        }
    }
}

console.log(sample);
console.log(sample.fullname);
console.log(sample.fullname.uersFullname.firstname);



// merge obj

const obj1={a:1,b:2}
const obj2={c:3,d:4}

// const obj3={obj1,obj2}
const obj3={...obj1,...obj2}
// const obj3=Object.assign(obj1,obj2)    this is also used
// const obj3=Object.assign({},obj1,obj2)
console.log(obj3);


console.log(Object.keys(sample));
console.log(Object.values(sample));
console.log(Object.entries(sample));

console.log(sample.hasOwnProperty("name"));     //true or false
