function testit(s) {
  if (s.length === 0) return "";
  let arr = s.split(" ");
  for(let i=0;i<arr.length;i++){
    if(arr[i].length===1){
     arr[i]= arr[i].toUpperCase()
    }else{
      arr[i]=arr[i].slice(0,arr[i].length-1)+ arr[i][arr[i].length-1].toUpperCase()
    }
  }
  return arr.join(" ")
}
console.log(testit("ab b c"));

