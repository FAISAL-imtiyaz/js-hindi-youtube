const coding =["js", " ruby"," cpp","pythin"]
// coding.forEach(function (item))
coding.forEach(function (VAL){
    console.log(VAL);
})

coding.forEach( (item) => {
    console.log(item);
})
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)