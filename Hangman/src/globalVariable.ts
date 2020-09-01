import {chooseRandomWords} from './chooseRandomWords.js';

export let wordDiv: HTMLElement, 
        finalMessage: HTMLElement,
        popupcontainer: HTMLElement, 
        imagePieces:NodeList, 
        wrongLetterDiv: HTMLElement;

wordDiv = document.getElementById('word')!;
finalMessage = document.getElementById('final-message')!;
popupcontainer = document.getElementById('popup-container')!;
imagePieces = document.querySelectorAll('.images-piece');
wrongLetterDiv = document.getElementById('wrong-letters')!;

export class variables {
    public static correctLetter: Array<string> = [];
    public static wrongLetter: Array<string> = [];
    public static chooseRandomWord:string = chooseRandomWords();
    public static letter: string;
}