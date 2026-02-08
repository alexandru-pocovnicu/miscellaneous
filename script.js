function rowWeights(array) {
   
  let team1 = [];
  let team2 = [];
  for (let index in array) {
    if (index % 2 === 0) {
      team1.push(array[index]);
    } else {
      team2.push(array[index]);
    }
  }

  const team1Sum= team1.reduce((a,b)=>a+b) 
  const team2Sum=team2.length>0 ? team2.reduce((a,b)=>a+b):0
  return [team1Sum,team2Sum]
}
console.log(rowWeights([50, 60, 70, 80]));
