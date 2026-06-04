console.time("Problem 25")
let f1 = 1n
let f2 = 1n
let f3 = 2n
let n = 2

while (true) {
  n++
  f1 = f1 + f2
  f3 = f1
  f1 = f2
  f2 = f3
  if (f3.toString().length === 1000) {
    break
  }
}

console.log(n)
console.timeEnd("Problem 25")