import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';

@Directive({
  selector: '[appCopy]',
})
export class CopyDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() set appCopy(count: number) {
    for (let i = 0; i < count; i++) {
      let view = this.viewContainerRef.createEmbeddedView(this.templateRef);
      view.rootNodes[0].style.width = 100 / count + '%';
    }
  }
}
