import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../components/navbar/NavbarComponent.1";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

import { ItemCardComponent } from 'src/app/components/item-card/item-card.component';


@NgModule({
  declarations: [NavbarComponent,ItemCardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    MatCardModule
  ],
  exports: [
    NavbarComponent,
    ItemCardComponent
  ]
})
export class SharedModule { }
