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
//  

// Em javaScript essas vairaveis simplesmente são definidas como var
// E um enum se transformou em em uma função
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// enum Color {Red, Green, Blue}; =
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
