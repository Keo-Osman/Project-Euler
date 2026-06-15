console.time("Problem 74")
let factorials = [1]
for (let i = 1; i <= 9; i++) {
  factorials[i] = i * factorials[i - 1]
}

let count = 0
for (let i = 1; i < 1_000_000; i++) {
  if (chainLength(i) === 60) count++
}

console.log(count)
console.timeEnd("Problem 74")

function chainLength (n) {
  let length = 0
  let current = n
  while (true) {
    length += 1

    let next = current.toString().split("").map(Number).reduce((acc, x) => acc + factorials[x], 0)
    if (next === current) return length
    
    if (next === 169 || next === 363601 || next === 1454) {
      length += 3
      return length
    } 
    if (next === 871 || next === 872 || next === 45361 || next === 45362) {
      length += 2
      return length
    } 
    current = next
  }
}