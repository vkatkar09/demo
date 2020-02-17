import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';





const routes: Routes = [{
  path : 'welcome',
  component : HomeComponent
},
{
  path : 'products',
  component : ProductComponent
},
{
  path : 'product/:id',
  component : ProductDetailsComponent
},
{
  path: '', 
  redirectTo: '/welcome', 
  pathMatch: 'full' 
},
{
  path: 'home',
  loadChildren : './components/home/home.module#HomeModule'
},
{
  path : 'products',
  loadChildren : './components/product/product.module#ProductModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
