import util from "./util"
// BAAAAD CODE
console.time("Problem 71")
let primes = []

for (let i = 2; i < 12_000; i++) {
  if (util.isPrime(i)) primes.push(i)
}

let total = 0
for (let denominator = 1; denominator <= 12_000; denominator++) {
  for (let numerator = Math.floor(denominator / 3); numerator <= Math.ceil(denominator / 2); numerator++) {
    if (1 / 3 < numerator / denominator && numerator / denominator < 1 / 2) {
      // console.log(numerator, denominator)
      if (coprime(denominator, numerator)) {
        total++
      }
    }
  }
}

console.log(total)
console.timeEnd("Problem 71")

function coprime(a, b) {
  for (let p of primes) {
    if (a % p === 0 && b % p === 0) return false
  }
  return true
}