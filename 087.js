import util from "./util";
const N = 50_000_000
const UPPER_LIMIT = Math.floor(Math.sqrt(N))
const primes = util.getPrimes(UPPER_LIMIT)

const seen = Array(N).fill(false)


for (let a of primes) {
  for (let b of primes) {
    if (b >= 369) break
    for (let c of primes) {
      if (c >= 85) break
      const num = a ** 2 + b ** 3 + c ** 4
      if (num < N) {
        seen[num] = true
      }
    }
  }
}


const res = seen.reduce((acc, v) => {
  if (v) acc += 1
  return acc

}, 0)

console.log(res)