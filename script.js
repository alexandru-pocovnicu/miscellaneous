function correct(string) {
 return string.replaceAll("0","O").replaceAll("1","I").replaceAll("5","S")
}
console.log(correct("hell015;4105b"));
