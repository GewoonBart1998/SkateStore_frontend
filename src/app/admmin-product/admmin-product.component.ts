import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {product} from "../shopping-list/shop-item.model";
import {ProductService} from "../services/product-service"
import {AdmminProductListComponent} from "../admmin-product-list/admmin-product-list.component";

@Component({
  selector: 'app-admmin-product',
  templateUrl: './admmin-product.component.html',
  styleUrls: ['./admmin-product.component.scss']
})
export class AdmminProductComponent implements OnInit {
  @Input() adminProduct: product;
  @Output() adminItemSelected = new EventEmitter<void>();


  constructor(private productService: ProductService,
              private admminProductListComponent: AdmminProductListComponent
  ) { }

  ngOnInit() {
  }

  deleteAdminproduct(){
    this.productService.delete(this.adminProduct.product_id).subscribe(res => {
      this.admminProductListComponent.plaatsProducten()
    });
  }

  onAdminItemSelected(){
    this.adminItemSelected.emit();
  }

}
