function distancesFromAverage(arr) {
  let average = findAverage(arr);
  return differenceFromAverage(arr, average).map((a) => Number(a.toFixed(2)));
}

function findAverage(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

function differenceFromAverage(arr, average) {
  return arr.map((a) => average - a);
}
