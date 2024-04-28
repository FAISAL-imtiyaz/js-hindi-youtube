// var c= 300 global scope
// let a=10
// const b=20
// var c= 30

// if(true){
//     let a=10
//     const b=20   //scope      block scope
//     var c= 30
// }
// console.log(a);//no print
// console.log(b);//no print
// console.log(c);//print
// ___________________examples document
// function addone(num){
//     return num+ 1   

// }
// // addone(5) no out put
// // addtwo can't declare here
// const addtwo=function(nun){
//     return num + 2
// }
// addtwo(5) 
// ______________________________arrow functions
  const user ={
    username: "faisal",
    price: 800,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);

    }
  }
  user.welcomeMessage()