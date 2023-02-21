import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {}

  // 值綁定
  @Input() title = 'Cookie';
  @Input() price = '0';
  @Output() bookEvent = new EventEmitter<string>();
  description = '';

  ngOnInit(): void {
    this.description = 'This is a ' + this.title;
  }

  // 屬性綁定
  // soldout = true;
  soldout = false;

  // 雙向綁定
  count = 1;

  // discount = 'discount';
  discount = 'no-discount';

  // 事件綁定
  book(title: string): void {
    this.bookEvent.emit(title);
    this.count = 1;
  }
}
