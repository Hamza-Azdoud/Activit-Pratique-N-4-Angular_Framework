import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  products :Array<Product>= [];
  constructor(private productService : ProductService) {

  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
      this.productService.getproducts()
        .subscribe({
          next : data => this.products =data,
          error : err => {
            console.log(err);
          }
        })

  }

  handelCheckProduct(product: Product) {
    this.productService.checkproducts(product).subscribe({
        next : updatedProduct => {
          product.checked=!product.checked;
        }
    })

  }
}
