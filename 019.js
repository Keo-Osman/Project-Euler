console.time("Problem 19")

let total = 0
let dayOfWeek = 2 

let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31]

for(let year = 1901; year <= 2000; year++){
  for(let month = 0; month < 12; month++){
    if(dayOfWeek === 0) total++ 
    let days = monthDays[month]

    if(month === 1){ 
      if((year % 4 === 0)){
        days = 29
      }
    }

    dayOfWeek = (dayOfWeek + days) % 7 
  }
}

console.log(total) 
console.timeEnd("Problem 19")
