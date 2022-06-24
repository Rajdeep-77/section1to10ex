import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { Task3Component } from './task3/task3.component';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective {

  constructor(private elRef:ElementRef, private renderer:Renderer2, selectedRadio:Task3Component) { }
  @Input() textCLR;
    @HostListener('mouseover') whenMouseOverP(){
      
      if(this.textCLR=='red'){
        this.elRef.nativeElement.style.color="red";
      }
      if(this.textCLR=='green'){
        this.elRef.nativeElement.style.color="green";
      }
      if(this.textCLR=='yellow'){
        this.elRef.nativeElement.style.color="yellow";
      }
    }
  
    @HostListener('mouseleave') whenMouseLeaveP(){
      this.elRef.nativeElement.style.color="black";
    }
  
}


