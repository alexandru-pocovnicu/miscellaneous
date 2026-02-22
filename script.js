function findOddNames(list) {
  let name = "";
  let arrOdd = [];
  for (let i = 0; i < list.length; i++) {
    name = list[i].firstName;
    console.log(name);

    if (calculateAscii(name) % 2 === 1) {
      arrOdd.push(list[i]);
      console.log(arrOdd);
    }
  }
  return arrOdd;
}
console.log(
  findOddNames([
    {
      firstName: "Aba",
      lastName: "N.",
      country: "Ghana",
      continent: "Africa",
      age: 21,
      language: "Python",
    },
    {
      firstName: "Aba",
      lastName: "O.",
      country: "Israel",
      continent: "Asia",
      age: 39,
      language: "Java",
    },
  ]),
);

function calculateAscii(name) {
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }
  return sum;
}

console.log(calculateAscii("Abb"));
