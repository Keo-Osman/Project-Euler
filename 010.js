import util from "./util"
console.time("Problem 10")

let total = 0
for (let i = 2; i <= 2_000_000; i++) {
  if (util.isPrime(i)) total += i
}


console.log(total)
console.timeEnd("Problem 10")