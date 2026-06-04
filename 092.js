console.time("Problem 92")
let count = 0
for (let i = 1; i < 10_000_000; i++) {
  if (chainEnd(i) === 89) count++
}

console.log(count)
console.timeEnd("Problem 92")

function chainEnd(x) {
  let next = x
  while (true) {
    let sum = 0
    let str = next.toString()
    for (let digit of str) {
      sum += Number(digit) ** 2
    }
    next = sum
    if (next === 89 || next === 1) return next
  }
}