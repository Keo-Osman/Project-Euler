console.time("Problem 21")

let total = 0
for(let i = 1; i < 10000; i++){
  if(i === sumDivisors(sumDivisors(i)) && i != sumDivisors(i)) total += i
}

console.log(total)
console.timeEnd("Problem 21")


function sumDivisors(n){
  let sum = 0
  for(let i = 1; i <= n/2; i++){
    if(n % i === 0){
      sum += i
    }
  }
  return sum
}