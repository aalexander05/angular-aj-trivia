import { Component, OnInit } from '@angular/core';

import {GameMode, CuratedScripture} from '../scripture-guess/scripture';

@Component({
  selector: 'app-scripture-start',
  templateUrl: './scripture-start.component.html',
  styleUrls: ['./scripture-start.component.css']
})
export class ScriptureStartComponent implements OnInit {

  // remove later
  curatedScriptures : CuratedScripture[] = 
    [
      { book: "Genesis",
        chapter: 1,
        verse : 1 
      },
      { book: "Genesis",
        chapter: 1,
        verse : 2 
      },
      { book: "Genesis",
        chapter: 3,
        verse : 1 
      },
      { book: "Genesis",
        chapter: 3,
        verse : 15 
      },
      { book: "John",
        chapter: 3,
        verse : 16 
      },
      { book: "John",
        chapter: 17,
        verse : 3 
      },
      { book: "Matthew",
        chapter: 24,
        verse : 14 
      },
      { book: "Matthew",
        chapter: 6,
        verse : 9 
      },
      { book: "Revelation",
        chapter: 21,
        verse : 4 
      },
      { book: "Ezekiel",
        chapter: 18,
        verse : 4 
      },
      { book: "Proverbs",
        chapter: 3,
        verse : 5
      }

  ];  

  constructor() { }

  gameMode : GameMode = {
    answerCount : 4,
    curatedScriptures : []
  }

  started = false;

  start() : void {
    this.started = true;
  }

  startEasy() : void {
    this.gameMode.curatedScriptures = this.curatedScriptures;
    this.gameMode.answerCount = 2;
    this.started = true;
  }

  startAllBooks() : void {
    this.gameMode.answerCount = 66;
    this.started = true;
  }

  ngOnInit() {
  }

}