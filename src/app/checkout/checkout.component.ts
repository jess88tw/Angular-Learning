import { Component, ComponentRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor() {}
  // 商品列表
  @Input() itemList = [];
  // 自身 Component 的參照
  @Input() comp!: ComponentRef<any>;

  ngOnInit(): void {}

  popupClose(): void {
    this.comp.destroy();
  }
}
