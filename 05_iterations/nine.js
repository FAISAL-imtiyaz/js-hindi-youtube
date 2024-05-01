// const myNums=[123]
// const myTotal = myNums.reduce(function(ace,currval){
//     console.log(`acc:${acc} and currval ${currval}`);
//     return acc + currval
// },0)
// console.log(myTotal);
// -------------------------
// const myNums =[1,2,3]
// const myTotal = myNums.reduce((acc,curr)=> acc + curr,0)
// console.log(myTotal);
// ---------------------------------
const shoppingcart =[
    {
        itemName :"js course",
        price:4999
    },
    {
        itemName :"react course",
        price:8999
    },
    {
        itemName :"html course",
        price:2999
    },
    {
        itemName :"java course",
        price:3999
    },
]
const totalAmoutToPay= shoppingcart.reduce((acc,itemprice)=>acc +itemprice.price,0)
console.log(totalAmoutToPay)