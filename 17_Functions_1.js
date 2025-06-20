function SayMyName(){
    console.log("G");
    console.log("O");
    console.log("K");
    console.log("U");
    console.log("L");   
}

SayMyName()


function add(num1,num2){
    // console.log(`${num1 + num2}`);
    console.log(num1 + num2);
}

add(4,5)




function addNum(num1,num2){
    let res=num1+num2;
    return res;
}
const result=addNum(2,8)
console.log(result);




function addNum1(num1,num2){
    return num1+num2;
}
const ans=addNum1(3,5)
console.log(ans);





function userLogin(username){
    if(username===undefined){
        console.log("Please enter a username...");
        return   
    }
    return `${username} just logged in`;
}
console.log(userLogin('Gokul'))
console.log(userLogin())




