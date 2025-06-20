const user={
    name:"Gokul",
    age:20,

    welcomemess: function(){
        console.log(`${this.name}, welcome Sir`);  
    }
}

user.welcomemess()

user.name="Sam"
user.welcomemess()



function abc(){
    const name="Gokul"
    console.log(this.name)           // this will not work in function
}

abc()




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ARROW FUN

// const fun = function(){
//     console.log("This is Simple fun"); 
// }


const fun = () => {
    console.log("This is Arrow fun"); 
}

fun()



// () => {}         simple structure of arrow fun

// const sample= (num1,num2) => {
//     return num1+num2;                here code if wrapped in {} so return keyword used
// }
// console.log(sample(2,4))


const sample= (num1,num2) => (
        num1 + num2                    //here code if wrapped in () so return keyword not used
)

console.log(sample(2,4))

