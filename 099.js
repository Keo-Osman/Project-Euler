const nums = (await Bun.file("099.txt").text())
  .split("\r\n")
  .map(x => {
    const arr = x.split(",").map(Number)
    return arr[1] * Math.log(arr[0])
  })

let max = 0
let sol = -1
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i]
    sol = i
  }
}
console.log(sol + 1)