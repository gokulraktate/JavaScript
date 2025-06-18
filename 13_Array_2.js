//Array part 2

const heros=['thor','ironman']
const dc=['superman','flash']

heros.push(dc)                //add array in array as a data
         
console.log(heros);
console.log(heros[2]);


const marvel_heros=['thor','ironman']
const dc_heros=['superman','flash']
const all_heros=marvel_heros.concat(dc_heros)  
console.log(all_heros);


// spread

const a=[1,2,3]
const b=[4,5,6]
const spread=[...a,...b]
console.log(spread);


// flat a array

const arr=[1,2,3,[4,5],6,[7,[8,[9,10]]]]
const new_arr=arr.flat(Infinity)
console.log(new_arr);


// convert a array

console.log(Array.isArray("Gokul"));
console.log(Array.from("Gokul"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
