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
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { HomeComponent} from './home/home.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';




const appRoutes: Routes =[
  { path: '', component: HomeComponent },
  { path: 'shop-card', component: ShopCardComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'item-details/:product', component: ItemDetailsComponent },



];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ShoppingListComponent,
    ShopItemComponent,
    ShopCardComponent,
    AdminPortalComponent,
    ItemDetailsComponent,
    HomeComponent,
    CartItemComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
