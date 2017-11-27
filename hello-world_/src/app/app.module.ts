import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './course/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Two way Biding
//Para usar o ngModel é preciso importar dessa forma abaixo
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';


@NgModule({
  //Aqui é onde eu vou adicionar todos os componentes desse Módulo
  //Tudo que eu colocar aqui dentro, tem que aparecer em cima do meu
  //código no import
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,

    //Adicionando aqui inclusive os componentes de Pipe
    SummaryPipe,

    FavoriteComponent,

    PanelComponent,

    LikeComponent
  ],
  imports: [
    BrowserModule,

    //Two way biding
    FormsModule
  ],
  // Toda Dependencia eu coloco aqui no provider
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
