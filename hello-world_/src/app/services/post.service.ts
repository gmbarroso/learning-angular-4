import { NotFoundComponent } from './../../../../routing/hello-world/src/app/not-found/not-found.component';
import { AppError } from './../common/validators/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operators/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.url);
    // Isso aqui retorna um Observable
    // um observable do response
    // Ele retorna isso ao consumidor desse service
    // que é o nosso componente
    // Usar o return para o compónente entender de onde vem o getPosts()
    }

    createPost(post) {
      return this.http.post(this.url, JSON.stringify(post))
      
    }

    updatePost(post) {
      return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
      
    }

    deletePost(id) {
      // Retorna um Observable
      // Um Observable é um type que faz parte de um
      // terceiro grupo de libraries chamado de Reactive extensions
      // Essas extensions tem um monte de methods que podemos
      // chamar de Operators, mas esses Operators não
      // estão aqui por default
      // return this.http.delete(this.url + '/' + id);
      return this.http.delete(this.url + '/' + id)
      .catch((error: Response) => {
        if (error.status === 404)
        return Observable.throw(new NotFoundComponent());
                // Criei um component ts para alocar o response error
        // Estou pegando objeto error que é uma
        // instancia da class response e ai eu retorno 
        // um tipo diferente de erro que é específico da nossa app
        return Observable.throw(new AppError(error));

      });
      
    }

}
