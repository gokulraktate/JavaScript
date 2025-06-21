// if

// if(condition){
//     //statement
// }


if(1!=2){
    console.log("True");
}


// if else
let temp=40
if(temp<35){
    console.log("Cool"); 
}
else{
    console.log("Hot");
}


// short hand notation

const bal=1000
if(bal>500) console.log("available");

// if - else if - else

if(bal<500){
    console.log("LESS THAN 500");
}
else if(bal<750){
    console.log("LESS THAN 750");
    
}
else{
    console.log("GREATER THAN 750");
    
}


// multiple condition

const num=2

if(num>0 && num<10){
    console.log("Valid num");
}



// switch case

// syntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3

switch (month) {
    case 1:
        console.log("Jan");
        
        break;
    case 2:
        console.log("Feb");
        
        break;
    case 3:
        console.log("March");
        
        break;
    case 4:
        console.log("April");
        
        break;

    default:
        break;
}


// condition ? true : false

const val=80

val <=50 ? console.log("less than 50") : console.log("More than 50");

