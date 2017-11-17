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
function doSomething() {

    // Ao transformar o TS em JS pelo terminal
    // Eu recebo a mensagem de que há um erro por causa do let
    // Mesmo assim ele transforma e já traz o let em var, conforme abaixo
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
    // Repare o erro que ele sublinha no i
    // Ele perde a referencia.
}
doSomething();
