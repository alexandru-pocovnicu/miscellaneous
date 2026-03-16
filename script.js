function wordValue(words) {
    let newArr=[]
    for(let i=0;i<words.length;i++){
        console.log(words.indexOf(words[i]));
        
       return newArr = pushToArray(words).map((val,idx) => val * (idx+ 1),
        );
    }
    
}


function sumUp(word) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    sum += alphabet.indexOf(word[i]) + 1;
  }
  return sum;
}

function pushToArray(words) {
  let noSpace = words.map((x) => x.replaceAll(" ", ""));
  let newArr = [];
  for (let i = 0; i < noSpace.length; i++) {
    newArr=(noSpace.map((x) => sumUp(x) ));
  }

  return newArr;
}
