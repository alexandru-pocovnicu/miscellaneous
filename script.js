var humanYearsCatYearsDogYears = function (humanYears) {
  let all = [];
  let cat = 0;
  let dog = 0;
  if (humanYears > 2) {
    cat = (humanYears - 2) * 4 + 24;
    dog = (humanYears - 2) * 5 + 24;
    all.push(humanYears, cat, dog);
  }
  if (humanYears === 2) {
    cat = 24;
    dog = 24;
    all.push(humanYears, cat, dog);
  }
  if (humanYears === 1) {
    cat = humanYears * 15;
    dog = humanYears * 15;
    all.push(humanYears, cat, dog);
  }
  return all;
};
