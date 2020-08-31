import {chooseRandomWords} from './chooseRandomWords.js';
import {variables, popupcontainer} from './globalVariable.js';
import { displayWord } from './displayWord.js';
import { updateWrongWord } from './wrongWord.js';

export function playAgain() {
    variables.correctLetter = [];
    variables.wrongLetter = [];

    variables.chooseRandomWord = chooseRandomWords();
    displayWord();
    updateWrongWord();

    popupcontainer.style.display = 'none';
}