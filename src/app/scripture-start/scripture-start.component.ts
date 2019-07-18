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
      { scripture: "Genesis1:1" },
      { scripture: "Genesis3:1" },
      { scripture: "Genesis3:2" },
      { scripture: "Genesis3:3" },
      { scripture: "Genesis3:4" },
      { scripture: "Genesis3:5" },
      { scripture: "Genesis3:15" }
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
    this.gameMode.answerCount = 3;
    this.started = true;
  }

  startAllBooks() : void {
    this.gameMode.answerCount = 66;
    this.started = true;
  }

  ngOnInit() {
  }

}