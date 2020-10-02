/* 
** Global variables file used in whole projects
*/
import {chooseRandomWords} from './chooseRandomWords.js';

/* 
** Variables that need to be updated on use bases
*/
export class variables {
    correctLetters: Array<string>;
    wrongLetter: Array<string>;
    
    letter: string;
    chooseRandomWord:string;
    public static instance: variables;
    
    constructor() {
        this.correctLetters = [];
        this.wrongLetter = [];
        this.letter = '';
        this.chooseRandomWord = chooseRandomWords();
    }
    
    get randomWord() {
        return this.chooseRandomWord;
    }
    get correctLetterArray() {
        return this.correctLetters;
    }
    get wrongLetterArray() {
        return this.wrongLetter;
    }
    get letterTyped() {
        return this.letter;
    }

    // To make the class instance only once (Or singlinton)
    static getInstance(){
        if (this.instance){
            return this.instance;
        }
        this.instance = new variables();
        return this.instance;
    }
 }

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

