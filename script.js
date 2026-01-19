function oddOrEven(array) {
  return array.length === 0
    ? "even"
    : array.reduce((acc, curr) => acc + curr) % 2 === 0
      ? "even"
      : "odd";
}
