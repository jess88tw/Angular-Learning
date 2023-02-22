import { Directive, HostListener } from '@angular/core';
import { CardComponent } from './card/card.component';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  constructor(private parent: CardComponent) {}
  @HostListener('mousewheel', ['$event']) onScroll(e: any) {
    e.preventDefault();
    e.deltaY < 0 ? (this.parent.count += 1) : (this.parent.count -= 1);
    if (this.parent.count < 0) {
      this.parent.count = 0;
    }
  }
}
