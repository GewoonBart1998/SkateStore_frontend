import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../services/product-service";
import {product} from "../shopping-list/shop-item.model";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  newProductForm : FormGroup;


  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.newProductForm = new FormGroup({
      product_name: new FormControl(),
      product_price: new FormControl(),
      product_path: new FormControl(),
      product_description: new FormControl()

    });
  }

  Toevoegen(){
    this.productService.create(this.newProductForm.value).subscribe(response => {

    });
  }
}
