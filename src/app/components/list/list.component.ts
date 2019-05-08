import { Component, OnInit, Input } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-list',
  //template: '<button>Magic</button>',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [
    // ShareService
  ]
})
export class ListComponent implements OnInit {

  title = 'Hello Angular';
  

  new_item = '';

  constructor(private ss: ShareService) {}

  ngOnInit() {
  }

  add() {
    this.ss.add(this.new_item);
    this.new_item = '';
    this.saveBasket();
  }

  remove(index) {
    this.ss.list.splice(index, 1);
    this.saveBasket();

  }
  edit(index ){
    console.log(index )
  }
  apply(datas){
    this.ss.list[datas.index] = datas.item
    this.saveBasket();
  }

  saveBasket () {
    localStorage.shopAng = JSON.stringify(this.ss.list)
  }

  get count_items() {
    return this.list.length;
  }

  get list() {
    return this.ss.list;
  }

  set list(val) {
    console.log(val);
  }


}
