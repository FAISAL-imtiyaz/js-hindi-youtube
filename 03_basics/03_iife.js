//1
function chai (){
    console.log(`DB CONNECTED`);
}
chai();
//2
(function chai (){
    //named iife
    console.log(`DB CONNECTED`);
})();

// 3
(() => {
    //un named iife
    console.log(`DB CONNECTED TWO `);
})();
//4
((name) => {
    //parameter  iife
    console.log(`DB CONNECTED TWO ${name}`);
})('faisal')
// IMMEDIATELY INVOKED FUNCTION EXPRESSION