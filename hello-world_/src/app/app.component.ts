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

  courses = [
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
  ];

  // ngFor and ChangeDetection
  onAdd() {
    this.courses.push(
      {
        id: 4,
        name: "course4"        
      }
    );
  }

  // Esse primeiro Remove vai adicionar ou remover um item a minha array
  // onRemove(course) {
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index, 1)
  // }
  
  // Aqui estou mudando o valor e o visual, o DOM
  onChange(course) {
    course.name = 'UPDATE';
  }

  // onFavoriteChange(isFavorite) {
  onFavoriteChange(eventArgs: { FavoriteChangedEventArgs }) {
    // console.log('Favorite changed: ', isFavorite)
    console.log('Favorite changed: ', eventArgs);
  }

  viewmode = 'map';




}
