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

// custom types

let drawPoint


