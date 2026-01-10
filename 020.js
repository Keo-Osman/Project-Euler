console.time("Problem 20")

let n = 1n
for(let i = 1n; i <= 100n; i += 1n){
  n *= i
}

n = n.toString()
let total = 0

for(let char of n){
  total += Number(char)
}

console.log(total)
console.timeEnd("Problem 20")