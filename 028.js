console.time("Problem 28")

let total = 0
for (let i = 3; i <= 1001; i += 2) {
  let topRight = i ** 2
  let topLeft = topRight - (i - 1)
  let bottomLeft = topLeft - (i - 1)
  let bottomRight = bottomLeft - (i - 1)
  total += (topRight + topLeft + bottomLeft + bottomRight)
}

//for centre
total += 1

console.log(total)
console.timeEnd("Problem 28")