// if(true/*condition*/){

// }
// <,>,<=,>=,===,==,!=,!==
// var globak scope 
const score =200
if(score > 100){
    let power ="fly"   
    // var power="fly" code willl run outside as well cuz scope is global

    console.log(`uset power : ${power}`);
}
console.log(`user power: ${power}`); 

// short hand notation
// const balanec =1000
// if(balance>500 ) console.log("test"); // should not write multiple lines , can write but not good.

// if(balance < 500){
// console.log("less than 500");
// }else if(balanec<750){
//     console.log("less than 750");
// }else {
//     console.log("less than 1000");
// }
// -^ real life usage
const userloggedin =true
const debitcard = true
if(userloggedin && debitcard){
    console.log("allow to buy course");
}

// ?single line 
// condition ?true : false