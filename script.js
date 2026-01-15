function getMiddle(s) {
 const firstSubS=s.substring(0,s.length / 2);
 const secondSubS = s.substring((s.length / 2));
  if(s.length%2===0)return firstSubS[firstSubS.length-1].concat(secondSubS[0]) 
    return secondSubS[0]  
}
console.log(getMiddle("bdgym"));
