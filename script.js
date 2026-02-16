function shortenToDate(longDate) {
  return longDate.slice(0, longDate.indexOf(","));
}
console.log(shortenToDate("Friday May 2, 7pm"));
