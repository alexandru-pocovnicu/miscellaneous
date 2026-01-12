function squareSum(numbers) {
return numbers.length === 0
  ? 0
  : numbers.map((x) => x * x).reduce((acc, curr) => acc + curr);
}
console.log(squareSum([1,2,2]));
