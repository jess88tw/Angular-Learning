import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  constructor() {}

  title1 = 'Crack';
  title2 = 'Cookie';
  title3 = 'Bread';
  itemList: Array<string> = [];
  today = new Date();
  ngOnInit(): void {}
  addItem(title: string): void {
    this.itemList.push(title);
  }
}
