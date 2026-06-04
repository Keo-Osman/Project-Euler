console.time("Problem 69")

let map = new Map()
let max = 0
let sol = 0

let count = 0
for (let i = 2; i <= 1_000_000; i++) {
  let b = i / phi(i)
  if (b > max) {
    count++
    max = b
    sol = i
  }
}

console.log(sol)
console.timeEnd("Problem 69")


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

// Alternate much better maths based solution - done after reading solutions
// let primes = []
// for(let i = 2; i < 1_000_000; i++){
//   if(util.isPrime(i)) primes.push(i)
// }


// let prod = 1
// for(let p of primes){
//   prod *= p
//   if(prod > 1_000_000) {
//     prod /= p
//     break
//   }
// }

// console.log(prod)