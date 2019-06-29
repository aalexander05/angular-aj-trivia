import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';
import { Card } from './card';
import { Draw } from './draw';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [CardService]
})
export class CardsComponent implements OnInit {

  deckId : string;
  myDraw : Draw;
  cards : Card[] = [];
  drawError : any = {success:true}; ;

  constructor(private svc : CardService) { }

  ngOnInit() {
    console.log("hello");
    this.shuffle();
    //this.draw(1);
  }
  
  shuffle() : string {
    this.svc.shuffle()
      .subscribe( res => {
        console.log(res);
        this.deckId = res.deck_id;
        //this.draw(1)
      });
      return "";
  }

  draw(numOfCards) : void {
    this.svc.draw(this.deckId, numOfCards)
      .subscribe( res => {
        if (res.success) {
          this.myDraw = res;
          console.log(res);
          this.cards.push.apply(this.cards, res.cards);
          this.drawError = {success:true};
        }
        else {
          this.drawError = res;
          console.log(this.drawError);
        }
        
      });
  }
}