// function log(message) {
//     console.log(message);
// }

// var message = 'Hello World';

// log(message)

////////////////////////////////////

// function doSomething() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     }

//     console.log('Finally: ' + i);
// }

// doSomething();

// A função acima conta até 5 e para
// ele aloca o valor no var e conta até 5 conforme diz o for
// Em typescript, assim como em ES6, seguindo a logica do POO
// eu posso alocar esse valor usando o let.

// function doSomething() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }

//     console.log('Finally: ' + i);
//     // Repare o erro que ele sublinha no i
//     // Ele perde a referencia.
// }

// doSomething();

////////////////////////////////

// enum typescript
// let count = 5;
// count = 3;

// Definindo o que serão as variáveis
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1, 2, 3];
// let f: any[] = [1, true, 'a', false];

// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// // enum Color {Red, Green, Blue}; =
// enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};
// let backgroundColor = Color.Red;

//////////////////////////////////////

// // let message = 'abc';
// let message; //definido como any
// message = 'abc';
// // let endsWithC = message.endsWith('c'); //retorna uma boolean
// // é necessário definir o que de fato será essa variável em typescritp
// let endsWithC = (<string>message).endsWith('c');
// // ou
// let endsWithC = (message as string).endsWith('c');

///////////////////////////////////

// declarando funções
// Arrow functions

// let log = function(message) {
//     console.log(message);
// }

// // outra maneira de declarar essa função
// let doLog = (message) => console.log(message); //parecido com lambda expression em C#

/////////////////////////

// // custom types
// interface é um dos principios fundamentais do TS
// Interface é usado para definir caracteristicas de objetos
// E aloca-los aqui permite que eles sejam usados diversas vezes em diferentes situações
// No caso abaixo nós criaremos um objeto Point que irá carregar dois parametros do tipo numero
//
// Ao invés de declarar a função com esses parametros, como normalmente fazemos em JS
// Vamos declarar ele no interface e reutiliza-los na função.

// interface Point { //interfaces servem para declarações
//   x: number,
//   y: number,
//   draw: () => void //void é o retorno de uma função é como console.log
// }

// let drawPoint = (point: Point) => {
//   //..
// }

// let getDistance = (pointA: Point, ponintB: Point) => {
//   //..
// }

// drawPoint ({
//   x: 1,
//   y: 2
// })

///////////////////////////////

// Cohesion - principio que diz que tudo deve fazer parte de uma mesma coisa
// Esse principio está sendo usado pq acima, estamos usando duas funções que estão soltas
// no nosso código. Isso pode quebrar com o tempo.
//
// Em POO nós utilizamos classes
// Em classes nós podemos definir tudo que será usado para um mesmo propósito no meu código

//Acima estamos dizendo que os objetos Pontos terão duas propriedades, x e y
// e uma função chamada draw
// interfaces não permitem implementações
// As implementações acima estão em outro lugar

// Para aplicar o principio de Cohesion usaremos o Class

// class Point { //essa classe tem 3 membros. Os dois primeiros são campos usados para
  // salvar dados e em terceiro temos um função que de fato seráimplementada
 
//  Access Modifier
// uma maneira de definir parametros na minha classe
//de maneira que ela só possa ser usada dentro dessa classe
// caso contrario ficara deifnido como publico
// e será acessivel de qualquer lugar
  // private x: number; 
  // x: number;
  // private y: number;
  // y: number;

  
// Constructor
// é um método que é chamado quando criamos uma instancia
// dessa classe

  // constructor(private _x?: number, private _y?: number) {
  //   // this.x = x;
  //   // this.y = y;
  // }

  //do jeito que está o construtor acima, estou definindo
  // dois parametros para a minha classe, o x e o y
  // abaixo, no objeto, ao dizer new point eu preciso passar
  // que valores meu x e y terão
  // Ao colocar o ? eu estou dizendo que o meu x e meu y 
  // terão valores opcionais


  // draw() {
  //   console.log('X: ' + this._x + ', Y: ' + this._y)
  //   // Ao usar parametros dentro de uma função, usamos o this
  //   // simplesmente por estar dentro da função
  // }

  // getDistance(another: Point) {

  // }

  //Propriedades
  //Uma propriedade pode parecer uma field fora da classe,
  //mas internamente é um método da classe
  //Para deifinir propriedades usamos get e set
  //get é quando queremos que o usuário receba uma informação
  //como read only
  // O set permite que o usuário mude um valor ou 
  // estabeleça um valor
  //Essa aplicação, do jeito que está, tem um problema.
  //Não consigo acessar os valores dos membros da minha
  //classe, fora dela. Soment dentro dela:
  // getX() { //isso é um método
  //   return this._x;
  // }
  // get x() { //isso é um método
  //   return this._x;
  //   // Dessa maneira posso usar propriedades como fields
  // }
  // Criando essa função, eu posso agora buscar o valor do
  // X fora da minha classe, conforme abaixo, depois do let point

  // set x(value) {
  //   if (value < 0)
  //     throw new Error ('value cannot be less than 0.');

  //   this._x = value;
  // }
// }

  //Do jeito que está escrito aqui, tudo relacionado a classe Ponto está
  // em apenas um lugar
  // Então, x e y são CAMPOS (FIELDS) e as funções declaradas são MÉTODOS (METHODS)

//  let point = new Point(1, 2); //aqui, o point do let point é um objeto
//  coloca-se o new para alocarmos memoria para tornar esse objet
// caso contrario ele será um objeto undefined

// Um objeto é um instancia de uma classe

// let x = point.x;
// // point.setX(10);
// point.x = 10;
// ao rodar o main.js no terminal, x e y estarão indefinidos
// portanto:
// point.draw();


//Módulos

import { Point } from './point';

let point = new Point(1, 2);
point.draw();


