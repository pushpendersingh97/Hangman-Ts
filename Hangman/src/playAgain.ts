import {variables, popupcontainer} from './globalVariable.js';
import ReUpdateUI from './displayWord.js';
import { updateWrongWord } from './rightWord.js';

/* 
** This function is called when we click on Play Again
*/
export function playAgain():void {
    if(variables.instance != null) {
       delete variables.instance;
    }
    variables.getInstance();
    ReUpdateUI();
    updateWrongWord();
    popupcontainer.style.display = 'none';
}