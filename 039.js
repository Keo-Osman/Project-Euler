console.time("Problem 39")

let maxSol = 0
let maxP = 0
for(let i = 1; i <= 1000; i++){
  if(numSolutions(i) > maxSol) {
    maxSol = numSolutions(i)
    maxP = i
  }
}

console.log(maxP)
console.timeEnd("Problem 39")


function numSolutions(p){
  let count = 0
  for(let i = 1; i < p; i++){
    for(let j = i; j < p; j++){
      if(Number.isInteger(Math.hypot(i, j))){
        if(i + j + Math.hypot(i, j) === p){
          count += 1
        }
      }
    }
  }
  return count
}