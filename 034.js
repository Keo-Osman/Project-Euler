console.time("Problem 34")


let factorials = [1]
for(let i = 1; i <= 9; i++){
  factorials[i] = i*factorials[i-1]
}

let res = 0
for(let n = 10; n <= 1_000_000; n++){
  let digits = n.toString().split("").map(x => Number(x))
  let total = 0
  for(let d of digits){
    total += factorials[d]
  }
  if(total === n) {
    res += n
  }
}

console.log(res)
console.timeEnd("Problem 34")
