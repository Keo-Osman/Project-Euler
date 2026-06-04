import util from "./util";
console.time("Problem 47")

let primes = []
for (let i = 2; i < 1_000; i++) {
  if (util.isPrime(i)) primes.push(i)
}


for (let i = 2; i < 200_000; i++) {
  if (
    numUniquePrimeDivisors(i) === 4 &&
    numUniquePrimeDivisors(i + 1) === 4 &&
    numUniquePrimeDivisors(i + 2) === 4 &&
    numUniquePrimeDivisors(i + 3) === 4
  ) {
    console.log(i)
    break
  }
}
console.timeEnd("Problem 47")



function numUniquePrimeDivisors(n) {
  let count = 0
  for (let p of primes) {
    if (n % p === 0) count++
  }
  return count
}