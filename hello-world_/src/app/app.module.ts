import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    CoursesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
