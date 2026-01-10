console.time("Problem 12")


let tri = 0
let i = 1
while(true){
  tri = (i*(i+1))/2

  let numDiv = numDivisors(tri)
  if(numDiv > 500){
    console.log(tri)
    break
  }
  i++
}

console.timeEnd("Problem 12")



function numDivisors(n){
  let count = 0
  for(let i = 1; i <= Math.sqrt(n); i++){
    if(n % i === 0){
      count += 2
    }
  }
  if(Number.isInteger(Math.sqrt(n))) count--
  return count
}

