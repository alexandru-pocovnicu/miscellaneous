function past(h, m, s) {
const seconds=s*1000
const minutes=m*60*1000
const hours=h*3600*1000
return hours+minutes+seconds
}
console.log(past(0,1,1));
