import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import {RouterModule} from '@angular/router';
import { product } from './product.routes';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(product)
  ]
})
export class ProductModule { }
