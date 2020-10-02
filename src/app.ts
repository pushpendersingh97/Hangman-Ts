/* 
** Author : Pushpender Singh 
** Description: This is the main file that will be initiated first on starting
*/

import DisplayBlankSpace from './displayWord.js';
import { wordsTyped } from './rightWord.js';
import { playAgain } from './playAgain.js';

window.addEventListener('keyup', wordsTyped);
DisplayBlankSpace();

/* 
** Play agin button event binding
*/
document.getElementById('play-button')?.addEventListener('click', playAgain);

