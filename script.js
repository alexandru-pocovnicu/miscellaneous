function ballCollector(detritus) {
let sum=0
let object={}
for(let i=0;i<detritus.length;i++){
  if(detritus[i]===58){
    sum +=detritus[i]
    object.weight=sum
  }
}
if(!detritus.includes(58)) object.weight=0
return object
}
console.log(ballCollector([59, 60, 60]));
