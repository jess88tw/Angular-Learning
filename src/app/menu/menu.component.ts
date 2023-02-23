import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  itemName = '';
  ngOnInit(): void {}
  toPage1(itemName: string): void {
    this.router.navigate(['/page1', { name: itemName, count: 1 }]);
  }
}
