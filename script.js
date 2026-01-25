function polygonArea(A, B, C, D) {
  const rectangleArea = A * B;

  const triangleArea = (1 / 2) * B * (C - A);
  return triangleArea + rectangleArea;
}
console.log(polygonArea(2, 5, 10, 2.5));
