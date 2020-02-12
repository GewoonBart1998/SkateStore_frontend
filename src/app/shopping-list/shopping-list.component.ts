import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { product } from '../shopping-list/shop-item.model';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import {ShopCardComponent} from "../shop-card/shop-card.component";
// import {productService} from "../services/product-service"

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ItemDetailsComponent]
})
export class ShoppingListComponent implements OnInit {
  selectedShopItem: product;
  @Output() shopItemWasSelected = new EventEmitter<product>();

  products: Array<product>;

  constructor(
    // private productService: productService
  ) {
  }

  ngOnInit() {
    // this.productService.list().subscribe(res => {
    //     this.PzroductService = res;
    //   });
  }

  onShopItemSelected(Product: product){
    this.shopItemWasSelected.emit(Product);
    console.log(Product.imagePath)
  }

}
