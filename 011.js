let arr = await getData()
console.time("Problem 11")

let max = 0
let prod = 1

//check left/right
for(let i = 0; i < 20; i++){
  for(let j = 0; j <= (20-4); j++){
    for(let k = 0; k < 4; k++){
      prod *= arr[i][j+k]  
    }
    if(prod > max) max = prod
    prod = 1
  }
}

//check up/down
for(let i = 0; i <= (20-4); i++){
  for(let j = 0; j < 20; j++){
    for(let k = 0; k < 4; k++){
      prod *= arr[i+k][j] 
    }
    if(prod > max) max = prod
    prod = 1
  }
}

//check diag down right
for(let i = 0; i <= (20-4); i++){
  for(let j = 0; j <= (20-4); j++){
    for(let k = 0; k < 4; k++){
      prod *= arr[i+k][j+k] 
    }
    if(prod > max) max = prod
    prod = 1
  }
}

//check diag down left
for(let i = 0; i <= (20-4); i++){
  for(let j = 3; j < 20; j++){
    for(let k = 0; k < 4; k++){
      prod *= arr[i+k][j-k] 
    }
    if(prod > max) max = prod
    prod = 1
  }
}

console.log(max)
console.timeEnd("Problem 11")

async function getData(){
  // Get contents into 2D array
  let content = await Bun.file(`011.txt`).text()
  let arrtmp = content.split(`\n`)
  let arr = []

  for(let i = 0 ; i < 20; i++){
    arr[i] = arrtmp[i].split(` `)
  }

  for(let i = 0; i < 20; i++){
    for(let j = 0; j < 20; j++){
      arr[i][j] = Number(arr[i][j])
    }
  }
  return arr
}