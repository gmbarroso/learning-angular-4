//Para o Angular entender que isso aqui é um Componente, eu tenho o
// operador Component
// E para ele entender que isso faz parte de um Módulo, nós precisamos
// importar uma biblioteca. A própria biblioteca do Angular @angular/core
import { Component } from '@angular/core';

// Aqui irei criar um componente para editar visualmente um elemento do meu site
// CSS básico: <div class="courses"> ".courses"
// ou <div id="courses"> "#courses" e assim digo como será essa div
// No Angular eu posso criar um template html e dar um nome a ele:
// <courses> por exemplo
// E dizer como ele será visualmente. Quando eu for fazer a conexão
// em outro arquivo eu uso o template que eu criei para fazer referencia.
@Component({ //Component Decorator
    selector: 'courses',
    // template: '<h2>{{ title }}</h2>' //isso significa que, em qualquer lugar
    // desse component, o Angular irá buscar e modificar esse elemento
    // eu adiciono esse elemento em app.component.html <courses>
    // dentro dos {{}} eu posso usar sintaxe JS também
    // template: '<h2>{{ getTitle() }}</h2>' //isso se chama string Interpolation

    template: ` <!-- Escrever dessa forma permite que eu codifique
    de forma mais clara como numa estrutura e HTML mesmo-->

        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor = "let course of courses">

            <!-- ngFor é uma diretiva do Angular para usar como
            um atributo no meu HTML
            Eu uso quando quero repetir elementos dentro de um array 
            na minha página.
            Nesse caso eu criei uma variável course para alocar os
            diferentes courses da minha array courses
            -->
                {{ course }}
            </li>
        </ul>
    `    
})

// Criando a classe e colocando export para o Angular acessar essa classe
export class CoursesComponent {
    //Adicionando um field no app para alocar o title dessa página
    //Em angular, eu vou recuperar esse tittle utilizando {{ }}
    title = "List of courses";

    // getTitle(){
    //     return this.title;
    // }

    courses = ["course1", "course2", "course3"];

    //Services
}
