      import { BrowserModule } from '@angular/platform-browser';
      import { NgModule } from '@angular/core';
      import { FormsModule } from '@angular/forms';


      import { AppComponent } from './app.component';
      import { HeroesComponent } from './heroes/heroes.component';
      import { HeroService } from './heroes/hero.service';
      import { HeroDetailComponent } from './hero-detail/hero-detail.component';
      import { MessagesComponent } from './messages/messages.component';
  import { MessageService } from './messages/message.service';
  import { AppRoutingModule } from './/app-routing.module';
  import { DashboardComponent } from './dashboard/dashboard.component';

  import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
  import { InMemoryDataService }  from './in-memory-data.service';



      @NgModule({
        declarations: [
          AppComponent,
          HeroesComponent,
          HeroDetailComponent,
          MessagesComponent,
          DashboardComponent
        ],
        imports: [
          BrowserModule,
          FormsModule,
          AppRoutingModule
        ],
        //cria uma instancia e injeta em qualquer classe que pedir ela. Uma vez o Hero Service ali e o Message Service, também, o site só funciona quando estiver amarrado
        providers: [ HeroService, MessageService],
        bootstrap: [AppComponent]
      })
      export class AppModule { }
