import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

  list =  JSON.parse(localStorage.shopAng || '[]')

  constructor() { }

  add(val) {
    this.list.push(val);
  }
  
}
