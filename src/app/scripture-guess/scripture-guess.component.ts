import { Component, OnInit } from '@angular/core';

import { Scripture } from './scripture';

import { ScriptureService } from './scripture.service'

@Component({
  selector: 'app-scripture-guess',
  templateUrl: './scripture-guess.component.html',
  styleUrls: ['./scripture-guess.component.css']
})
export class ScriptureGuessComponent implements OnInit {

  scripture : Scripture;
  books : any[];
  message: string = '';

  constructor(private scv : ScriptureService) { }

  getScripture() : void {
    console.log('getting scripture');
    this.scv.getRandomScripture().subscribe( scripture => {
      console.log(scripture);
      this.scripture = scripture;
    })
  }

  getBooks() : void {
    this.scv.getBookInfo().subscribe( books => { 
      console.log('GETTING BOOKS');
      this.books = books; 
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
    this.getBooks();
  }

}