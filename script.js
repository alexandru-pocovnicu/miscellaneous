let sortArray = function (value) {
  return value.split("").sort((a,b)=>a-b).join("")
};
console.log(sortArray("1964"));
