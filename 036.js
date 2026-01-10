import util from "./util"
console.time("Problem 36")

let total = 0
for(let i = 1; i < 1_000_000; i++){
  if(palindromicBaseN(i, 10) && palindromicBaseN(i, 2)) {
    total += i
  }
}

console.log(total)
console.timeEnd("Problem 36")


function palindromicBaseN(num, base){
  let digits = num.toString(base).split("")
  let tmp = [...digits]
  if(util.arrayEqual(tmp, digits.reverse())) return true
}

