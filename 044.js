console.time("Problem 44")

let pentagons = []
for(let i = 1; i < 4_000; i++){
  pentagons.push( (i* (3*i - 1))/2 )
}

let min = 9999999999
let sol = [-1, -1]
for(let i = 0; i < pentagons.length; i++){
  for(let j = i + 1; j < pentagons.length; j++){
    let diff = pentagons[j] - pentagons[i]
    let sum = pentagons[j] + pentagons[i] 
    if (pentagons.includes(sum) && pentagons.includes(diff)){
      if(diff < min){
        min = diff
        sol = [i, j]
      }
    }
  }
}

console.log(min)
console.timeEnd("Problem 44")
