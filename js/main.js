/*----- constants -----*/
/*----- app's state (variables) -----*/
let cards, player1Score, player2Score, pileOne, pileTwo
/*----- cached element references -----*/
const btn = document.getElementById('button');
const player1 = document.getElementById('player-one-starting-deck');
const player2 = document.getElementById('player-two-starting-deck');
const player1Draw = document.getElementById('player-one-draw-deck');
const player2Draw = document.getElementById('player-two-draw-deck');

/*----- event listeners -----*/
btn.addEventListener('flipCard', cardFlipped)

/*----- functions -----*/
function init() {
    cards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
    player1Score = 0;
    player2Score = 0;
    pileOne = [];
    pileTwo = [];
    render();
}
function render() {
    player1.classList.add('back-red', 'no-border');
    player2.classList.add('back-red', 'no-border');
    player1Draw.className('card', 'large');
    player2Draw.className('card', 'large');

}
// function shuffle() {
//     let idx = cards.length, temp, rndIdx;
//     while (0 !== idx) {
//       rndIdx = Math.floor(Math.random() * idx);
//       idx -= 1;
//       temp = cards[idx];
//       cards[idx] = cards[rndIdx];
//       cards[rndIdx] = temp;
//     }
// };