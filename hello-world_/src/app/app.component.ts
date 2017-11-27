import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';

  post = {
    title: "Title",
    isFavorite: true
  }


  //Exercicio Like
  tweet = {
    body: "Body",
    isLiked: true,
    likesCount: 10
  }

  // courses = [
  //   {
  //     id: 1,
  //     name: 'course1'
  //   },
  //   {
  //     id: 2,
  //     name: 'course2'
  //   },
  //   {
  //     id: 3,
  //     name: 'course3'
  //   },
  // ];

  // ngFor and ChangeDetection
  // onAdd() {
  //   this.courses.push(
  //     {
  //       id: 4,
  //       name: "course4"        
  //     }
  //   );
  // }

  // Esse primeiro Remove vai adicionar ou remover um item a minha array
  // onRemove(course) {
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index, 1)
  // }
  
  // Aqui estou mudando o valor e o visual, o DOM
  // onChange(course) {
  //   course.name = 'UPDATE';
  // }

  // Vamos supor que eu esteja pegando essa lista de cursos de um servidor
  // que é o que acontece  
  // toda vez que eu clicar no botãoq ue tive resse evneot, ele irá carregar uma array ]
  // irá sempre resetar o courses para um novo array

  // Angular, por default traça seus objetos por sua identidade
  courses;
  loadCourses() {
    this.courses = [
      {
        id: 1,
        name: 'course1'
      },
      {
        id: 2,
        name: 'course2'
      },
      {
        id: 3,
        name: 'course3'
      },
    ]
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }

  // onFavoriteChange(isFavorite) {
  onFavoriteChange(eventArgs: { FavoriteChangedEventArgs }) {
    // console.log('Favorite changed: ', isFavorite)
    console.log('Favorite changed: ', eventArgs);
  }

  viewmode = 'map';




}
