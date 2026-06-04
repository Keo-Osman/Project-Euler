let logins = await getData()

let matrix = []
for (let i = 0; i <= 9; i++) {
  matrix[i] = []
  for (let j = 0; j <= 9; j++) {
    matrix[i][j] = 0
  }
}
//matrix[i][j] = -1 if i before j, 1 if i after j

for (let login of logins) {
  matrix[Number(login[0])][Number(login[1])] = set(matrix[Number(login[0])][Number(login[1])], -1)
  matrix[Number(login[1])][Number(login[0])] = set(matrix[Number(login[1])][Number(login[0])], 1)

  matrix[Number(login[0])][Number(login[2])] = set(matrix[Number(login[0])][Number(login[2])], -1)
  matrix[Number(login[2])][Number(login[0])] = set(matrix[Number(login[2])][Number(login[0])], 1)

  matrix[Number(login[1])][Number(login[2])] = set(matrix[Number(login[1])][Number(login[2])], -1)
  matrix[Number(login[2])][Number(login[1])] = set(matrix[Number(login[2])][Number(login[1])], 1)
}


for (let i = 0; i < matrix.length; i++) {
  console.log(i, matrix[i])
}

async function getData() {
  let logins = await Bun.file("079.txt").text()
  return logins.split("\r\n")
}


function set(a, b) {
  if (a === (b * -1)) return 2
  return b
}