// Módulos
// Em TS cada arquivo é um módulo
// Neste exemplo do ponto nós temos 2 módulos
// Porém esses 2 arquivos que temos ainda não são módulos, pois
// Eles ainda não são visíveis para trabalharem fora daqui
// Para que eu possa achar a classe Point fora, eu coloco
// export, conforme abaixo
export class Point {
    constructor(private x?: number, private y?: number) {

    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}