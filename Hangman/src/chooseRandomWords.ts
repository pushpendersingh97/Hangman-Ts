import * as word from '../words.js';

// Random Array of Words
const randomWordsArray: Array<string> = word.default.value;

// Choose any word from the random words
export function chooseRandomWords():string {
    let chooseRandomWord: string = randomWordsArray[Math.floor(Math.random() * randomWordsArray.length)].toLowerCase();
    chooseRandomWord = randomWordsArray[Math.floor(Math.random() * randomWordsArray.length)].toLowerCase();
    return chooseRandomWord;
}