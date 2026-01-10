console.time("Problem 48")

let total = 0n
for(let i = 1n; i <= 1000n; i++){
  total += i ** i
}

console.log(total.toString().slice(-10))
console.timeEnd("Problem 48")
