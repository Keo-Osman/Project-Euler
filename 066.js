console.time("Problem 55")

let sol = -1
for (let D = 2; D <= 1_000; D++) {
  if (isSquare(D)) continue
  sol = Math.max(sol, minSolution(D))
}

console.log(sol)
console.timeEnd("Problem 55")


function minSolution(D) {
  return D
}

function isSquare(n) {
  return Number.isInteger(Math.sqrt(n))
}