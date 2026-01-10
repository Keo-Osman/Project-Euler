console.time("Problem 6")

let total = 0
for(let i = 0; i <=100;i++){
  total+=i
}

let totalSquare = 0
for(let i = 0; i <=100;i++){
  totalSquare+=i**2
}


console.log(total**2-totalSquare)
console.timeEnd("Problem 6")
