// singleton 
// Object.create


// object literals

const mySym = Symbol("key1");  //symbol declaration

const user = {
    name:"Gokul",
    age:18,
    [mySym]:"mykey1",
    location:"Pune",
    isloggedin: false,
    "Full Name":"Gokul Raktate"
}

console.log(user.greeting);

console.log(user.age);
console.log(user["name"]);
console.log(user["Full Name"]);
console.log(user[mySym]);

user.greeting= function(){
    console.log("Hello Js user");
    
}

user.greeting2= function(){
    console.log(`Hello Js user, ${this.name}`);
    
}

console.log(typeof mySym);

user.location="Kopargaon";    //change object val
console.log(user);

Object.freeze(user)     //now object is freezed no changes will be applied


console.log(user.greeting());
console.log(user.greeting2());
