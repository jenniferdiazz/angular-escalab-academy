import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  constructor(
    private eRef: ElementRef
  ) { }
  @HostListener('click') funxx(){
    this.eRef.nativeElement.classList.add('paddingAll');
    //this.eRef.nativeElement.querySelector('input').classList.add('paddingAll');
    this.eRef.nativeElement.style.borderRadius = "50%";
    console.log('click hostListener');
  }
  @HostListener('mouseover') funxx2(){
    //this.eRef.nativeElement.querySelector('input').classList.remove('paddingAll');
   
    console.log('mouse over hostListener');
  }

}
