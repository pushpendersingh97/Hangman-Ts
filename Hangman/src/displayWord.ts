import { wordDiv, variables, finalMessage, popupcontainer} from './globalVariable.js';

// It will check and update the correct word or character
export let displayWord = () => {
    wordDiv.innerHTML = `
    ${variables.chooseRandomWord
      .split('')
      .map(
        letter => `
          <span class="letter">
            ${variables.correctLetter.includes(letter) ? letter : ''}
          </span>
        `
      )
      .join('')}
  `;
  
    const innerWord = wordDiv.innerText.replace(/\n/g, '');

    if(innerWord === variables.chooseRandomWord){
        finalMessage.innerText = "Congrats, You have got word";
        popupcontainer.style.display = "flex";
    }
}