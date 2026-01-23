function nbDig(n, d) {
  let k=[]
 for(let i=0;i<=n;i++){
  k.push(i*i)
 }
 let count=0

 const arrOfK= k.join("").split("")
 for(let i of arrOfK){
  if(i==d){
    count +=1
  }
 }
 return count
}
console.log(nbDig(10,1));
