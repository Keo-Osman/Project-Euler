// Horrible Solution but it somehow works in ~1.3s

console.time("Problem 31")
let count = 0
let iterations = 0
//1£
for(let f = 0; f <= 2; f++){
  //50p
  for(let i = 0; i <= 4; i++){
    //20p
    for(let j = 0; j <= 10; j++){
      //10p
      for(let k = 0; k <= 20; k++){
        //5p
        for(let l = 0; l <= 40; l++){
          //2p
          for(let m = 0; m <= 100; m++){
            //1p
            for(let n = 0; n <= 200; n++){
              if(100*f + 50*i + 20*j + 10*k + 5*l + 2*m + n === 200) count++
            }
          }
        }
      }
    }
  }
}

//+1 fo £2 coin on it's own
console.log(count+1)
console.timeEnd("Problem 31")
