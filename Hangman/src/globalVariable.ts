import {chooseRandomWords} from './chooseRandomWords.js';

export let wordDiv = document.getElementById('word')!;
export let finalMessage = document.getElementById('final-message')!;
export let popupcontainer = document.getElementById('popup-container')!;

export const imagePieces: NodeList = document.querySelectorAll('.images-piece');
export let wrongLetterDiv = document.getElementById('wrong-letters')!;

export class variables {
    public static correctLetter: Array<string> = [];
    public static wrongLetter: Array<string> = [];
    public static chooseRandomWord:string = chooseRandomWords();
    public static letter: string;
}