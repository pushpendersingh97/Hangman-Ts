const imagePieces: NodeList = document.querySelectorAll('.images-piece');
let finalMessage = document.getElementById('final-message')!;
let popupcontainer = document.getElementById('popup-container')!;
let wordDiv = document.getElementById('word')!;
let wrongLetterDiv = document.getElementById('wrong-letters')!;

let correctLetter: Array<string> = [];
let wrongLetter: Array<string> = [];
var letter: string;

// Random Array of Words
const randomWords: Array<string> = ['hello'];
// Choose any word from the random words
let chooseRandomWord: string = randomWords[Math.floor(Math.random() * randomWords.length)].toLowerCase();

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

let showHangManParts = () => {
  
}

// It will check and update the correct word or character
let displayWord = () => {
    wordDiv.innerHTML = `
    ${chooseRandomWord
      .split('')
      .map(
        letter => `
          <span class="letter">
            ${correctLetter.includes(letter) ? letter : ''}
          </span>
        `
      )
      .join('')}
  `;
  
    const innerWord = wordDiv.innerText.replace(/\n/g, '');

    if(innerWord === chooseRandomWord){
        finalMessage.innerText = "Congrats, You have got word";
        popupcontainer.style.display = "flex";
    }
}

// Will update the wrong letter
let updateWrongWord = () => {
    wrongLetterDiv.innerHTML = `
    ${wrongLetter.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetter.map(letter => `<span>${letter}</span>`)}`;
    
    wrongLetter.forEach((value, index) => {
        let wrongLetterLength = wrongLetter.length;
        if(index < wrongLetterLength){
            imagePieces[index].style.display = 'block';
        }else{
            imagePieces[index].style.display = 'none';
        }
    });

    if(wrongLetter.length == imagePieces.length){
        finalMessage.innerText = "Sorry You have lost";
        popupcontainer.style.display = "flex";
    }
}

// Function that will render the word or error message
let wordsTyped = (e: KeyboardEvent) => {
    let letterASCIICode: number = e.keyCode;
    letter = e.key;
    
    if(alphabetsOnly(letterASCIICode)){
        if(chooseRandomWord.includes(letter)){
            if(!correctLetter.includes(letter)){
                correctLetter.push(letter);
                displayWord();
            }else{
                displayNotification();
            }
        }else{
            if(!wrongLetter.includes(letter)){
                wrongLetter.push(letter);

                updateWrongWord();
                showHangManParts();
            }
            else{
                displayNotification();
            }
        }
    }else{
        displayErrorMessage();
    }
}

window.addEventListener('keyup', wordsTyped);
displayWord();

