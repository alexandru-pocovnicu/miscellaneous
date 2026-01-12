function squareSum(numbers) {
 //const sqr= numbers.map(x=>x*x)
  return numbers.map((x) => x * x).reduce((acc, curr) => acc + curr);
}
console.log(squareSum([1,2,2]));
