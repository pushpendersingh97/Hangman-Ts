let wrongLetters = document.getElementById('wrong-letters');
const imagePieces: NodeList = document.querySelectorAll('.images-piece');

// Random Array of Words
const randomWords: Array<string> = ['hello', 'name', 'pushpender', 'computer'];
// Choose any word from the random words
let chooseRandomWord: string = randomWords[Math.floor(Math.random() * randomWords.length)];

// check whether the pressed key is alphabet or not
let alphabetsOnly = (e: KeyboardEvent): boolean =>  {
    let charCode: number = e.keyCode;
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
        return true;
    else
        return false;
}

// It will display the error message
let displayErrorMessage = (): void => {
    document.querySelector('#error-conatiner')?.classList.add('show');

    setTimeout(()=> {
        document.querySelector('#error-conatiner')?.classList.remove('show');
        }, 1000
    );
}

let showHangManParts = () => {
  
}

// Function that will render the word or error message
let wordsTyped = (e: KeyboardEvent) => {

    if(alphabetsOnly(e)){
        if(chooseRandomWord.includes(e.key)){
            console.log("Hey I am here")
        }else{
            showHangManParts();
        }
    }else{
        displayErrorMessage();
    }
}

window.addEventListener('keyup', wordsTyped);

