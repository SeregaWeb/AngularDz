import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private ss: ShareService) { }

  basket = this.ss.basket
  
  ngOnInit() {
  }
  countMinus(i){
    if(this.basket[i].count > 1){
      this.basket[i].count--
      this.saveBasket();
    }else{
      return
    }
  }
  countPlus(i){
    this.basket[i].count++;
    this.saveBasket();

  }
  remove(i){
    this.basket.splice(i,1);
    this.saveBasket();
  }
  saveBasket () {
    localStorage.basketAngular = JSON.stringify(this.basket)
  }

  get count () {
    var count = 0 ; 
    this.basket.forEach(element => {
      count += element.count
    });
    return count
  }
  get priceAll () {
    var all = 0;
    this.basket.forEach(element => {
      all += element.count * element.price
    });
    return all
  }
}
