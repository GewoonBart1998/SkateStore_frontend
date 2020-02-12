import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {product} from "../shopping-list/shop-item.model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartProducts: product;
  constructor() { }

  ngOnInit() {
  }


}
