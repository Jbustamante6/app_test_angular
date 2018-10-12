import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef) { 
    console.log("ok")
  }
  @Input("appResaltado") nuevoColor: string;

  @HostListener('mouseenter') mouseentro(){
    this.resaltar(this.nuevoColor);
  }

  
  @HostListener('mouseleave') mousesale(){
    this.resaltar(null);
  }

  private resaltar( color: string = 'yellow'){
    this.el.nativeElement.style.backgroundColor=color;

  }
}
