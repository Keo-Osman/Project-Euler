import util from "./util";

// no need to check 9 digits as sum of digist = 9 * 8 / 2 = 36 and 3 | 36 so none are prime.
// 8 didn't work

console.time("Problem 41")

for (let i = 9999999; i > 0; i--) {
  if (!isPandigital7(i)) continue
  if (util.isPrime(i)) {
    console.log(i)
    break
  }

}
console.timeEnd("Problem 41")


function isPandigital7(n) {
  let numOccurences = [0, 0, 0, 0, 0, 0, 0]
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