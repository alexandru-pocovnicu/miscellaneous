function countSheeps(sheep) {
let sum=0
for(let goat of sheep){

    
    if(goat===true){
        sum =sum+1
    }
}
return sum
}
console.log(countSheeps([true,undefined, null, false, true]));
