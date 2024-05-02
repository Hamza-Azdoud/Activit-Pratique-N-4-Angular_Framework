import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  public products : Array<Product> =[];
  public keyword : string="";
  constructor(private productService : ProductService) {

  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    //this.products$ = this.productService.getproducts();

      this.productService.getproducts(1,2)
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

  handelDelete(product: Product) {
    if (confirm("Etes vous sure ?"))
    this.productService.deleteProduct(product).subscribe({
      next: value => {
        this.getProducts();
        //this.products=this.products.filter(p => p.id! =product.id)
      }
    })
  }

  searchProducts() {
    this.productService.searchProducts(this.keyword).subscribe({
      next : value => {
        this.products= value;
      }
    })
  }
}
