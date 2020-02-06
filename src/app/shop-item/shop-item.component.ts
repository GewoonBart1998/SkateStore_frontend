import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { product } from '../shopping-list/shop-item.model';


@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {
  @Input() products: product;
  @Output() shopItemSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.shopItemSelected.emit();
  }

}
