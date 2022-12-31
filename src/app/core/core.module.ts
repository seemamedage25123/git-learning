import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightComponent } from './flight/flight.component';
import { FlightbookingComponent } from './flightbooking/flightbooking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './reservation/reservation.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    FlightComponent,
    FlightbookingComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule


  ],
  exports : [LayoutComponent]
})
export class CoreModule { }
