// singleton
// object litrals


Object.create
const jsUser ={
    name:"faisal",
    "full name":"faisal imtiyaz",
    age:18,
    location :"jaipor",
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "saturday"],
    [mySymb]:"mykey1"     //for symbol left must be in square brackets
} 
console.log(jsUser.email);
console.log(jsUser[email]);
console.log(jsUser["full name"]);
// symbol
const mySymb = Symbol("key1")//---^
console.log(jsUser[mySymb]);
// Object.freeze(jsUser)
jsUser.email="hitesh@gmail.com"
console.log(jsUser);

jsUser.greeting =function(){
    console.log("hello js user");
}
jsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


// ____________________________lecture 17
const tinderuser = new Object()
// const tinderuser ={}

tinderuser.id="12345"
tinderuser.name="faisal"
tinderuser.isLoggedIn=false
// console.log(tinderuser);
const regularuser ={
    email:"faisal@gmail.com",
    fullname:{
        userfullname:{
          firstname:"faisal",
          lastname:"imtiyaz"
        }
    }
}
console.log(regularuser.fullname.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
// const obj3 =Object.assign({},obj1,obj2)// {} taken as destnation
// console.log(obj3);
const obj3={...obj1,...obj2}  //mostly use 90% spread and put in obj3
 
const users=[
    {
        id:1,
        email:"babar@gmail.com"
    },
    {
        id:1,
        email:"babar@gmail.com"
    },
    {
        id:1,
        email:"babar@gmail.com"
    }
]
console.log();
users[1].email
console.log(tinderuser);
console.log(obj1.keys(tinderuser));
console.log(obj1.values(tinderuser));
console.log(obj1.entries(tinderuser));

console.log(tinderuser.hasOwnProperty(isLoggedIn));
//  studied about api give my work load to other