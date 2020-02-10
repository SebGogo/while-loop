// Cards array
const cards = ['diamond', 'spade', 'heart', 'club'];

// While loop with condition that checks if the currentCard does not have value 'spade'
let currentCard;
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
