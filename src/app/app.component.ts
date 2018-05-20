import { Component } from '@angular/core';
import { ProductService } from './product/product.service';

@Component({
  selector: 'app-root',
  template:`
  <div>
      <nav class='navbar navbar-default'>
      <div class='container-fluid'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav navbar-nav'>
          <li> <a [routerLink]= "['/welcome']">home</a></li>
          <li> <a [routerLink]= "['/products']">product list</a></li>
        </ul>
      </div>
     </nav>
     <div class='container'>
     <router-outlet></router-outlet>
     </div>
  </div> 
  ` 
,
  providers: [ProductService]
})



export class AppComponent{
  title : String = 'my title';
}