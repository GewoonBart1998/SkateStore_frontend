import { Component, OnInit, Input } from '@angular/core';
import { product } from '../shopping-list/shop-item.model';
import { ShopCardComponent } from '../shop-card/shop-card.component';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
  providers: [ShopCardComponent]
})
export class ItemDetailsComponent implements OnInit {
  @Input() products: product;
  

  constructor(
    private shopCardComponent: ShopCardComponent
  ) { }

  ngOnInit() {
  }

  // showProduct(Product: product){
  //   this.products.add(this.products);
  // }

 addVerstuurItem(){
    this.shopCardComponent.addItem(this.products);
  }


}
