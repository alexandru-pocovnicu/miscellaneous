function toFreud(string) {
  let arr = string.split(" ");
  return string.length === 0 ? "" : arr.map((x) => (x = "sex")).join(" ");
}
console.log(toFreud("This is a test"));
