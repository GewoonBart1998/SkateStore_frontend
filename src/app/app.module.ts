import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { HomeComponent} from './home/home.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdmminProductComponent } from './admmin-product/admmin-product.component';
import { AdmminProductListComponent } from './admmin-product-list/admmin-product-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import { ItemManagerComponent } from './item-manager/item-manager.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { NewProductComponent } from './new-product/new-product.component';



const appRoutes: Routes =[
  { path: '', component: HomeComponent },
  { path: 'shop-card', component: ShopCardComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'item-details/:id', component: ItemDetailsComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  // { path: 'admin-portal', component: AdminPortalComponent },
  { path: 'admin-product-list', component: AdmminProductListComponent },
  { path: 'item-manager/:id', component: ItemManagerComponent },
  { path: 'new-product', component: NewProductComponent },








];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ShoppingListComponent,
    ShopItemComponent,
    ShopCardComponent,
    ItemDetailsComponent,
    HomeComponent,
    CartItemComponent,
    AdminLoginComponent,
    AdmminProductComponent,
    AdmminProductListComponent,
    ItemManagerComponent,
    NewProductComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule

  ],

  exports:[],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent],
})
export class AppModule { }
