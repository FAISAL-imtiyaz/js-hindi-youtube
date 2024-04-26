 const myarray= [0.1,2,3,4,5]
 console.log(myarray[0]);
 myarray.push(6)
 myarray.push(7)
 myarray.pop()
//  myarray.unshift(9)
//  myarray.shift

console.log(myarray.includes(9));
console.log(myarray.indexOf(9));

const newArr=myarray.join()
console.log(myarray);
console.log(typeof newArr);
 
console.log("A", myarray);
const myn1 =myarray.slice(1,3);
console.log(myn1);
console.log("B",myarray);

const myn2 =myarray.slice(1,3)
console.log("C", myarray);
console.log(myn2);
const marvel_heroes =["thor","ironman"]
const dc_heroes=["superman","flash"]
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);
const all_new=[...marvel_heroes, ...dc_heroes]
console.log(all_new);
console.log(Array.from("faisal"));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
