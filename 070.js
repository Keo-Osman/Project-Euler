import util from "./util"

console.time("Problem 70")
let map = new Map()
let min = 10000
let sol = 0

for (let i = 2; i <= 10_000_000; i++) {
  let a = phi(i)
  let b = i / a
  if (b < min) {
    if (isPermutation(i, a)) {
      min = b
      sol = i
    }
  }
}

console.log(sol)
console.timeEnd("Problem 70")

function divisorPair(n) {
  let count = 0

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      let tmp = n
      while (tmp % i === 0) {
        count++
        tmp /= i
      }

      //If n = p^k return [p^k, p^(k-1)] so phi(n) = p^k - p^(k-1) = dp[0] - dp[1]
      if (n === i ** count) {
        return [n, i ** (count - 1)]
      }

      //Otherwise return a normal divisor pair
      return [i ** count, n / (i ** count)]
    }
  }

  // n is prime so return undefined
  return undefined
}

function phi(i) {
  let dp = divisorPair(i)

  if (!dp) {
    // i is prime so phi(p) = p-1
    map.set(i, i - 1)
    return (i - 1)
  } else if (dp[0] === i) {
    // i = p^k so phi(i) = p^k - p^(k-1)
    map.set(i, dp[0] - dp[1])
    return (dp[0] - dp[1])
  } else {
    // normal divisor pair so phi(mn) = phi(m)*phi(n)
    map.set(i, map.get(dp[0]) * map.get(dp[1]))
    return (map.get(dp[0]) * map.get(dp[1]))
  }
}

function isPermutation(a, b) {
  a = a.toString().split("").sort()
  b = b.toString().split("").sort()
  return util.arrayEqual(a, b)
}