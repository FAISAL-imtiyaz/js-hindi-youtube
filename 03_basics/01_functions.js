function addTwoNumbers(number1 , number2){
    // console.log(number1 + number2);
    let sum = number1+ number2
    return sum
}
const result =addTwoNumbers(3 ,6)
console.log("result :", result);

function calculateCartPrice(val1,val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))
// onject-----------------------------------------------
const user ={
    username:"hitesh",
    price:199
}
function handleOnject(anyobject){
    console.log(`username is ${anyobject.username} and price
    is ${anyobject.price}`);
}
handleOnject(user)
handleOnject({
    username:"sam",
    price:399
})
const mynewarray = [200, 300 , 400, 600]
function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200,3000,400,1000]));
// __________________________________________function 20
function calculateCartPricee(...num1){
    return num1;
}
console.log(calculateCartPricee(200,400,500,2000));
// -^ thisgives all  arguments in array form. in num1.
