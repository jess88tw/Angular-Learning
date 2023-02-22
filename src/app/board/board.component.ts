import { CheckoutComponent } from './../checkout/checkout.component';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  TemplateRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit, AfterViewInit {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  @ViewChild('anchor', { read: ViewContainerRef }) anchor!: ViewContainerRef;
  @ViewChild('image') image!: ElementRef;
  @ViewChild('mangotemplate') mango!: TemplateRef<any>;
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  title1 = 'Crack';
  title2 = 'Cookie';
  title3 = 'Bread';
  titleList = ['Gun', 'Knife', 'Stick'];
  itemList: Array<string> = [];
  today = new Date();
  showRow1 = true;
  showRow2 = true;
  showRow3 = true;
  ngOnInit(): void {
    console.log('ngOnInit ElementRef: ');
    console.log(this.image);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit ElementRef: ');
    console.log(this.image);
    this.container.createEmbeddedView(this.mango);
  }
  addItem(title: string): void {
    this.itemList.push(title);
  }
  checkout(): void {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(CheckoutComponent);
    this.anchor.clear();
    let popup: ComponentRef<any> =
      this.anchor.createComponent(componentFactory);
    popup.instance.itemList = this.itemList;
    popup.instance.comp = popup;
  }
}
