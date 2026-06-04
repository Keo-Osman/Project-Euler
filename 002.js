console.time("Problem 2")

let total = 0
let fib1 = 1
let fib2 = 1

while (true) {
  if (fib2 % 2 === 0) total += fib2

  //compute next number
  let tmp = fib2
  fib2 += fib1
  fib1 = tmp

  if (fib2 > 4_000_000) break
}

console.log(total)
console.timeEnd("Problem 2")