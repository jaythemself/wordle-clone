// add words.js to import list of words

// initialize global variable, select from words the answer for the round
// log selected word to console for debug

const totalNumGuesses = 6;
let guessesRemain = totalNumGuesses;
let currentGuess = [];
let nextLetter = 0;
let correctGuessWord = potentialAnswerList[Math.floor(Math.random() * potentialAnswer.length)]
console.log(correctGuessWord)


// create one row for every guess and 5 boxes per row
// one box per letter of the guess
// function making all boxes children of their row
// add each row to board container
// give each row the class letter-row, each box assigned letter-box

function gameBoard() {

}

// function checking space in the guess for another letter. if space, locates appropriate row and box for new letter

function nextLetterOfGuess() {

}

// backspace function that gets relevant row, locates last box and empties it, resets letter counter

function deleteLetter() {

}

// function that validates input (guess is 5 letters long, valid input, checks letter/shade corrects, communicates status of game to user)

function checkGuess() {

}

// function that receives letter to color/shade, finds key that matches (if already color, do nothing)

function colorLetter() {

}

// check user input/pressed key is single alphabet letter (addEventListener)
// ignore event otherwise (number, space, special character, order [tab, shift, etc])
// if input correct, insert onto board

// function listening for click on keyboard container or any children (keys)
// if not a key, exit; else event corresponding to user-selected key

// function animating page (apply classes to target to trigger, remove added class/resolve promise on end)

// add a style.css file and a wordbank.js file
// add an index.html-- link css and libraries and execute script.js, display digital keyboard for game