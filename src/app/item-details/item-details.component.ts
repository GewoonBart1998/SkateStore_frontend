import { Component, OnInit, Input } from '@angular/core';
import { product } from '../shopping-list/shop-item.model';
import { storageService } from '../services/storage-service';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  products: product = new product(1, '', 1, '','');


  constructor(
    private storageService: storageService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      console.log(data.product);
    });
  }

  // showProduct(Product: product){
  //   this.products.add(this.products);
  // }

 addVerstuurItem(){
    this.storageService.addItem(this.products);
  }


}
