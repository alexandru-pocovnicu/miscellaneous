// function fakeBin(x) {
//    let xArr=x.split("")
//    let arr=[]
  
//    for(let i of xArr){}
//     if(i<5){
//       xArr.splice(i,1,"0")
//       if (i > 5) {
//         xArr.splice(i, 1, "1");
//       }
//     }
//     return xArr
// }
// console.log(fakeBin("12345678"));
function largestNum(num1,num2,num3){
  return Math.max(num1,num2,num3)
}
console.log(largestNum(1,7,3));
