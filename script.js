function nameShuffler(str) {
let strToArr= str.split(" ")
let str0=strToArr[0]
console.log(str0);

strToArr.shift(strToArr[0])
return strToArr.join()+" "+str0
}
console.log(nameShuffler("asd dff"));
