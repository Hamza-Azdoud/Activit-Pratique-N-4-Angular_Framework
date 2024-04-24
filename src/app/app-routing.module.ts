import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "products", component : ProductComponent},
  {path : "newProduct", component : NewProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
