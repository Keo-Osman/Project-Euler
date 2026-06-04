import util from "./util"
console.time("Problem 55")
let count = 0
for (let i = 10; i < 10_000; i++) {
  if (isLychrel(i)) {
    count++
  }
}
console.log(count)

// console.log(count)
console.timeEnd("Problem 55")


function isLychrel(n) {
  let num = n
  for (let i = 0; i < 60; i++) {
    let reversed = Number(num.toString().split("").reverse().join(""))
      // console.log(num, reversed, num + reversed)
    num += reversed
    if (isPalindrome(num)) return false
  }
  return true
}


function isPalindrome(num) {
  num = num.toString().split("")
  let tmp = []
  for (let n of num) {
    tmp.push(n)
  }
  return Number(tmp.reverse().join("")) === Number(num.join(""))
}