// impostando a classe criada em like.component
import { LikeComponent } from './like.component';

// Agora precisamos criar uma instancia para essa classe
// com seus valores iniciais
let component = new LikeComponent(10, true);

// ao rodar no terminal, o bug ocorreu talvez porque os componentes
// da minha instancia não estavam com valores definidos
// e no caso dessa aplicação, o meu numero de likes só deve aumentar
// se de fato o usuário clicar no botão.
// component._likesCount = 2; //esses components estão comentados
// pois eu tornei o parametro do constructor como privado
// component._isSelected = false;
// Assim, esses valores só irão mudar dentro do método onClik
component.onClick(); //fazendo a minha instancia utilizar a minha condição
// criada no arquivo like.component
// console.log(`likesCount: ` + component.likesCount + `, isSelected: ` + component.isSelected);
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected} `);

// Ao rodar o código no terminal tivemos um bug
// Eu disse que meu botão estava clicado (true) e já com 10 likes.
// Ao rodar o código ele clicou novamente e adicionou um like
// Era para diminuir o numero de like