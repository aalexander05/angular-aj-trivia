import { Component, OnInit } from '@angular/core';

import { Scripture, GameMode } from './scripture';

import { ScriptureService } from './scripture.service'

@Component({
  selector: 'app-scripture-guess',
  templateUrl: './scripture-guess.component.html',
  styleUrls: ['./scripture-guess.component.css']
})
export class ScriptureGuessComponent implements OnInit {

  scripture : Scripture;
  pagebooks : any[];
  message: string = '';

  gameMode : GameMode = {
    answerCount : 4
  };

  constructor(private scv : ScriptureService) { }

  getScripture() : void {
    console.log('getting scripture');
    this.scv.getRandomScripture().then( (scripture) => {
      console.log('we got a scripture');
      console.log(scripture);
      this.scripture = scripture;
      this.getBooks();
    })
  }

  getBooks() : void {
    console.log('GETTING BOOKS');
    // this.scv.getBookInfo().then( (books) => { 
    //   console.log('We GOT BOOKS');
    //   this.pagebooks = books; 
    // } ) ;
    let correctAnswer = this.scripture.verses[0].book_name;
    this.scv.getAnswerOptions(this.gameMode.answerCount, correctAnswer).then( (books) => { 
      console.log('We GOT BOOKS');
      console.log(books);
      this.pagebooks = books; 
    } ) ;
  }


  checkScripture(bookName:string) : void {
    console.log(`checking ${bookName} against ${this.scripture.verses[0].book_name}`)
    this.message = this.scripture.verses[0].book_name.includes(bookName) ? 'correct' : 'incorrect';
  }

  reset() : void{
    this.message = '';
    this.getScripture();
  }

  ngOnInit() {
    this.getScripture();
    //this.getBooks();
  }

}