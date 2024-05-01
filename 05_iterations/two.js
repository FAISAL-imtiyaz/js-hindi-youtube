 let index =0
 while(index<=10){
    console.log(`value of index is ${index}`);
    index=index+2
 }
let score =0
 do{
   console.log(`score is ${score}`);
   score++ 
 }while(score <=10);
 
//  maps
//itratable               object are not itratable
const map = new Map()
map.set('IN',"india")
map.set('usa',"united states of india")
map.set('Fr',"France")
console.log(map);

for(const [key, value] of map){
    console.log(key,':-',value);
}

