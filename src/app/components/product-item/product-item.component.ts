import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

import  storeModel from 'src/app/models/storeDataModel';
import CartItem from 'src/app/models/CartItemModel';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()  productsList : storeModel = new storeModel();
  @Output() AddToCart = new EventEmitter();

  quantities : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  quantity: number = 1;

  constructor( private cartService : CartServiceService) { }


  addItem(product: storeModel) {
    this.AddToCart.emit(new CartItem(product, this.quantity));
    alert(`You have added ${product.name} to cart.`);
  }
  ngOnInit(): void {
  }
}
