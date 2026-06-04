console.time("Problem 74")
let factorials = [1]
for (let i = 1; i <= 9; i++) {
  factorials[i] = i * factorials[i - 1]
}

let max = -1
let num = -1
for (let i = 1; i < 10; i++) {
  let map = new Map()
  let current = i
  while (true) {
    let total = 0
    let next = current.toString().split("").map(Number).reduce((acc, x) => acc + factorials[x], 0)
    console.log(i, current, next)
    if (map.get(next)) {
      num = i
      max = Math.max(max, total)
      break
    } else {
      map.set(next, 1)
      current = next
      total++
    }
  }
}
console.log(num, max)
console.timeEnd("Problem 74")