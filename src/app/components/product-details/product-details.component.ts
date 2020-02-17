import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductServices } from '../../shared/services/product.services';
import {Router} from '@angular/router';
import { Iproducts } from '../../shared/model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public productDetailsID;
  public productDetailsData :Iproducts;
  constructor(private AR : ActivatedRoute, private productServices : ProductServices, private router: Router) { }

  ngOnInit() {

    this.AR.params.subscribe(data =>{
      this.productDetailsID = data['id'];
  
    })

    this.productServices.Product()
    .subscribe(data =>{
      //console.log(this.productDetailsID)
      this.productDetailsData = data.find(product => product.productId === parseInt(this.productDetailsID));
    
    })
  }

  backFun(){
    this.router.navigateByUrl('/products');
  }

  RegOffice(){
    this.productServices.Product().subscribe(data =>{
      console.log(data);
    })
  }

}
