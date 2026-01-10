console.time("Problem 33")

let res = [1, 1]
for(let i = 1; i <= 99; i++){
  for(let j = i + 1; j <= 99; j++){
    if(validFrac(i, j)){
      res[0] *= i
      res[1] *= j
    }
  }
}

for(let i = 2; i <= res[1]; i++){
  while(res[0] % i === 0 && res[1] % i === 0){
    res[0] /= i
    res[1] /= i
  }
}


console.log(res[1])



console.timeEnd("Problem 33")




function validFrac(i, j){
  let removed = false
  let stri = i.toString().split("")
  let strj = j.toString().split("")
  if(stri.length === 1 && strj.length === 1) return
  if(stri[1] === "0" && strj[1] === "0") return
  if(stri[0] === strj[0]){
    stri.splice(0, 1)
    strj.splice(0, 1)
    removed = true
  }
  else if(stri[0] === strj[1]){
    stri.splice(0, 1)
    strj.splice(1, 1)
    removed = true
  }
  else if(stri[1] === strj[0]){
    stri.splice(1, 1)
    strj.splice(0, 1)
    removed = true
  }
  else if(stri[1] === strj[1]){
    stri.splice(1, 1)
    strj.splice(1, 1)
    removed = true
  }
  if((i/j) === Number(stri.join(""))/Number(strj.join("")) && removed){
    return true
  }
}