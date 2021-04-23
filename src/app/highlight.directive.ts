import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private el:ElementRef) {}

  ngOnInit(){
    let spans = Array.from(this.el.nativeElement.children); // detect span
    spans.map((ele:any) => {
      ele.style.color = ele.localName == "span" ? "gray" : "yellow"; // give style to span
    })
  }

}
