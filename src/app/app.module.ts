import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http'
import { TriviaService } from './trivia.service';
import { CardsComponent } from './cards/cards.component';
import { CardService } from './cards/card.service';
import { ReactiveComponent } from './reactive/reactive.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'trivia', component: AboutComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'reactive', component: ReactiveComponent}
    ]) 
  ],
  declarations: [ AppComponent, HelloComponent, MenuComponent, HomeComponent, AboutComponent, CardsComponent, ReactiveComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TriviaService, CardService]
})
export class AppModule { }
