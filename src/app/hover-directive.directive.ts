import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective {

  constructor(private elRef:ElementRef,) { }
  @Input() textCLR;
    @HostListener('mouseover') whenMouseOverP(){
      
      // if(this.textCLR=='red'){
        this.elRef.nativeElement.style.color=this.textCLR;
    //   }
    //   if(this.textCLR=='green'){
    //     this.elRef.nativeElement.style.color="green";
    //   }
    //   if(this.textCLR=='yellow'){
    //     this.elRef.nativeElement.style.color="yellow";
    //   }
    }
  
    @HostListener('mouseleave') whenMouseLeaveP(){
      this.elRef.nativeElement.style.color="black";
    }
  
}


