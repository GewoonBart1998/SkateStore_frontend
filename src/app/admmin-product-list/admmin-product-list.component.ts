import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {product} from "../shopping-list/shop-item.model";
import {ProductService} from "../services/product-service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-admmin-product-list',
  templateUrl: './admmin-product-list.component.html',
  styleUrls: ['./admmin-product-list.component.scss']
})
export class AdmminProductListComponent implements OnInit {

  @Output() adminItemWasSelected = new EventEmitter<product>();

  adminProducts: product[] = [];


  constructor(
    private productService: ProductService,
    private router: Router

  ) {
  }

  ngOnInit() {
    this.plaatsProducten();
  }

  plaatsProducten(){
    this.adminProducts = [];
    this.productService.list().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        this.adminProducts.push(new product(res[i].product_id, res[i].product_name, res[i].product_price, res[i].product_description, res[i].product_path, 0));
      }
    });
  }

  adminItemSelected(adminProduct: product) {
    this.adminItemWasSelected.emit(adminProduct);
  }

  openNieuwItemMenu() {
    this.router.navigate(['/new-product']);
  }
}
