// Definindo uma classe
// export na frente para usarmos essa classe fora daqui
export class LikeComponent {
    // adicionando 2 campos e seus tipos
    // likesCount: number; //número de likes
    // isSelected: boolean; //se foi selecionado ou não

    // agora eu quero que o consumidor desse componente
    // seja capaz de definir os valores iniciais
    // dos dois campos acima
    // Então poremos um constructor aqui que terá dois
    // parâmetros
    constructor ( private _likesCount: number, private _isSelected: boolean) {
        // this.likesCount = likesCount;
        // Para que não haja essa redundância com o this, 
        // eu defino meus parâmetros como publco dentro do meu
        // constructor e tiro os meus campos definido no
        // inicio do meu código
    }

    //Para saber se o usuário está clicando
    // eu crio um método e uma condição
    onClick() {
        // if (this.isSelected) {
        //     this.likesCount--;
        //     this.isSelected = false;
        // } else {
        //     this.likesCount++;
        //     this.isSelected = true;
        // }
        // Se estiver selecionando e o meu numero de likes
        // diminuir, na verdade estou tirando a seleção
        // ao contrário, se aumentar, na verdade estou selecionando
        
        //Uma outra maneira de  escrever essa condição
        // this.likesCount += (this.isSelected) ? 1 : -1;
        // O erro está aqui, para dar certo:
        this._likesCount += (this._isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected;
    }

    // Por causa do bug, esse é um bom caso de darmos a informação como
    // readonly. Por isso passaremos os parametros para privado e usaremos
    // o parametro get

    get likesCount() {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }
}