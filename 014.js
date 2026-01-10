console.time("Problem 14")

let maxlen = 0
let sol = 1
for(let i = 2; i <= 1_000_000;i++){
  let len = collatzLength(i)
  if(len > maxlen) {
    maxlen = len
    sol = i
  }
}

console.log(sol)
console.timeEnd("Problem 14")


function collatzLength(n){
  let len = 0
  while(true){
    if(n === 1) {
      return len
    }
    if(n % 2 === 0){
      n /= 2
    }
    else{
      n = (3*n + 1)
    }
    len++
  }
}