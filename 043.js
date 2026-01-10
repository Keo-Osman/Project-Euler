import util from "./util.js"

console.time("Problem 43")

let nums = []
for(let i = 0; i < 3628800; i++){
  nums.push(util.nthPermutation("0123456789", i))
}

let primes = [2, 3, 5, 7, 11, 13, 17]

let total = 0

for(let num of nums){
  let valid = true
  for(let i = 7; i >= 1; i--){
    let d = Number(num[i] + num[i+1] + num[i+2])
    if(d % primes[i - 1] != 0) {
      valid = false
    }
  }
  if(valid){
    total += Number(num)
  }
}


console.log(total)
console.timeEnd("Problem 43")



