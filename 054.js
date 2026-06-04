let cardNums = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"]
let hands = (await Bun.file("054.txt").text())
  .split("\r\n")
  .map(x => {
    let cards = []
    for (let card of x.split(" ")) {
      cards.push([cardNums.indexOf(card[0]), card[1]])
    }

    let p1Hand = []
    for (let i = 0; i < 5; i++) {
      p1Hand.push(cards[i])
    }

    let p2Hand = []
    for (let i = 5; i < 10; i++) {
      p2Hand.push(cards[i])
    }


    return [p1Hand, p2Hand]
  })

for (let hand of hands) {
  if (isFlush(hand[0])) console.log(hand[0])
}


function isFlush(hand) {
  const suit = hand[0][1]
  return (hand.every(x =>
    x[1] == suit
  ))
}