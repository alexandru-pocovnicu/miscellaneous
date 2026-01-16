const binaryArrayToNumber = (arr) => {
 const noComa=arr.join('')
 return parseInt(noComa,2)
};
console.log(binaryArrayToNumber([0, 0, 0, 1]));
