import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component'
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { CartComponent } from './components/cart/cart.component'
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

const routes: Routes = [
  {path: '' , component: ProductListComponent},
  {path:'product-item-detials/:id' , component:ProductItemDetailsComponent},
  {path:'cart' , component:CartComponent},
  {path:'confirmation' , component:ConfirmationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
