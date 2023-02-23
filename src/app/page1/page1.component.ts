import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit, DoCheck {
  constructor(private activatedRoute: ActivatedRoute) {}
  name: any;
  ngOnInit(): void {}
  ngDoCheck(): void {
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    // console.log(this.activatedRoute.snapshot.routeConfig);
  }
}
