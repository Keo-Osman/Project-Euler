console.time("Problem 800")

// Generate Primes
console.time("Generating Primes")
const UPPER_LIMIT = 15_704_507
let primes = getPrimes(UPPER_LIMIT)
console.timeEnd("Generating Primes")



console.time("Search")
const N = 800_800 * Math.log(800_800)

let count = 0
for (let i = 0; i < primes.length; i++) { // Iterating over p
  let p = primes[i]
  const index = maxQIndex(p) // Find index of max q

  if (primes[index] <= p) break // when p >= q stop as WLOG p < q stops us double counting

  count += index - i // Find amount of new paris from this p
}
console.timeEnd("Search")

console.log(count)
console.timeEnd("Problem 800")

// Given p what is the maximum q such that p * lnq + q * lnp < 800800 * ln800800 = N
function maxQIndex(p) {

  let max = primes.length - 1
  let min = 0
  let index = Math.floor((max + min) / 2)

  for (let i = 0; i < Math.ceil(Math.log2(primes.length)); i++) {
    const res = f(p, primes[index])

    // This is our maximum q - this q works but the next prime doesn't 
    if (res <= N && f(p, primes[index + 1]) > N) return index

    // binary search
    if (res < N) {
      min = index
      index = Math.ceil((max + min) / 2)
    }
    if (res > N) {
      max = index
      index = Math.floor((max + min) / 2)
    }
  }

  // All q <= 15.7m work with p
  return primes.length - 1
}

function f(p, q) {
  return p * Math.log(q) + q * Math.log(p)
}

// Efficient prime seive (not written by me)
function getPrimes(n) {
  if (n < 2) return [];

  const size = (n >> 1) + 1 // only odds
  const sieve = new Uint8Array(size)

  const limit = Math.floor(Math.sqrt(n))

  for (let p = 3; p <= limit; p += 2) {
    if (!sieve[p >> 1]) {
      // start at p*p, skip even multiples
      for (let m = p * p; m <= n; m += p << 1) {
        sieve[m >> 1] = 1
      }
    }
  }

  const result = [2]
  for (let i = 3; i <= n; i += 2) {
    if (!sieve[i >> 1]) result.push(i)
  }

  return result
}