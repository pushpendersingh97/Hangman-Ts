import {variables, popupcontainer, imagePieces, wrongLetterDiv, finalMessage} from './globalVariable.js';
import UpdateCorrectLetter from './displayWord.js';

/**
 * 
 * @param letterASCIICode : number
 * check whether the pressed key is alphabet or not
 */
let alphabetsOnly = (letterASCIICode:number): boolean =>  {
    if (letterASCIICode > 64 && letterASCIICode < 91)
        return true;
    else
        return false;
}

/**
 * It will display the error message if you type something not an small alphabet
 */
let displayErrorMessage = (): void => {
   (document.querySelector('#error-conatiner') as HTMLDivElement).classList.add('show');

    setTimeout(
        ()=> {
              (document.querySelector('#error-conatiner') as HTMLDivElement).classList.remove('show');
        }, 
    1000);
}

/**
 * Display a notification about
 * that you have already entered that alphabet
 */
let displayNotification = (): void => {
    (document.querySelector('#notification-container')  as HTMLDivElement).classList.add('show');

    setTimeout(
        ()=> {
         (document.querySelector('#notification-container') as HTMLDivElement).classList.remove('show');
        },
    1000);
}

/**
 * 
 * @param e => a keyboard event
 * Function that will trigger on keyboard event
 * 
 */
export let wordsTyped = (e: KeyboardEvent) => {
    const globalVariable =  variables.getInstance();
    let letterASCIICode: number = e.keyCode;
    globalVariable.letter = e.key;
    
    if(alphabetsOnly(letterASCIICode)){
        if(globalVariable.chooseRandomWord.includes(globalVariable.letter)){
            if(!globalVariable.correctLetterArray.includes(globalVariable.letter)){
                globalVariable.correctLetterArray.push(globalVariable.letter);
                UpdateCorrectLetter();  // DisplayWord.ts
            }else{
                displayNotification();
            }
        }else{
            if(!globalVariable.wrongLetterArray.includes(globalVariable.letter)){
                globalVariable.wrongLetterArray.push(globalVariable.letter);

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

/**
 * Function that will update the image UI 
 * Will show you pop up container, if you have lost
 */
export let updateWrongWord = () => {
    const globalVariable =  variables.getInstance();
    
    wrongLetterDiv.innerHTML = `
    ${globalVariable.wrongLetterArray.length > 0 ? '<p>Wrong</p>' : ''}
    ${globalVariable.wrongLetterArray.map(letter => `<span>${letter}</span>`)}`;
    
    imagePieces.forEach((value, index) => {
        let wrongLetterLength = globalVariable.wrongLetterArray.length;
        if(index < wrongLetterLength){
            (imagePieces[index] as HTMLCanvasElement).style.display = 'block';
        }else{
            (imagePieces[index] as HTMLCanvasElement).style.display = 'none';
        }
    });

    if(globalVariable.wrongLetterArray.length == imagePieces.length){
        finalMessage.innerText = "Sorry, You have lost. Correct Word is: " + globalVariable.chooseRandomWord;
        popupcontainer.style.display = "flex";
    }
}