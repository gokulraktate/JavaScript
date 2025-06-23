// Filter

const mynum=[1,2,3,4,5,6,7,8,9,10]
// const newnum=mynum.filter((num)=>num>5)
const newnum=mynum.filter((num)=>{ return num>5})
console.log(newnum);


const num=[]

mynum.forEach((no)=>{
    if(no>5){
        num.push(no)
    }
})
console.log(num);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')
console.log(userBooks);

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);



// ++++++++++++++++++++++++++++++++++++++++++
// Map

const mynum1=[1,2,3,4,5,6,7,8,9,10]

const ans=mynum1.map((num) => num+10)
console.log(ans);



const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)               //chaining method
                .filter( (num) => num >= 40)          //filter

console.log(newNums);



// ++++++++++++++++++++++++++++++++++
// reduce

const myNums = [1, 2, 3]

const myTotal= myNums.reduce((acc,curval) => {
    console.log(`acc: ${acc} and curval: ${curval} ` );
    
    return acc+curval
},0) 
console.log(myTotal);


//output

// acc: 0 and curval: 1
// acc: 1 and curval: 2
// acc: 3 and curval: 3
// 6



const myTotal1 = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal1);




const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);