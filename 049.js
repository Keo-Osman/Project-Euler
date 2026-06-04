import util from "./util"
console.time("Problem 49")

let sol = [0, 0, 0]
for (let i = 1111; i < 9999; i++) {
  if (isValidAP(getPermutations(i))) {
    console.log(sol.join(""))
    break
  }
}
console.timeEnd("Problem 49")



function getPermutations(n) {
  let res = []
  for (let i = 0; i < 24; i++) {
    res.push(util.nthPermutation(n.toString(), i))
  }
  return res.map(x => Number(x)).sort()
}


function isValidAP(nums) {
  nums = nums.filter(util.isPrime)

  if (nums.length < 3) return false
  const aps = generateAPs(nums)
  aps.forEach(x => {
    if (isAP(x)) sol = x
  })
  return aps.some(isAP)
}

function generateAPs(nums) {
  let aps = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        aps.push([nums[i], nums[j], nums[k]])
      }
    }
  }
  return aps
}

function isAP(ap) {
  if (
    (ap[0] - ap[1]) === (ap[1] - ap[2]) &&
    ap[0] < ap[1] &&
    ap[1] < ap[2] &&
    ap[0] != 1487
  ) return true
  return false
}

// function computeDifferences(nums){
//   console.log(nums)
//   let diff = new Map()
//   for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//       console.log(nums[j], nums[i], nums[j] - nums[i])
//       let tmp = diff.get(nums[j] - nums[i])
//       if(tmp) {
//         diff.set(nums[j] - nums[i], tmp + 1)
//       }
//       else {
//         diff.set(diff.get(nums[j] - nums[i]), 1)
//       }
//     }
//   }
//   return diff
// }

isValidAP(getPermutations(1487))