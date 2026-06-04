import util from "./util"
console.time("Problem 58")
const UPPER_LIMIT = 1_000_000

let primeCount = 0
let diagonalNumCount = 1

for (let i = 3; i <= UPPER_LIMIT; i += 2) {
  let bottomRight = i ** 2
  let bottomLeft = bottomRight - (i - 1)
  let topRight = bottomLeft - (i - 1)
  let topLeft = topRight - (i - 1)

  if (util.isPrime(bottomRight)) primeCount++
    if (util.isPrime(bottomLeft)) primeCount++
      if (util.isPrime(topRight)) primeCount++
        if (util.isPrime(topLeft)) primeCount++

          diagonalNumCount += 4
  if ((primeCount / diagonalNumCount) < 0.1) {
    console.log(i)
    break
  }

}

console.timeEnd("Problem 58")