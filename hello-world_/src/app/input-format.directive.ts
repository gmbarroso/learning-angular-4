import { ElementRef } from '@angular/core';
// HostListener permite que a gente sobrescreve o evento controlado por aquele DOM
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format;

    // Preciso injetor um elemento de referenciaIsso nos dará acesso a um objeto DOM
    constructor( private el: ElementRef) { }
    // contructor antes dos métodos
    // Isso me diz imediatamente quais as dependencias da minha classe

  // Do jeito que programei aqui, estou pegando o momento que clico
  // dentro e fora do input HostListener
  // decorando o método
  // @HostListener('focus') onFocus() {
  //   console.log("on Focus")
  // }

  @HostListener('blur') onBlur() {
    // Aqui eu preciso pegar o valor desse input
    let value: string = this.el.nativeElement.value;

    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
    

  }
 



}
