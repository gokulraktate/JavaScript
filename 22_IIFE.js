// Immediately Invoked Functn Expressions(IIFE) 

// function fun(){
//     console.log("Connected");
    
// }
// fun()


// IIFE
(
function fun(){
    console.log("Connected");
    
}
)();

// arrow fun
(
    (name) => {
        console.log(`Hello ${name}`);
        
    }
)("Gokul")