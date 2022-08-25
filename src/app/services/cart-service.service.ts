import { Injectable } from '@angular/core';
import CartItem from 'src/app/models/CartItemModel';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items: CartItem[] = [];

  constructor() { }

  getCartItems(): CartItem[] {
    return this.items;
  }

  addItemToCart(item: CartItem): CartItem[] {
    let index = this.items.findIndex(p => p.product.name === item.product.name);
    if (index === -1) {
      this.items.push(item);
    }
    else {
      this.items[index].quantity = +this.items[index].quantity + +item.quantity;
    }
    return this.items;
  }

  getTotalPrice(): number {
    let total = 0;
    this.items.forEach(item => {
      total += item.product.price * item.quantity;
    });
    return total;
  }

  resetCart() : void {
    this.items = [];
  }
}
