import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../../shared/services/product.services';
import { FormGroup, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities = ['Mumbai', 'Pune', 'Banglore', 'Satara']
  contactForm: FormGroup;
  constructor(private productServices : ProductServices, private formBuilder: FormBuilder) { 
    this.createContactForm()
  }
  createContactForm(){
    this.contactForm = this.formBuilder.group({
      fullName: [''],  
      email: [''],
      city: ['']
    });
  }

  ngOnInit() {
  }

  RegOffice(){
    console.log("In regoffice")
    this.productServices.Product().subscribe(data =>{
      console.log(data)
    
      this.contactForm.controls['fullName'].setValue(data[0].product);
      this.contactForm.controls['email'].setValue(data[0].code);
      this.contactForm.controls['city'].setValue("Mumbai");
    })
  }

  other(){
    console.log("In other")
  }

}
