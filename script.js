function all(arr, fun) {
  for (const item of arr) {
    if (!fun(item)) {
      return false;
    }
  }
  return true;
}

console.log(all([2, 4, 6], (n) => n % 2 === 0));
console.log(all([2, 3, 6], (n) => n % 2 === 0));
console.log(all([], (n) => n > 0));
