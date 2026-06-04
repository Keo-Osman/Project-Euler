import util from "./util"
console.time("Problem 7")

let i = 2
let count = 0

while (true) {
  if (util.isPrime(i)) count++
    if (count === 10001) break
  i++
}

console.log(i)
console.timeEnd("Problem 7")