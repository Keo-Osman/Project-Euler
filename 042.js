
console.time("Problem 42")

let map = new Map()

let words = await Bun.file('042.txt').text()
words = words.split(",").map(x => {
  x = x.split("")
  x.splice(0, 1)
  x.splice(x.length - 1, 1)
  return x.join("")
})

let max = 0
words.forEach(x => {
  if (x.length > max) max = x.length
})

let triangles = []
let i = 1
while(true){
  let tri = 0.5 * i * (i+1)
  if(tri > 364) break
  triangles.push(tri)
  i++
}


let count = 0
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
words.forEach(x =>{
  let sum = x.split("").reduce((acc, x) => {
    acc += letters.indexOf(x) + 1
    return acc
  }, 0)
  if(triangles.includes(sum)) count++
})




console.log(count)
console.timeEnd("Problem 42")
