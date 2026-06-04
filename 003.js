import util from "./util"
console.time("Problem 3")

let num = 600851475143
let max = 0
for (let i = 2; i < Math.ceil(Math.sqrt(num)); i++) {
  if (num % i === 0 && util.isPrime(i)) max = i
}


console.log(max)
console.timeEnd("Problem 3")