import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

  list =  JSON.parse(localStorage.shopAng || '[]')
  shop = [{
    name: "product 1",
    price: 22
  },
  {
    name: "product 2",
    price: 23
  },
  {
    name: "product 3",
    price: 24
  },
  {
    name: "product 4",
    price: 25
  }]
  basket = JSON.parse(localStorage.basketAngular || '[]')
  constructor() { }

  add(val) {
    this.list.push(val);
  }
  
}
