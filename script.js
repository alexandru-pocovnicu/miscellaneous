function cocknify(str) {
//   let arr = str.split(" ");
//   let newElem = "";
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i].toLowerCase().startsWith("h")){
//       arr[i]= arr[i].replace(arr[i][0], "`");
        
        
//     }
//   }
  return str.replace(/\bh/gi,"`")
}
console.log(cocknify("Hello there honey"));
