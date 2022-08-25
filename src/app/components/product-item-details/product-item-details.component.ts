import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { CartServiceService } from 'src/app/services/cart-service.service';

import  storeModel  from 'src/app/models/storeDataModel';
import  CartItem  from '../../models/CartItemModel';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
  id : number = 0;

  quantity: number = 1;

  quantities: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  items: CartItem[] = [];

  product : storeModel = new storeModel()
  constructor(private getdata :GetDataService ,private route: ActivatedRoute , private cartService : CartServiceService ) { }

  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
    this.id = +this.route.snapshot.paramMap.get('id')!
    this.getdata.getData().subscribe({
      next:(res) => {
        this.product = res[this.id-1] 
      }
    })
  }
  addItem(product: storeModel) {
    this.cartService.addItemToCart(new CartItem(product, this.quantity))
    alert(`${product.name} added.`);
  }

}
