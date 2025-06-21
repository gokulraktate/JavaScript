// for of 

const arr=[1,2,3,4,5]

for(const num of arr){
    console.log(num);
    
}



// map

const map=new Map()
map.set('IN','India')
map.set('IN','India')                       //no duplicate values in map
map.set('USA','United State of America')
map.set('J','Japan')

console.log(map);

for(const [key,value] of map){
    console.log(key);
    console.log(key,value);
    
}

// for in

const prog=["js","html","css","cpp"]

for(const key in prog){
    console.log(key);           //index
    console.log(prog[key]);     //value
    
}


// forEach

const programming=["js","html","css","cpp"]

programming.forEach(function (item) {
    console.log(item);
    
})


const ar=[1,2,3,4,5]

ar.forEach((val) => {
    console.log(val);
    
})