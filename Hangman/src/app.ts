import { displayWord } from './displayWord.js';
import { wordsTyped } from './rightWord.js';
import { playAgain } from './playAgain.js';

window.addEventListener('keyup', wordsTyped);
displayWord();

// Play Again button
document.getElementById('play-button')?.addEventListener('click', playAgain);

