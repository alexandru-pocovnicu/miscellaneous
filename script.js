function duckDuckGoose(players, position) {
  return players[(position - 1) % players.length].name;
}
console.log(duckDuckGoose([
   { name: 'a' },
  { name: 'b' },
   { name: 'c' },
   { name: 'd' },
   { name: 'c' },
   { name: 'e' },
   { name: 'f' },
   { name: 'g' },
   { name: 'h' },
   { name: 'z' }
], 12));
