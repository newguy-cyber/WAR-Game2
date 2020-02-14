/*----- constants -----*/
/*----- app's state (variables) -----*/
let player1Score = [];
let player2Score = [];
let p1Cards = [];
let p2Cards = [];
let flipCardOne = [];
let flipCardTwo = [];
let cardToFlip = '';
let p1Dealt = [];
let p2Dealt = [];
let compare1;
let compare2;
/*----- cached element references -----*/
const btn = document.getElementById('button');
const displayPile1 = document.getElementById('pile-one');
const displayPile2 = document.getElementById('pile-two');
const player1Draw = document.getElementById('flipped-pile-one');
const player2Draw = document.getElementById('flipped-pile-two');
/*----- event listeners -----*/
btn.addEventListener('click',flipCard);
/*----- functions -----*/
init();
//The init function will delcare the values inside the dealer funcution.
function init() {
    cards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
    player1Score = 0;
    player2Score = 0;
    p1Cards = [];
    p2Cards = [];
    flipCardOne = [];
    flipCardTwo = [];
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
            player1Draw.className = (`${flipCardOne} + large + card`)
            p1Cards.push(flipCardOne[0]);
            rndIdx = Math.floor(Math.random() * cards.length);
            flipCardTwo = cards.splice(rndIdx,1);
            player2Draw.className = (`${flipCardTwo} + large + card`)
            p2Cards.push(flipCardTwo[0]);
        }
        console.log(p1Cards,'Grabing an index from the rndIdx array');
        console.log(p2Cards,'Grabing an index from the rndIdx array');
    }
}
//This funcution will flip through the array of each random deck.
flipCard();
function flipCard() {
    let rndIdx = Math.floor(Math.random() * p1Cards.length);
    cardToFlip = p1Cards.splice(rndIdx,1);
    player1Draw.className = (`${cardToFlip} + large + card`)
    compare1 = lookupValue(`${cardToFlip}`);
    p1Dealt.push(`${cardToFlip}`);
    rndIdx = Math.floor(Math.random() * p2Cards.length);
    cardToFlip = p2Cards.splice(rndIdx,1);
    player2Draw.className = (`${cardToFlip} + large + card`)
    compare2 = lookupValue(`${cardToFlip}`);
    console.log(p1Dealt, p2Dealt);
    console.log(compare1, compare2);
}
function getScore() {
    if(compare1 > compare2) {
        p1Cards.push(p1Dealt[0],p2Dealt[0])
    } if(compare1 > compare2) {
        p2Cards.push(p2Dealt[0],p2Dealt[0])
    }
}
function CheckerForWinner() {
    if(compare1 === compare2){
        
    }
}

function lookupValue(card) {
    if (card === "dA" || card === "cA" || card === "sA" || card === "hA") {
        return 14;
    }
    if (card === "dK" || card === "cK" || card === "sK" || card === "hK") {
        return 13;
    }
    if (card === "dQ" || card === "cQ" || card === "sQ" || card === "hQ") {
        return 12;
    }
    if (card === "dJ" || card === "cJ" || card === "sJ" || card === "hJ") {
        return 11;
    }
    if (card === "d10" || card === "c10" || card === "s10" || card === "h10") {
        return 10;
    }
    if (card === "d09" || card === "c09" || card === "s09" || card === "h09") {
        return 9;
    }
    if (card === "d08" || card === "c08" || card === "s08" || card === "h08") {
        return 8;
    }
    if (card === "d07" || card === "c07" || card === "s07" || card === "h07") {
        return 7;
    }
    if (card === "d06" || card === "c06" || card === "s06" || card === "h06") {
        return 6;
    }
    if (card === "d05" || card === "c05" || card === "s05" || card === "h05") {
        return 5;
    }
    if (card === "d04" || card === "c04" || card === "s04" || card === "h04") {
        return 4;
    }
    if (card === "d03" || card === "c03" || card === "s03" || card === "h03") {
        return 3;
    }
    if (card === "d02" || card === "c02" || card === "s02" || card === "h02") {
        return 2;
    }
}