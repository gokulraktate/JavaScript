// Dates

let mydate= new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

console.log(typeof mydate);


let mycreatedate= new Date(2003,10,22)         //22 Nov(11) 2003
console.log(mycreatedate.toDateString());

let mycreatedate1= new Date(2003,10,22,5,3)    // 22 Nov 2003 5:03:00 am
console.log(mycreatedate1.toLocaleString());

let mycreatedate2= new Date("2000-01-03")    // 03 Jan 2000
console.log(mycreatedate2.toDateString());


let myTimeStamp= Date.now()
console.log(myTimeStamp);


let newDate= new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());
