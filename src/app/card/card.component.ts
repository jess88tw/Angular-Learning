import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {}

  // 值綁定
  @Input() title = 'Cookie';
  description = '';

  ngOnInit(): void {
    this.description = 'This is a ' + this.title;
  }

  // 屬性綁定
  // soldout = true;
  soldout = false;

  // discount = 'discount';
  discount = 'no-discount';

  // 事件綁定
  book(title: string): void {
    alert('訂購' + title + '成功');
  }
}
