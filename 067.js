let nums = await getData()
console.time("Problem 67")


for (let i = nums.length - 2; i >= 0; i--) {
  for (let j = 0; j < nums[i].length; j++) {
    nums[i][j] += Math.max(nums[i + 1][j], nums[i + 1][j + 1])
  }
}

console.log(nums[0][0])
console.timeEnd("Problem 67")



async function getData() {
  let nums = await Bun.file(`067.txt`).text()
  nums = nums.split(`\n`)

  // Convert text into 2D array of nums
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i].split(" ")
    for (let j = 0; j < nums[i].length; j++) {
      nums[i][j] = Number(nums[i][j])
    }
  }
  return nums
}