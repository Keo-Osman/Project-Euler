console.time("Problem 71")

let numerator = 3
for (let i = 1; i < 1_000_000; i++) {
  if (7 * i >= 1_000_000) break
  if ((3 * i - 1) % 7 != 0) numerator = 3 * i - 1
}
console.log(numerator)
console.timeEnd("Problem 71")