const name="faisal"
const repcoount =50

console.log(name +repcoount + "value");
// ?use back ticks
console.log(`hello my name is ${name} and my repo count is ${repcoount}`);
// another way to decare string
const gameName = new String('faisal')
console.log(gameName[0]);
console.log(gameName.__proto__);  

console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));
const newString =gameName.substring(0,4) //no negative obey
console.log(newString);

const anotherString = gameName.slice(-8,4)// takes negative
console.log(anotherString);
const naam= "faisal"
console.log(naam);
console.log(naam.trim());
const url="https://organic-space%20carnival-v4r6"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));