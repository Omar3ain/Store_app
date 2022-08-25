import { Component, EventEmitter, OnInit , Output } from '@angular/core';
import  CartItem  from '../../models/CartItemModel';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems : CartItem[] = []
  fullName : string = '';
  address: string = ''
  creditCard: string = ''
  totalPrice: number = 0

  constructor( private cartService : CartServiceService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
   this.totalPrice = this.cartService.getTotalPrice();
  }
  resetCart() : void {
    this.cartService.resetCart();
    this.cartItems = [];
  }

  updatePrice(): void {
    this.totalPrice = this.cartService.getTotalPrice();
  }
  onSubmit() : void {
    this.totalPrice = this.cartService.getTotalPrice()

  }
  restForm(){
    localStorage.setItem('fullname' , this.fullName);
    
  }
}
