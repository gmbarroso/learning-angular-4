import { CoursesService } from './course/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Two way Biding
//Para usar o ngModel é preciso importar dessa forma abaixo
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';


@NgModule({
  //Aqui é onde eu vou adicionar todos os componentes desse Módulo
  //Tudo que eu colocar aqui dentro, tem que aparecer em cima do meu
  //código no import
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent
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
