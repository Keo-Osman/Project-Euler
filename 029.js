console.time("Problem 29")

let map = new Map()

for(let a = 2n; a <= 100n; a += 1n){
  for(let b = 2n; b <= 100n; b += 1n){
    map.set(a**b, 1)
  }
}

console.log(map.size)
console.timeEnd("Problem 29")

