import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product-service";
import {product} from "../shopping-list/shop-item.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private productService: ProductService

  ) { }

  ngOnInit() {
  }

}
