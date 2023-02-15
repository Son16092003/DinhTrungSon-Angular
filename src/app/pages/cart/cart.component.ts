import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(public routerService: Router){

  }
  
  goHome(){
    this.routerService.navigate(['home']);  
  }
}
