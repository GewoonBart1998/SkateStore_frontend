import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { product } from '../shopping-list/shop-item.model';
import { ItemDetailsComponent } from '../item-details/item-details.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  selectedShopItem: product;
  @Output() shopItemWasSelected = new EventEmitter<product>();
  products: product[] =[
    new product('Hoodie', 9, 'dit is een beschrijving', `assets/images/products/hoodie1.jpg`),
    new product('Trui', 8, 'test', `assets/images/products/hoodie2.jpg`),
    new product('Dit is een lange text', 28, 'test', `assets/images/products/hoodie3.jpg`)

  ];

  constructor(
    // private itemDetailscomponent: ItemDetailsComponent

  ) { }

  ngOnInit() {
  }

  onShopItemSelected(Product: product){
    this.shopItemWasSelected.emit(Product);
    console.log(Product.imagePath)
  }

}
