// Given a number and an array returns an array full of all the possible candidates of next elements in the chain 
function search(num, arr) {
  const digits = num - 100 * Math.floor(num / 100)
  return arr.filter(n => Math.floor(n / 100) === digits)
}

// Recursive DFS function
// Takes input the current chain as well as an arry keeping track of which out of triangular, square, etc..
// we've already found/used - don't want a chain the goes square -> pentagon -> square
function findChain(chain, found) {

  // If the chain has length 6 we've found our solution
  if (chain.length === 6) {
    // Checking if the chain wraps around
    if (chain[5] % 100 === Math.floor(chain[0] / 100)) return chain
    return null
  }

  // Outer loop in i loops over all the possible arrays left e.g if our chain so far is triangle->pentagon-> square,
  // then we need to look in all of hexagon, heptogon, octagon to find all possibilities of the next chain element
  for (let i = 0; i < 6; i++) {
    if (found.includes(i)) continue // Skips arrays we've already checked
    for (const match of search(chain[chain.length - 1], bigArr[i])) { // Iterates over all possible next chain elements
      const result = findChain([...chain, match], [...found, i]) // Recursively looks for next chain elements for each of these
      if (result !== null) return result // If a chain was found return it back up the call stack
    }
  }

  return null // no possible continuation of chain was found
}

console.time("Problem 61")


let triangles = []
let squares = []
let pentagons = []
let hexagons = []
let heptagons = []
let ocatagons = []

// Generate arrays for 4 digit triangluar, square, etc... numbers
for (let i = 0; i <  1_000; i++) {
  const tri = i * (i + 1) / 2
  if (1000 <= tri && tri <= 9999) triangles.push(tri)

  const square = i * i
  if (1000 <= square && square <= 9999) squares.push(square)

  const pent = i * (3 * i - 1) / 2
  if (1000 <= pent && pent <= 9999) pentagons.push(pent)

  const hex = i * (2 * i - 1)
  if (1000 <= hex && hex <= 9999) hexagons.push(hex)

  const hept = i * (5 * i - 3) / 2
  if (1000 <= hept && hept <= 9999) heptagons.push(hept)

  const oct = i * (3 * i - 2)
  if (1000 <= oct && oct <= 9999) ocatagons.push(oct)

  if (tri >= 9999) break
}
const bigArr = [triangles, squares, pentagons, hexagons, heptagons, ocatagons]


// Call find chain testing every triangular number as a start point
for (let num of triangles) {
  const res = findChain([num], [0])

  // Once a successfull chain is break and print the sum
  if (res != null) {
    console.log(
      res.reduce((acc, v) => acc + v)
    )
    break
  }
}

console.timeEnd("Problem 61")