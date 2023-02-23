import { ItemService } from './../item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'],
})
export class Page3Component implements OnInit {
  constructor(private itemService: ItemService) {}
  random: any;
  ngOnInit(): void {
    this.random = this.itemService.getRandom();
  }
}