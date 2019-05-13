import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ss: ShareService) { }
  list = this.ss.shop;
  basket = this.ss.basket;
  ngOnInit() {
  }
  addToBask(i){

    var fl = false;

    this.basket.forEach(function(val){
      if(val.id == i){
        fl = true;
        val.count++;
      }
    })

    if(fl == false){
      var newItem = {
        id: i,
        name: this.ss.shop[i].name,
        price: this.ss.shop[i].price,
        count: 1
      }
      this.basket.push(newItem)
    }
    
    this.saveBasket();
    console.log(this.basket)
  }
  saveBasket () {
    localStorage.basketAngular = JSON.stringify(this.basket)
  }
}
