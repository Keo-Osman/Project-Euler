import util from "./util"
console.time("Problem 27")

let max = 0
let maxA = 0
let maxB = 0
for(let a = -999; a <= 999; a++){
  for(let b = 1; b <= 999; b++){
    if(util.isPrime(b)){
      let np = numPrimes(a, b) 
      if(np > max){
        max = np
        maxA = a
        maxB = b
      }
    }
  }
}

console.log(maxA * maxB)
console.timeEnd("Problem 27")


function numPrimes(a, b){
  let n = 0
  while(true){
    if(util.isPrime(n**2 + a*n + b)){
      n++
    }
    else break
  }
  return n
}

