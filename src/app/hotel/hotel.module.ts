import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelsComponent } from './hotels/hotels.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HotelsComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    ReactiveFormsModule
  ]
})
export class HotelModule { }
