let max = -1
let sol = 0
let num = 0



const divisorSums = (await Bun.file("divisors.txt").text()).split(",").map(Number)


let chains = new Map()
for (let i = 1; i < 1_000_000; i++) {
  const res = amicableChain(i)
  if (res != null) {
    if (res.length > max) {
      num = i
      max = res.length
      sol = res.smallest
    }
  }
}

console.log(sol)




function amicableChain (n) {
  const start = n

  let smallest = n
  let current = n
  let length = 0

  let seen = new Map()
  seen.set(n, true)
  
  while (true) {
    length += 1
    let next = divisorSums[current]
    smallest = Math.min(smallest, next)

    if (next === start) {
      chains.set(n, true)
      return {length: length, smallest: smallest}
    }
    
    if (next > 1_000_000 || seen.get(next) || chains.get(n)) return null
    seen.set(next, true)
    current = next
  }

}
