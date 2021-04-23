import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color="white";
    el.nativeElement.style.background="black";
    el.nativeElement.innerText+="- render by Highlight";
   }

}
