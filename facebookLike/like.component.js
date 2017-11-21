"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Definindo uma classe
// export na frente para usarmos essa classe fora daqui
var LikeComponent = /** @class */ (function () {
    // adicionando 2 campos e seus tipos
    // likesCount: number; //número de likes
    // isSelected: boolean; //se foi selecionado ou não
    // agora eu quero que o consumidor desse componente
    // seja capaz de definir os valores iniciais
    // dos dois campos acima
    // Então poremos um constructor aqui que terá dois
    // parâmetros
    function LikeComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
        // this.likesCount = likesCount;
        // Para que não haja essa redundância com o this, 
        // eu defino meus parâmetros como publco dentro do meu
        // constructor e tiro os meus campos definido no
        // inicio do meu código
    }
    //Para saber se o usuário está clicando
    // eu crio um método e uma condição
    LikeComponent.prototype.onClick = function () {
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
    };
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        // Por causa do bug, esse é um bom caso de darmos a informação como
        // readonly. Por isso passaremos os parametros para privado e usaremos
        // o parametro get
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
