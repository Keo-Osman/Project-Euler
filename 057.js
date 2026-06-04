console.time("Problem 57")

let n = 1n
let d = 1n
let count = 0
for (let i = 0; i <= 1_000; i++) {
  let tmpN = n
  n = 2n * d + n
  d = d + tmpN
  if (moreDigits(n, d)) count++

}

console.log(count)
console.timeEnd("Problem 57")


function moreDigits(n, d) {
  return n.toString().length > d.toString().length
}