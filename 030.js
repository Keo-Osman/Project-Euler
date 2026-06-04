console.time("Problem 30")

let total = 0
let nums = []
let final = 0

for (let i = 2; i <= 1000000; i++) {
  nums = i.toString().split("")
  total = 0
  for (let num of nums) {
    total += (Number(num)) ** 5
  }
  if (total === i) final += i

}
console.log(final)
console.timeEnd("Problem 30")