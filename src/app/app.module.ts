import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { productModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductGuardService } from './product/product-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
     productModule,
     BrowserModule,
     HttpClientModule,
     RouterModule.forRoot([
      {path:'products',component:ProductComponent},
      {path:'products/:id',canActivate:[ProductGuardService],component:ProductDetailComponent},
      {path:'welcome',component:WelcomeComponent}
    ])
  ],
 
  bootstrap: [AppComponent],
 
  providers: [ProductGuardService] //starter component
})
export class AppModule { }
