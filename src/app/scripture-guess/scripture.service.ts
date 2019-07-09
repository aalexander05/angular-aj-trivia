import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/observable';

import { Scripture, Verse } from './scripture';

@Injectable()
export class ScriptureService {

  baseUrl : string = 'https://bible-api.com/'

  books : any[];
  currentBook: any;
  currentChapter: number;
  currentVerse: number;

  constructor(private http: HttpClient) { 
    this.getBookInfo().subscribe( data =>
    {
      console.log(data);
      this.books = data;
    });
  }

  getBookInfo() : Observable<any> {
    return this.http.get('./assets/bible-info.json');
  }

  getRandomBook() : void {
    this.currentBook = this.books[Math.floor(Math.random()*this.books.length)];

    this.currentChapter = Math.floor(Math.random() * this.currentBook.numberOfBooks + 1)


  }

  getHighestVerseNumberInBook(bookName: string) : number{
    var highestVerse : number = 0;
    this.getScripture(this.currentBook.bookName, this.currentChapter, 0, '').subscribe( data => {
      console.log(data.verses);
      highestVerse = Math.max(...data.verses.map(o => o.verse), 0);
      console.log( `the highest verse of ${this.currentBook.bookName} ${this.currentChapter} is ${highestVerse}`);
    return highestVerse;
    });
    
  }

  getRandomScripture() : Observable<Scripture> {
    this.getRandomBook();

    this.currentVerse = Math.floor(Math.random() * this.currentChapter + 1)
    console.log(`RANDOM VERSE ${this.currentVerse}`);

    return this.getScripture(this.currentBook.bookName, this.currentChapter, this.currentVerse, '');
  }
  


  getScripture(book: string, chapter: number, verse: number, translation: string) : Observable<Scripture> {
    var url = this.baseUrl;
    var chapterValue :string = chapter === 1 ? '':chapter.toString();
    var verseValue :string = verse === 0 ? '' : ':' + verse;

    url = url + book + chapterValue + verseValue;

    if (translation !== '') {
      url = url + '?translation=' + translation;
    }
    console.log(url);
    return this.http.get<Scripture>(url);

  }



}