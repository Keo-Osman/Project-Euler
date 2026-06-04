console.time("Problem 63")


//i = digit length
let count = 0
for (let i = 1; i < 22; i++) {
  // j = base
  for (let j = 1; j < 10; j++) {
    let len = (j ** i).toString().length
    if (len === i) {
      count++
    }
    if (len > i) break
  }
}

console.log(count)
console.timeEnd("Problem 63")