/*----- constants -----*/
const cards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
const btn = document.getElementById('button');
const player1 = document.getElementById('player-one-deck');
const player2 = document.getElementById('player-two-deck');
const player1Draw = document.getElementById('player-one-draw-deck');
const player2Draw = document.getElementById('player-two-draw-deck');
const player1KeptDeck = document.getElementById('player-one-kept-deck');
const Player2KeptDeck = document.getElementById('player-two-kept-deck');
let flippedCard = [];
const 
console.log(cards)
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
 btn.addEventListener('flipCard', cardFlipped)

/*----- functions -----*/
function cardFlipped() {
    if(cards.length) {
        let rndIdx = Math.floor(Math.random() * cards.length);
    }
}