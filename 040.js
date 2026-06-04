console.time("Problem 40")

let digits = []

let i = 1
while (digits.length < 1_000_000) {
  digits.push(...i.toString().split(""))
  i++
}

digits.map(x => Number(x))

console.log(digits[0] * digits[9] * digits[99] * digits[999] * digits[9999] * digits[99999] * digits[999999])
console.timeEnd("Problem 40")