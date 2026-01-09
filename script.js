function getGrade (s1, s2, s3) {
  const score= (s1+s2+s3)/3
  return score>=90 && score<=100 ? "A"
  : score>=80 && score<90 ? "B"
  : score>=70 && score<80 ? "C"
  : score>=60 && score<70 ? "D"
  : score>=0 && score<60 ? "F":null

}
console.log(getGrade(65,70,59));
