import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit, DoCheck {
  constructor(private activatedRoute: ActivatedRoute) {}
  name: any;
  count: any;
  ngOnInit(): void {}
  ngDoCheck(): void {
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.count = this.activatedRoute.snapshot.paramMap.get('count');
  }
}
