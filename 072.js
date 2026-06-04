console.time("Problem 72")

let map = new Map()

let total = 0
for (let i = 2; i <= 1_000_000; i++) {
  total += phi(i)
}

console.log(total)
console.timeEnd("Problem 72")


function divisorPair(n) {
  let count = 0

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      let tmp = n
      while (tmp % i === 0) {
        count++
        tmp /= i
      }

      if (n === i ** count) {
        return [n, i ** (count - 1)]
      }

      return [i ** count, n / (i ** count)]
    }
  }

  return undefined
}

function phi(i) {
  let dp = divisorPair(i)

  if (!dp) {
    map.set(i, i - 1)
    return (i - 1)
  } else if (dp[0] === i) {
    map.set(i, dp[0] - dp[1])
    return (dp[0] - dp[1])
  } else {
    map.set(i, map.get(dp[0]) * map.get(dp[1]))
    return (map.get(dp[0]) * map.get(dp[1]))
  }
}