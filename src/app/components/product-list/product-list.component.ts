import { Component, OnInit ,Output} from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { CartServiceService } from 'src/app/services/cart-service.service';

import  storeModel  from 'src/app/models/storeDataModel';
import  CartItem  from 'src/app/models/CartItemModel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: storeModel[] = [];


  constructor(private getData : GetDataService , private cartService : CartServiceService ) {
   }

   

  ngOnInit(): void {
    this.getData.getData().subscribe({
      next:(res) => {
        this.products = res;
        console.log(this.products)
      },
      error :(error) => {
        console.log(error)
      }
    })
  }
  addItemToCart(item: CartItem) {
    this.cartService.addItemToCart(item);
    console.log(item)
  }


}
