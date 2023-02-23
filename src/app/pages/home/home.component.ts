import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ServicesService } from 'src/app/Services/services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public router: Router, private productService: ServicesService) {}

  product = this.productService.product;

  totalQuantity: number = 0;
  // car(){
  //   this.router.navigate(['car']);
  // }

  addToCartParent(eventData: Item){
    console.log(eventData.id)

    if(eventData){
      this.totalQuantity++;
    }
  }
}
