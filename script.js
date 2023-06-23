// // //* Below are the cards for the game, setting up the elements in JS as well as a sort of player status in the game boolean.

// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
// let cards = [firstCard, secondCard];
// let sum = firstCard + secondCard;
// let hasBlackJack = false;
// let isAlive = true;
// let message = "";
// let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
// let cardsEl = document.getElementById("cards-el");

// // //*  This below are the functions to begin the game , draw a new card, and random card.

// function getRandomCard() {
//   let randomNumber = Math.floor(Math.random() * 13) + 1;
//   return randomNumber;
// }

// function startGame() {
//   renderGame();
// }

// function renderGame() {
//   cardsEl.textContent = "Cards: ";
//   for (let i = 0; i < cards.length; i++) {
//     cardsEl.textContent += cards[i] + " ";
//   }

//   sumEl.textContent = "Sum: " + sum;
//   if (sum <= 20) {
//     message = "Do you want to draw a new card?";
//   } else if (sum === 21) {
//     message = "You've got Blackjack!";
//     hasBlackJack = true;
//   } else {
//     message = "You're out of the game!";
//     isAlive = false;
//   }
//   messageEl.textContent = message;
// }

// function newCard() {
//   let card = getRandomCard();
//   sum += card;
//   cards.push(card);
//   console.log(cards);
//   renderGame();
// }
const score = Math.floor(Math.random() * 11);

if (score >= 10) {
  console.log("Passing grade!");
} else if (score >= 5 && score < 10) {
  console.log("Failing grade!");
} else {
  console.log("Invalid score!");
}
