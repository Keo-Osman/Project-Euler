import util from "./util";
console.time("Problem 37")

let total = 0
let count = 0
let i = 10
while (count < 11) {
  if (getTruncationsLtoR(i).every(util.isPrime) && getTruncationsRtoL(i).every(util.isPrime)) {
    total += i
    count++
  }
  i++
}

console.log(total)
console.timeEnd("Problem 37")



function getTruncationsLtoR(n) {
  let res = []
  let str = n.toString().split("")
  for (let i = 0; i < str.length; i++) {
    res.push(str.toSpliced(0, i))
  }
  return res.map(x => Number(x.join("")))
}

function getTruncationsRtoL(n) {
  let res = []
  let str = n.toString().split("").reverse()
  for (let i = 0; i < str.length; i++) {
    res.push(str.toSpliced(0, i))
  }
  return res.map(x => Number(x.reverse().join("")))
}