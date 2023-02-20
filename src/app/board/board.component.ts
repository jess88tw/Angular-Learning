import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  constructor() {}

  title1 = 'Cack';
  title2 = 'Cookie';
  title3 = 'Bread';

  ngOnInit(): void {}
}
