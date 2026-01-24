function accum(s) {
const arr=s.split("")

const repeatElement= arr.map((x,index)=>x.repeat(index+1))
const upperCase=repeatElement.map(x=>x.slice(0,1).toUpperCase()+x.slice(1).toLowerCase())
return upperCase.join("-")
}
console.log(accum("ZpglnRxqenU"));
