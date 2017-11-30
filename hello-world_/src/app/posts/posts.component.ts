import { NotFoundComponent } from './../../../../routing/hello-world/src/app/not-found/not-found.component';
import { PostService } from './../services/post.service';
// import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/validators/app-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  //Colocar o Postcomponente como provider no app.module

  posts: any[];
  // private url = 'https://jsonplaceholder.typicode.com/posts';
  // toda comunicação acontecerá por aqui
  // constructor(private http: Http) {
    constructor(private service: PostService) {
      // Não chamar serviços http no constructor
    // Fazer isso no ngOnInit
  }

  ngOnInit() {
    // http.get(this.url)
    // this.http.get(this.url) isso foi para o post.service.ts
    this.service.getPosts()
    // o endereço é um Observable Oservable<Response>
    .subscribe( response => {
      this.posts = response.json();
    }, //passando o que acontece quando dá erro
       error => {
         alert('Erro');
         console.log(error);
        //  O correto é alocar essa mensagem de erro no servidor
       });
   }

  //  especificando que tipo de informação é essa que irei converter
  // HTMLINPUTELEMENT
   createPost(input: HTMLInputElement) {
     let post = { title: input.value};
     input.value = '';

    // comunicando com o servidor
    // this.http.post(this.url, JSON.stringify(post))
    this.service.createPost(post)
    .subscribe(response => {
      post['id'] = response.json().id;
      // usando splice para que o novo dado entre no 
      // inicio da lista e não no final como o push
      this.posts.splice(0, 0, post);
      console.log(response.json());
    }, 
      (error: Response) => {
        if (error.status === 400){
        // this.form.setErrors(error.json());
          
        }
        else {
          alert('Erro');
          console.log(error);
        }

    });
   }

  //  Atualizando uma tabela
   updatePost(post) {
    // this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
    this.service.updatePost(post)
    .subscribe(response => {
        console.log(response.json());
      }, error => {
        alert('Erro');
        console.log(error);
    });
    // this.http.put(this.url, JSON.stringify({post}));   
  }

  // Deletando 
  deletePost(post) {
    // this.http.delete(this.url + '/' + post.id)
    this.service.deletePost(post.id)
    // this.service.deletePost(345)
    .subscribe(
      response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, 
    //parametros sempre entre parenteses
    // (error: Response) => {
      (error: AppError) => {
        //checando o status dessa response
        // if (error.status === 404)
        if (error instanceof NotFoundComponent)
        alert ('Já foi deletado');
          else {
            alert('Erro');
            console.log(error);
          }
        

    });
  }
}
