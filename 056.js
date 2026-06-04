console.time("Problem 56")
let max = 0
for (let a = 1n; a < 100n; a++) {
  for (let b = 1n; b < 100n; b++) {
    let res = a ** b
    max = Math.max(digSum(res), max)
  }
}
console.log(max)
console.timeEnd("Problem 56")



function digSum(n) {
  let total = 0
  let arr = n.toString().split("")
  for (let char of arr) {
    total += Number(char)
  }
  return total
}