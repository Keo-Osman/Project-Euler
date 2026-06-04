console.time("Problem 23")
let abudants = new Map()
for (let i = 2; i <= 28123; i++) {
  if (sumDivisors(i) > i) abudants.set(i, true)
}


let total = 0
for (let i = 1; i <= 28123; i++) {
  for (let n of abudants) {
    if (abudants.get(i - n[0])) {
      total += i
      break
    }
  }
}

console.log(28123 * 14062 - total)
console.timeEnd("Problem 23")


function sumDivisors(n) {
  let total = 0
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) total += i
  }
  return total
}