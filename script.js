function findNeedle(haystack) {
    const ind=haystack.indexOf("needle")
  return `found the needle at position ${ind}`
}
console.log(findNeedle([1,2,"needle"]));
