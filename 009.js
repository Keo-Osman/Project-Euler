console.time("Problem 9")

let end = false
for(let i = 1; i <= 1000;i++){
  for(let j = 1; j <= (1000-i);j++){
    if(i**2+j**2 === (1000-i-j)**2){
      console.log(i*j*(1000 - i - j))
      end = true
      break
    }
  }
  if(end) break
}

console.timeEnd("Problem 9")
