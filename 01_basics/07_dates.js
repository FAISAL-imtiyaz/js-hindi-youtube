let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toDateString());
let myyCreatedDate = new Date("01-14-2023");//mm-dd-yyyy
console.log(myyCreatedDate.toLocaleDateString());

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDate()}`
newDate.toLocaleString('default',{
    weekday: "long",
})