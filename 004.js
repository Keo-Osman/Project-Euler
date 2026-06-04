console.time("Problem 4")

let max = 0
for (let i = 0; i <= 999; i++) {
  for (let j = 0; j <= 999; j++) {
    if (isPalindrome(i * j) && (i * j) > max) {
      max = i * j
    }
  }
}

console.log(max)
console.timeEnd("Problem 4")

//-----------------------
function isPalindrome(n) {
  let str = String(n)
  if (str === reverseString(str)) return true
  return false
}

function reverseString(str) {
  var splitString = str.split("")
  var reverseArray = splitString.reverse()
  var joinArray = reverseArray.join("")
  return joinArray;
}