import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Component({
  selector: 'raj-root',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  title = 'Angular: Getting Started';
  products: IProduct[]=[];
  errorMessage: string;
  constructor(private _productService:ProductService){
  }
  ngOnInit():void {
      this._productService.getProducts().subscribe(products => this.products = products,
    error => this.errorMessage = <any> error );
  }
}