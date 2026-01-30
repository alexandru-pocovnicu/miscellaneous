function isEven(n){
    return n%2===0 ? true:false
}
test("isEven should return true for even numbers", ()=> {
    expect(isEven(2)).toBe(true)
})