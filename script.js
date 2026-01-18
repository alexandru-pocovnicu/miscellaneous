function reverseWords(str) {
  const arr= str.split(" ");
  const reversed=arr.map(element=>element.split('').reverse().join(''))
  return reversed.join(' ')
}
console.log(reverseWords("apple pear"));
