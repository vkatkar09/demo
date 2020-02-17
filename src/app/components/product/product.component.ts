import { Component, OnInit, ElementRef } from '@angular/core';
import { ProductServices } from '../../shared/services/product.services';
import { Iproducts } from '../../shared/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
  public currentRating : number;
  public showRating = false;
  public isShow : boolean = true;
  public productData : Iproducts[];
  constructor(private productServices:ProductServices) { }

  ngOnInit() {
    this.productServices.Product()
    .subscribe(data =>{
      this.productData = data;
      //console.log(data);
    })
  }

  imgFunc(){
     this.isShow = !this.isShow;
  }

  ratingFunc(rating : number){
   // console.log(rating);
    this.currentRating = rating;
    this.showRating = true;
  }
}
