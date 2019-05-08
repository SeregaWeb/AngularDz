import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() item = '';
  @Output() itemChange = new EventEmitter();
  @Input() index = 0;

  @Output() remove = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() apply = new EventEmitter();

  editFl = true;
  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.itemChange.emit('');
    this.item = '';

  }

  remove2() {
    this.remove.emit(this.index);
  }

  editChild() {
    this.editFl = false;
  }

  applyChild() {
    var datas = {
      index: this.index,
      item: this.item 
    }
    this.apply.emit(datas);
    this.editFl = true;
  }

}
