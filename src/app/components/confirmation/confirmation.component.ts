import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  fullname : string | null = localStorage.getItem('fullname') 
  totalPrice : number = 0
  constructor( private cartService : CartServiceService) { }

  ngOnInit(): void {
   this.totalPrice = this.cartService.getTotalPrice()
  }
  resetCart(){
    this.cartService.resetCart()
  }

}
