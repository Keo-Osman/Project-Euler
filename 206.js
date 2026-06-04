let digits = [1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9]
console.log(Number.isInteger(Math.sqrt(Number(digits.join("")))))
const dig = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//TODO better solution

//1
loop1:
  for (let a of dig) {
    //2
    for (let b of dig) {
      //3
      for (let c of dig) {
        console.log("c")
          //4
        for (let d of dig) {
          //5
          for (let e of dig) {
            //6
            for (let f of dig) {
              //7
              for (let g of dig) {
                //8
                for (let h of dig) {
                  digits[1] = a
                  digits[3] = b
                  digits[5] = c
                  digits[7] = d
                  digits[9] = e
                  digits[11] = f
                  digits[13] = g
                  digits[15] = h
                  if (Number.isInteger(Math.sqrt(Number(digits.join(""))))) {
                    console.log(digits)
                  }

                }
              }
            }
          }
        }
      }
    }
  }