console.time("Problem 45")

for(let i = 286; i < 1_000_000; i++){
  let tri = i*(i+1)/2
  if(isPentagonal(tri) && isHexagonal(tri)) {
    console.log(tri)
    break
  }
}

console.timeEnd("Problem 45")

function isPentagonal(n){
  return Number.isInteger(quadraticSol(1.5, -0.5, -n))
}

function isHexagonal(n){
  return Number.isInteger(quadraticSol(2, -1, -n))
}

function quadraticSol(a, b, c){
  return ((-b + Math.sqrt(b**2 - 4*a*c)) / (2*a))
}
