console.time("Problem 16")

let num = (2n**1000n).toString()
let total = 0n

for(let i = 0; i < num.length;i++){
  total += BigInt(Number(num[i]))
}


console.log(total)
console.timeEnd("Problem 16")


