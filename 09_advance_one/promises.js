// A promise is an object  represrenting the eventual completion or failure of an asynchronous operation.
const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // db calls, cryptography ,network
    setTimeout(function(){
        console.log('Async tsk is completed');

    },1000)

})
promiseOne.then(function(){
    console.log("promise consumed");
})
  new promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
  }).then(function(){
    console.log("Async 2 resolved");
  })
   const promiseThree = new promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai", email :"abc@gmail.com"})
    },1000)
   })
   promiseThree.then(function(){
    console.log(username);
   })

   const promiseFour = new promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
           resolve({username:"hitesh", password:"123"}) 
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
   })

   promiseFour.then(()=>{
    console.log(user);
    return user.name
   })
const promiseFive = new promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript", password:"123"})
        }else{
            reject('ERROR : JS went wrong')
        }
    },1000)
});
async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
//async await cant work directly on arrors()
}
consumePromiseFive()

async function getAllUsers(){
    const restponse = await fetch("https://leetcode.com/u/code_With_faisal/")
    const data = response.json()
    console.log(data);
}
getAllUsers()