
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproducts } from '../model/product';

@Injectable({ providedIn: 'root' })
export class ProductServices {

    public productEndPoint: string = './assets/productAPI.json';

    constructor(private http: HttpClient) { }

    Product(): Observable<Iproducts[]> {
        return this.http.get<Iproducts[]>(this.productEndPoint);
    }
}