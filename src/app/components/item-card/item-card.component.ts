import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
@Input() itemData!: Item;

@Output() itemDataChange: EventEmitter<Item> = new EventEmitter<Item>();

constructor(private cartService: CartService){}

 addToCart(item: Item){
  this.itemDataChange.emit(item);
  this.cartService.addToCart(item);
 }
}
