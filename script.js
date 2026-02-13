function explode(x) {
  
 if (x[0]===+x[0] && x[1]===Number(x[1]))return new Array(x[0] + x[1]).fill([x[0],x[1]]); 
if (x[0] !== +x[0] && x[1] === Number(x[1]))return new Array(x[1]).fill([x[0], x[1]]); 
if (x[0] === +x[0] && x[1] !== Number(x[1]))return new Array(x[0]).fill([x[0], x[1]]);
  return "Void"
}
console.log(explode(["k",3]));
