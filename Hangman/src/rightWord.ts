import {variables} from './globalVariable.js';
import { displayWord } from './displayWord.js';
import { updateWrongWord } from './wrongWord.js';

// check whether the pressed key is alphabet or not
let alphabetsOnly = (letterASCIICode:number): boolean =>  {
    if (letterASCIICode > 64 && letterASCIICode < 91)
        return true;
    else
        return false;
}

// It will display the error message
let displayErrorMessage = (): void => {
    document.querySelector('#error-conatiner')?.classList.add('show');

    setTimeout(
        ()=> {
         document.querySelector('#error-conatiner')?.classList.remove('show');
        }, 
    1000);
}

// It will display the notification message
let displayNotification = (): void => {
    document.querySelector('#notification-container')?.classList.add('show');

    setTimeout(
        ()=> {
         document.querySelector('#notification-container')?.classList.remove('show');
        },
    1000);
}

// Function that will render the word or error message
export let wordsTyped = (e: KeyboardEvent) => {
    let letterASCIICode: number = e.keyCode;
    variables.letter = e.key;
    
    if(alphabetsOnly(letterASCIICode)){
        if(variables.chooseRandomWord.includes(variables.letter)){
            if(!variables.correctLetter.includes(variables.letter)){
                variables.correctLetter.push(variables.letter);
                displayWord();
            }else{
                displayNotification();
            }
        }else{
            if(!variables.wrongLetter.includes(variables.letter)){
                variables.wrongLetter.push(variables.letter);

                updateWrongWord();
            }
            else{
                displayNotification();
            }
        }
    }else{
        displayErrorMessage();
    }
}