import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cart = this.cartService.cart;
  constructor(private cartService: CartService){}

  ngOnInit(){
    // console.log(this.cartService.cart)
  }
}
