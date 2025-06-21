// for loop

// syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index <= 10; index++) {
    
    const element = index;
    if(element==5){
        console.log("5 is best number");
    }
    else if(element==7){
        continue
    }
    else if(element==9){
        break
    }
    else{
        console.log(element);
    }   
       
}


