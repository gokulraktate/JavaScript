function one(){
    const name="Gokul"

    function two(){
        const age=20
        console.log(name);
        
    }
    // console.log(age);        error because not in scope
    
    two()
}

one()



if(true){
    const username="gokul"
    if(username==="gokul"){
        const age=20
        console.log(username+age);
        
    }
    // console.log(age);       not in scope
    
}
// console.log(username);      not in scope





// +++++++++++++++++++++++++++++++++++++++++++++++++
// HOISTING

console.log(addone(5))           //this will execute

function addone(val){
    return val + 1;
}



console.log(addtwo(6))           // this will not

const addtwo= function(val){
    return val + 2;
}
