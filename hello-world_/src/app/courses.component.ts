//Para o Angular entender que isso aqui é um Componente, eu tenho o
// operador Component
// E para ele entender que isso faz parte de um Módulo, nós precisamos
// importar uma biblioteca. A própria biblioteca do Angular @angular/core
import { CoursesService } from './course/courses.service';
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
        <!-- ngFor é uma diretiva do Angular para usar como
        um atributo no meu HTML
        Eu uso quando quero repetir elementos dentro de um array 
        na minha página.
        Nesse caso eu criei uma variável course para alocar os
        diferentes courses da minha array courses
        
        Diretivas manipulam o DOM -->

            <li *ngFor = "let course of courses">
                {{ course }}
            </li>
        </ul>

        <!-- Adicionando bootstrap e brincando com suas classes já prontas
        Trabalhando com Property Binding repare no [] após a classe btn
        class é um atributo DOM que HTML reconhece e active é o estado dessa
        classe que é também reconhecida. O isActive é uma instancia da classe
        CoursesComponent que eu utilizo para estilizar o meu botão quando
        clicado e ativo -->
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
        <br><br>
        <!-- Style Binding, diferente de Class Binding, mas muito semelhante -->
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Teste</button>
        <!-- Event Binding -->
        <br>
        <br>
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Teste 2</button>
        </div>

        <br>

        <!-- <input (keyup)="onKeyUp($event)"/> -->
        <!-- <input (keyup.enter)="onKeyUp()"/> -->
        <!-- <input #email (keyup.enter)="onKeyUp(email.value)"/> -->
        <!-- Two way Biding -->
        <!-- <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/> -->
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
        <br>

        <!-- PIPES 
        Para todos os formatos PIPE
        Acessar angular.io e digitar no search datepipe-->    
        {{course.title | uppercase }}<br/>
        {{course.students | number}}<br/>
        {{course.rating | number:'1.2-2'}}<br/>
        {{course.price | currency:'AUD':true:'3.2-2'}}<br/>
        {{course.releaseDate | date:'dd/MM/yyyy'}}<br/><br>

        {{text | summary: 10}}

        <br>
        <br>

        <button (click)="isFavorite()"> Like </button>
        <span class="glyphicon glyphicon-star {{colorClass}}"></span>

        <span class="glyphicon glyphicon-star-empty {{colorClass}}"></span>
        

        `    
})

// Criando a classe e colocando export para o Angular acessar essa classe
export class CoursesComponent {
    colorClass = "star-black";
    starFlag = true;
    // //Adicionando um field no app para alocar o title dessa página
    // //Em angular, eu vou recuperar esse tittle utilizando {{ }}
    title = "List of courses";

    // // getTitle(){
    // //     return this.title;
    // // }
    
    // //Services
    // // No mundo real, esses courses viriam de um servidor, de um endereço
    // // http endpoint onde os dados ficam alocados
    // // Logica para chamar um serviço HTTP 
    // // modificando a lista de courses e buscando ela do courses.service.ts
    // // courses = ["course1", "course2", "course3"];
    courses;

    // // Dependency Injection
    // // Significa injetar ou providenciar as dependencias de uma classe 
    // // dentro do seu construtor
    // // abrindo um constructor onde eu crio meus objetos
    constructor(service: CoursesService) {
    //     // Aqui eu direciono para que a lista de cursos venha do Servidor
    //     // Porém, dessa maneira eu terei sempre que dizer, em diferentes
    //     // lugares que eu quiser a lista de cursos, recuperar do servidor
    //     // Um maneira mais inteligente de fazer isso é colocando o objeto
    //     // abaixo como um parâmetro, como uma dependencia injetada.
    // let service = new CoursesService();
        this.courses = service.getCourses();
    }

    // //Class Binding
    // //Adicionando classes ao meu HTML dinamicamente baseado em sua 
    // //condição
    isActive = false;

    // //Evvent Biding
    onSave($event){
        $event.stopPropagation();
        console.log("Pare de clicar em mim", $event);
    }

    // //Event Bubbling
    onDivClicked(){
        console.log("Div was clicked");
    }

    // //Event Filtering
    // // onKeyUp($event){
    // //     if ($event.keyCode === 13) console.log ("ENTER was pressed");
    // // }
    // // onKeyUp(){
    // //     console.log ("ENTER was pressed");
    // // }

    // //Template Variable
    // //criando variável email no html com #
    // // onKeyUp(email) {
    // //     console.log(email);
    // // }

    // //Two way biding
    email = "barroso.guilherme@gmail.com";

    onKeyUp() {
        console.log(this.email);
    }

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    //Custom Pipes
    //Aplicando um resumo a um texto longo.
    //Um aruivo novo foi adicionado - summary.pipe.ts
    text = "I've seen things you people wouldn't believe. Attack ships on fire in shoulder of Orion. All those moments will be lost like tears in rain. Time to die."

    isFavorite(){
        if(this.starFlag){
           console.log("it worked");
           this.colorClass = "star-yellow";
           this.starFlag = false;
        } else {
            this.colorClass = "star-black";
            this.starFlag = true;
        }
    }
}
