import util from "./util.js"
console.time("Problem 46")

let primes = []
for(let i = 1; i < 10_000; i++){
  if(util.isPrime(i)) primes.push(i)
}

let last = primes[primes.length - 1]
let sol = 9999999999
for(let i = 3; i < last; i+=2){
  let valid = false
  for(let p of primes){
    if(Number.isInteger(Math.sqrt((i - p)/2))){
      valid = true
    }
  }
  if(!valid){
    if(!primes.includes(i)){
      sol = Math.min(i, sol)
    }
  }
}

console.log(sol)
console.timeEnd("Problem 46")