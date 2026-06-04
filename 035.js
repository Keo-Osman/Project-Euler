import util from "./util"
console.time("Problem 35")

let total = 0
for (let i = 2; i < 1_000_000; i++) {
  if (getRotations(i).every(util.isPrime)) {
    total += 1
  }
}

console.log(total)
console.timeEnd("Problem 35")


function getRotations(n) {
  let res = []
  let tmp = n
  res.push(n)
  const len = n.toString().length

  for (let i = 1; i < len; i++) {
    tmp = rotate(tmp)
    res.push(tmp)
  }
  return res
}

function rotate(n) {
  let str = n.toString()
  let rot = []
  str = str.split("")
  rot[0] = str[str.length - 1]
  for (let i = 1; i < str.length; i++) {
    rot[i] = str[i - 1]
  }
  return Number(rot.join(""))
}