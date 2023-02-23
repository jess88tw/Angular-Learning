import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

  random = Math.random();

  getRandom(): number {
    return this.random;
  }
}
