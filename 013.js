console.time("Problem 13")

let content = await Bun.file("013.txt").text()
let nums = content.split(`\n`)
for(let i = 0; i < nums.length; i++){
  nums[i] = BigInt(Number(nums[i]))
}

let total = 0n;
for(let i = 0; i < nums.length;i++){
  total += nums[i]
}


console.log(total.toString().slice(0, 10))
console.timeEnd("Problem 13")
