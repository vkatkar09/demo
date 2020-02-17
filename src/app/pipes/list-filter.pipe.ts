import { Pipe, PipeTransform } from '@angular/core';
import { Iproducts } from '../shared/model/product';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(items: Iproducts[], value: string) {
    if (!items) return [];
    if (!value) return  items;
    if (value == '' || value == null) return [];
    return items.filter( (e:Iproducts) => e.product.toLowerCase().indexOf(value) > -1 );
  }
}
