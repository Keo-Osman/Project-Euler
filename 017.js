console.time("Problem 17")

let total = 0
for (let i = 1; i <= 999; i++) {
  total += stringLen(i)
}

console.log(total + 11) //+11 for one thousand
console.timeEnd("Problem 17")




//stringLen(342)
function stringLen(n) {
  let len = 0
  let hundreds = 0
  let tens = 0
  let units = 0
  let wordLen = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4]
  let wordLenTens = [0, 0, 6, 6, 5, 5, 5, 7, 6, 6]
  let wordLenTeens = [3, 6, 6, 8, 8, 7, 7, 9, 8, 8]
  if (n >= 100) {
    let str = String(n)
    hundreds = parseInt(str[0])
    tens = parseInt(str[1])
    units = parseInt(str[2])
    if (tens != 1) {
      // console.log(`${wordLen[hundreds]} for hundreds, ${wordLenTens[tens]} for tens, ${wordLen[units]} for units`)
      len += wordLen[hundreds] + wordLenTens[tens] + wordLen[units]
      len += 7 // for "hundred"
      if (!(units === 0 && tens === 0)) len += 3 // for and
    } else {
      // console.log(`${wordLen[hundreds]} for hundreds, ${wordLenTeens[units]} for teen`)
      len += wordLen[hundreds] + wordLenTeens[units]
      len += 7 // for "hundred"
      len += 3 // for and
    }
  } else if (n >= 10 && n < 100) {
    let str = String(n)
    tens = parseInt(str[0])
    units = parseInt(str[1])
    if (n < 20) {
      // console.log(`${wordLenTeens[units]} for ${n}`)
      len = wordLenTeens[units]
    } else {
      // console.log(`${wordLenTens[tens]} for tens, ${wordLen[units]} for units`)
      len += (wordLenTens[tens] + wordLen[units])
    }

  } else {
    units = parseInt(String(n)[0])
      // console.log(`${wordLen[units]} for ${n}`)
    return wordLen[units]
  }

  // console.log(`${n}: ${len}`)
  return len
}