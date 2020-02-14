/*----- constants -----*/
/*----- app's state (variables) -----*/
// let player1Score = [];
// let player2Score = [];
let p1Cards = [];
let p2Cards = [];
let flipCardOne = [];
let flipCardTwo = [];
let cardToFlip = '';
let p1Dealt = [];
let p2Dealt = [];
let compare1;
let compare2;
let warCards1 = [];
let warCards2 = [];
/*----- cached element references -----*/
const btn = document.getElementById('button');
const msg = document.getElementById('msg');
const displayPile1 = document.getElementById('pile-one');
const displayPile2 = document.getElementById('pile-two');
//displaypile and displaypile2 are only used to display the back of the card.
const player1Draw = document.getElementById('flipped-pile-one');
const player2Draw = document.getElementById('flipped-pile-two');
/*----- event listeners -----*/
btn.addEventListener('click',flipCard);
/*----- functions -----*/
init();
//The init function will delcare the values inside the dealer funcution.
function init() {
    cards = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
    // player1Score = 0;
    // player2Score = 0;
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
            //line 47 is genrating a random number array
            flipCardOne = cards.splice(rndIdx,1);
            //pushing the random array into the flipcardone
            player1Draw.className = (`${flipCardOne} + large + card`)
            //player1draw is displaying the vaule of the flipcardsone array index.
            p1Cards.push(flipCardOne[0]);
            //using the (push method) to push the vaules of flipcardone to p1cards.
            rndIdx = Math.floor(Math.random() * cards.length);
            flipCardTwo = cards.splice(rndIdx,1);
            player2Draw.className = (`${flipCardTwo} + large + card`)
            p2Cards.push(flipCardTwo[0]);
        }
        // console.log(p1Cards,'Grabing an index from the rndIdx array');
        // console.log(p2Cards,'Grabing an index from the rndIdx array');
    }
}
//This funcution will flip through the array of each random deck.
function flipCard() {
    let rndIdx = Math.floor(Math.random() * p1Cards.length);
    //whats the purpose of (cardtoflip)?
    cardToFlip = p1Cards.splice(rndIdx,1);
    //now where pushing the arrays vaules to from p1cards to card to flip and putting it in a string.
    player1Draw.className = (`${cardToFlip} + large + card`)
    //player1draw is displaying index of (cardtoflip)
    p1Dealt.push(`${cardToFlip}`);
    //now we are pushing the array cardtoflip to p1dealt.
    compare1 = lookupValue(`${cardToFlip}`);
    //compare one is looking up the vaule of cardtoflip.
    //began the process all over again.
    rndIdx = Math.floor(Math.random() * p2Cards.length);
    cardToFlip = p2Cards.splice(rndIdx,1);
    player2Draw.className = (`${cardToFlip} + large + card`)
    p2Dealt.push(`${cardToFlip}`);
    compare2 = lookupValue(`${cardToFlip}`);
    getScore();
}
function getScore() {
    if(compare1 > compare2) {
        p1Cards.push(p1Dealt[p1Dealt.length - 1],p2Dealt[p2Dealt.length - 1])
        msg.textContent = 'player 1 won hand';
        //if compare1 is greater than compare2 push those cards into p1cards
    } if(compare1 < compare2) {
        //if compare2 is less than compare2 push those cards in p2cards.
        p2Cards.push(p1Dealt[p1Dealt.length - 1],p2Dealt[p2Dealt.length - 1])
        msg.textContent = 'player 2 won hand';
    } if(compare1 === compare2) {
        warCards1 = p1Cards.slice(0,4);
        warCards2 = p2Cards.slice(0,4);
        if(lookupValue(warCards1[3]) > lookupValue(warCards2[3])){
            msg.textContent = 'player 1 won war'
            p1Cards.push(warCards1[0],warCards1[1],warCards1[2],warCards1[3],warCards2[0],warCards2[1],warCards2[2],warCards2[3])
        }if(lookupValue(warCards1[3]) < lookupValue(warCards2[3])){
            msg.textContent = 'player 2 won war'
            p2Cards.push(warCards1[0],warCards1[1],warCards1[2],warCards1[3],warCards2[0],warCards2[1],warCards2[2],warCards2[3])
        }
        shuffle();
    } 
    console.log(warCards1);
    console.log(p1Cards, p2Cards);
    //logging the what the vaule of p1dealt and p2dealt
    console.log(compare1, compare2);
    //logging p1Dealt & p1dealt is displaying what index is currently in that array.
}
function shuffle() {
    if(p1Cards.length === 0) {
        let rndIdx = Math.floor(Math.random() * cards.length);
        cardToFlip = p1Cards.splice(rndIdx,1);
    }if(p2Cards.length === 0) {
        let rndIdx = Math.floor(Math.random() * cards.length);
        cardToFlip = p2Cards.splice(rndIdx,1);
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