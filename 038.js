import util from "./util"
console.time("Problem 38")

let max = -1
for(let i = 1; i < 10_000; i++){
  let prod = isPandigitalProduct(i)
  max = Math.max(prod, max)
}

console.log(max)
console.timeEnd("Problem 38")


function concatenatedProduct(num, n){
  let res = ""
  for(let i = 1; i <= n; i++){
    res += (num*i).toString()
  }
  return res
}

function isPandigitalProduct(num){
  let n = 2
  while (true){
    let res = concatenatedProduct(num, n)
    if(res.length > 9) return -1
    if(util.isPandigital(res)) return Number(res)
    n++
  }
  

}
