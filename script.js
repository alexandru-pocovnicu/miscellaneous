function onlyOne(...flags) {
if(flags.length===0)return false
return (
  flags.indexOf(true) !== -1 && flags.indexOf(true) === flags.lastIndexOf(true)
);
}
console.log(onlyOne([]));
