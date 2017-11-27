// Importando uma função de decoration do angular core
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // encapsulation: ViewEncapsulation.Emulated

  // O problema de definir assim é que se eu quiser mudar para outro nome
  // como isSelected por exemplo e mudar ali dentrdo do onClick, aqui embaixo
  // não mudará sozinho
  // inputs: ['isfavorite']
})
export class FavoriteComponent {
  //colocando essa isSelected como visivel para fora daqui
  //Agora ela é uma propriedade
  // @Input() isSelected: boolean;

  // dentro do input eu posso definir um atalho para a minha propriedade
  @Input('isFavorite') isSelected: boolean;

  // change como alias/atalho para não perder a mudança do nome para click
  @Output('change') click = new EventEmitter();
  
  // Tendo o insFavorite definido acima, ele é criado automaticamente como boolean
  // isFavorite: boolean;

  onClick() {
    this.isSelected = !this.isSelected;
    // Para levantar ou mudar um evento, ou dizer a aplicação que algo aconteceu
    // Passando um parametro para saber quando que o meu evento aconteceu
    // this.change.emit(this.isSelected);

    // Passando um objeto com uma propriedade dentro do meu evento
    this.click.emit({ newValue: this.isSelected});
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}