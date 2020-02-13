/*----- constants -----*/
/*----- app's state (variables) -----*/
let cards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
let player1Score = [];
let player2Score = [];
let pileOneVaules;
let pileTwoValues;
let flipCardOne;
let filpCardTwo;
/*----- cached element references -----*/
const btn = document.getElementById('button');
const displayPile1 = document.getElementById('pile-one');
const displayPile2 = document.getElementById('pile-two');
const player1Draw = document.getElementById('flipped-pile-one');
const player2Draw = document.getElementById('flipped-pile-two');
/*----- event listeners -----*/
btn.addEventListener('click',);
/*----- functions -----*/
init();
function init() {
    cards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
    player1Score = 0;
    player2Score = 0;
    pileOneVaules = [];
    pileTwoValues = [];
    render();
    dealer();
}
function render() {
    displayPile1.classList.add('back-red', 'no-border');
    displayPile2.classList.add('back-red', 'no-border');
    player1Draw.className = 'card large';
    player2Draw.className = 'card large';
}
//(dealer) function will divided the deck into two random decks.
function dealer() {
    if(cards.length === 52) {
        for (let i = 0; i < 26; i ++) {
            let rndIdx = Math.floor(Math.random() * cards.length);
            flipCardOne = cards.splice(rndIdx,1);
            pileOneVaules.push(flipCardOne[0]);
            rndIdx = Math.floor(Math.random() * cards.length);
            flipCardTwo = cards.splice(rndIdx,1);
            pileTwoValues.push(flipCardTwo[0]);
        }
        console.log(pileOneVaules,'grabing an index from the random array');
        console.log(pileTwoValues,'grabing an index from the random array');
        }
 }