import util from "./util"

console.time("Problem 52")
let j = 1
while (!sameDigits(j)) {
  j++
}

console.log(j)
console.timeEnd("Problem 52")


function sameDigits(x) {
  let arr = []
  for (let i = 1; i <= 6; i++) {
    arr.push(i * x)
  }
  const first = arr[0].toString().split("").map(x => Number(x)).sort()
  let others = []
  for (let i = 1; i < arr.length; i++) {
    others.push(arr[i].toString().split("").map(x => Number(x)).sort())
  }
  for (let digArr of others) {
    if (!util.arrayEqual(digArr, first)) {
      return false
    }
  }
  return true
}