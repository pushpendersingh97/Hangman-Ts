import {variables, popupcontainer, imagePieces, wrongLetterDiv, finalMessage} from './globalVariable.js';

// Will update the wrong letter
export let updateWrongWord = () => {
    wrongLetterDiv.innerHTML = `
    ${variables.wrongLetter.length > 0 ? '<p>Wrong</p>' : ''}
    ${variables.wrongLetter.map(letter => `<span>${letter}</span>`)}`;
    
    imagePieces.forEach((value, index) => {
        let wrongLetterLength = variables.wrongLetter.length;
        if(index < wrongLetterLength){
            (imagePieces[index] as HTMLCanvasElement).style.display = 'block';
        }else{
            (imagePieces[index] as HTMLCanvasElement).style.display = 'none';
        }
    });

    if(variables.wrongLetter.length == imagePieces.length){
        finalMessage.innerText = "Sorry, You have lost. Correct Word is: " + variables.chooseRandomWord;
        popupcontainer.style.display = "flex";
    }
}