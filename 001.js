console.time("Problem 1")


let total = 0
for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) total += i
}


console.log(total)
console.timeEnd("Problem 1")