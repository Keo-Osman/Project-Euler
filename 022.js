let names = await getData()
console.time("Problem 22")


names.sort()
let total = 0
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
for (let i = 0; i < names.length; i++) {
  let val = 0
  for (let j = 0; j < names[i].length; j++) {
    val += (alphabet.indexOf(names[i][j]) + 1)
  }
  val *= (i + 1)
  total += val
}

console.log(total)
console.timeEnd("Problem 22")

//---------------------
async function getData() {
  let names = await Bun.file('022.txt').text()
  names = names.split(",")
  for (let i = 0; i < names.length; i++) {
    names[i] = names[i].replace(/[^a-zA-Z0-9]/g, '')
  }
  return names
}