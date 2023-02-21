import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFlashing]',
})
export class FlashingDirective {
  constructor(private el: ElementRef) {}
  @Input() speed = '0.1s';
  @HostListener('mouseenter') onMouseEnter() {
    // this.el.nativeElement.style.backgroundColor = '#fff';
    // this.el.nativeElement.style.color = '#999';
    // this.el.nativeElement.style.border = '3px solid #999';
    this.el.nativeElement.style.animationName = 'flashing';
    this.el.nativeElement.style.animationDuration = this.speed;
    this.el.nativeElement.style.animationIterationCount = 'infinite';
    this.el.nativeElement.style.animationDelay = '5s';
    console.log(this.el.nativeElement.style);
  }

  @HostListener('mouseleave') mouseleave() {
    // this.el.nativeElement.style.backgroundColor = '';
    // this.el.nativeElement.style.color = '';
    // this.el.nativeElement.style.border = '';
    this.el.nativeElement.style.animationName = '';
    this.el.nativeElement.style.animationDuration = '';
    this.el.nativeElement.style.animationIterationCount = '';
    this.el.nativeElement.style.animationDelay = '';
  }
}
