function getSocks(name, socks) {
 if(name==="Punky"){
  return punkySocks(socks)
 }
 return henrySocks(socks)
}
console.log(getSocks("Punky", ["pink", "pink" ,"pink"]));

function punkySocks(socks){
  let arr=[]
for(let i=0;i<socks.length;i++){
  if(socks[i]!==socks[i+1]){
    if(arr.length<2){
    arr.push(socks[i],socks[i+1])
    }
  }else if(socks.every(x=>x===socks[i])){
    return arr
  }
}
return arr
}

function henrySocks(socks){
  let arr=[]
  for(let elem of socks){
    if(socks.indexOf(elem)!==socks.lastIndexOf(elem)){
      if(arr.length<2){
      arr.push(socks[socks.indexOf(elem)]);}
      }
  }
  return arr
}
//console.log(henrySocks(["red", "blue","yellow", "blue", "green","blue"]));
