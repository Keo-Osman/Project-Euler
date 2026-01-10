import util from "./util.js"


console.time("Problem 50")
let primes = []
for(let i = 1; i < 1_000_000; i++){
  if(util.isPrime(i)) primes.push(i)
}


let end = false
let sol = 0
let start = -1
for(let amount = 546; amount >=21; amount--){

  // Get first sum of first (amount) of primes
  let initial = 0
  for(let i = 0; i < amount; i++){
    initial += primes[i]
  }
  let sum = initial
  
  for (let i = 0; i < primes.length; i++){
    sum = sum - primes[i] + primes[i + amount]
    if(sum > 1_000_000){
      break
    }
    if(util.isPrime(sum)){
      start = i
      sol = sum
      end = true
    }
  }

  if(end){
    console.log(sol)
    break
  }
}
console.timeEnd("Problem 50")