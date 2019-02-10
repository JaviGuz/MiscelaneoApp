import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log('directiva llamada');
  }
  @Input('appResaltado') nuevoColor: string; // Declaración de la variable diciendole que viene de fuera

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'yellow');
    // this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null);
    // this.el.nativeElement.style.backgroundColor = null;
  }

  private resaltar (color: string) {
     this.el.nativeElement.style.backgroundColor = color;
  }
}
