import util from "./util"
let primes = []
for (let p = 2; p < 1_000; p++) {
  if (util.isPrime(p)) primes.push(p)
}


function ways(target, avc) {
  if (avc <= 0) {
    if (target % 2 === 0) return 1
    return 0
  }
  let res = 0
  while (target >= 0) {
    res += ways(target, avc - 1)
    target = target - primes[avc]
  }
  return res
}


for (let i = 3; i <= 1_000_000; i++) {
  let lenLess = 0
  for (let p of primes) {
    if (p < i) lenLess++
      else break
  }
  if (ways(i, lenLess) > 5_000) {
    console.log(i)
    break
  }
}