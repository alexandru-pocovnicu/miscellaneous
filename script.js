function seqToOne(n) {
  let arr = [];
  if(n===0)return [0,1]
  if (n < 0) {
    for (let i = n; i <= 1; i++) {
      arr.push(i);
    }
  }else{
    for (let i = n; i >=1; i--) {
      arr.push(i);
    }
  }

  return arr;
}
console.log(seqToOne(-1));
