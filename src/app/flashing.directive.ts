import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// Renderer2 可以更改元素的樣式, 添加刪除元素, 設置屬性, 處理事件等
@Directive({
  selector: '[appFlashing]',
})
export class FlashingDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') onMouseEnter() {
    // this.el.nativeElement.style.backgroundColor = '#fff';
    // this.el.nativeElement.style.color = '#999';
    // this.el.nativeElement.style.border = '3px solid #999';
    this.renderer.addClass(this.el.nativeElement, 'flashing');
  }

  @HostListener('mouseleave') mouseleave() {
    // this.el.nativeElement.style.backgroundColor = '';
    // this.el.nativeElement.style.color = '';
    // this.el.nativeElement.style.border = '';
    this.renderer.removeClass(this.el.nativeElement, 'flashing');
  }
}
