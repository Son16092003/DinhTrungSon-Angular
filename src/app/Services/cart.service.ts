import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: Item[] = [];

  addToCart(item: Item){
    this.cart.push(item);
  }

}
