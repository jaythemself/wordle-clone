// add words.js to import list of words

//initialize global variable, select from words the answer for the round
//log selected word to console for debug

const totalNumGuesses = 6;
let guessesRemain = totalNumGuesses;
let currentGuess = [];
let nextLetter = 0;
let correctGuessWord = potentialAnswerList[Math.floor(Math.random() * potentialAnswer.length)]
console.log(correctGuessWord)
