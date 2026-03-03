function solution(number) {
  if (number<=0)return 0
  let sum=new Set()
  for(let i=number-1;i>=0;i--){
    if(i%3===0 || i%5===0){
      sum.add(i)
    }
  }
  return [...sum].reduce((a,b)=>a+b)
}
console.log(solution(0));


//