import util from "./util.js"
console.time("Problem 24")
console.log(util.nthPermutation("0123456789", 1_000_000 - 1))
console.timeEnd("Problem 24")