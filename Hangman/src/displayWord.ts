import { wordDiv, variables, finalMessage, popupcontainer} from './globalVariable.js';

/* 
** This function will :- 
    ** Update the UI for the random word that is generated
    ** Make the underlined UI according to the random word
    ** Show the pop up container, If you Win
*/
let displayWord:Function;

export default displayWord = () => {
 const exportedVariable =  variables.getInstance();
  wordDiv.innerHTML = `
    ${exportedVariable.chooseRandomWord
      .split('')
      .map(
        letter => `
          <span class="letter">
            ${exportedVariable.correctLetterArray.includes(letter) ? letter : ''}
          </span>
        `
      )
      .join('')}
  `;
  
    const innerWord = wordDiv.innerText.replace(/\n/g, '');

    if(innerWord === exportedVariable.chooseRandomWord){
        finalMessage.innerText = "Congrats, You have got word";
        popupcontainer.style.display = "flex";
    }
}