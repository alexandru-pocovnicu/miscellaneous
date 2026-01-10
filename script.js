function removeEveryOther(arr) {
  const empty = [];
  for (let i = 0; i < arr.length; i += 2) {
    empty.push(arr[i]);
  }
  return empty;
}
