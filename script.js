function euclideanDistance(a, b) {
  let distance = 0;
  for (let i = 0; i < a.length; i++) {
    distance += Math.pow(b[i] - a[i], 2);
    console.log(distance);
  }
  return Number(Math.sqrt(distance).toFixed(2));
}
