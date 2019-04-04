import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective {

  @Input()
  fontSize:number;

  constructor(private elementRef: ElementRef) {
    console.log(elementRef);
  }

  @HostListener('mouseover') mouseover() {
    this.elementRef.nativeElement.style.borderWidth = '10px';
  }
}
