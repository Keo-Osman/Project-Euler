console.time("Problem 32");
let total = 0
let map = new Map()
for (let i = 1; i < 1_000; i++) {
  if (!hasUniqueDigits(i)) continue
  for (let j = i + 1; j < 10_000; j++) {
    if (!hasUniqueDigits(j)) continue
    if (isValidSum(i, j)) map.set(i * j, 1)
  }
}

for (let num of map) {
  total += num[0]
}
console.log(total)
console.timeEnd("Problem 32");

function hasUniqueDigits(n) {
  let numOccurences = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  let str = n.toString()
  for (let char of str) {
    if (char === "0") return false
    if (numOccurences[Number(char - 1)] === 1) return false
    numOccurences[Number(char - 1)] += 1
  }
  return true
}

function isPandigital(n) {
  let numOccurences = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  let str = n.toString()
  for (let char of str) {
    if (char === "0") return false
    numOccurences[Number(char - 1)] += 1
  }

  for (let num of numOccurences) {
    if (num != 1) return false
  }
  return true
}


function isValidSum(i, j) {
  let expression = Number(j.toString() + i.toString() + (i * j).toString())
  if (isPandigital(expression)) {
    return true
  }
  return false
}