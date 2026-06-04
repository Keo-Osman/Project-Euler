console.time("Problem 53")
  // Generate Factorials
let fact = [1n]
for (let i =  1n; i <= 100n; i++) {
  fact[i] = i * fact[i - 1n]
}

let count = 0
for (let n = 0; n <= 100; n++) {
  for (let r = 0; r <= n; r++) {
    let x = fact[n] / (fact[r] * fact[n - r])
    if (x > 1_000_000) count++
  }
}

console.log(count)
console.timeEnd("Problem 53")