import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent
  ],
  imports:[RouterModule,
    CommonModule],
  exports:[ProductComponent],
  providers: [],
})
export class productModule { }