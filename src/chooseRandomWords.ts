import word from '../words.js';

// Random Array of Words
const randomWordsArray: Array<string> = word.value;

// Choose any word from the random words
export function chooseRandomWords():string {
    let chooseRandomWord: string = randomWordsArray[Math.floor(Math.random() * randomWordsArray.length)];
    return chooseRandomWord;
}