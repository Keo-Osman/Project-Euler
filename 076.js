let amount = 100

function ways(target, avc) {
  if (avc <= 1) return 1
  let res = 0
  while (target >= 0) {
    res += ways(target, avc - 1)
    target = target - avc
  }
  return res
}


console.log(ways(amount, 100) - 1)