import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { FlightbookingComponent } from './flightbooking/flightbooking.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path : 'layout',component : LayoutComponent ,
    children :[
      {path : 'login',component : LoginComponent },
      {path : 'signup',component : SignupComponent},
      {path : 'flight',component :FlightComponent,
      children : [ 
      {path : 'flightbooking',component : FlightbookingComponent},
    ] 
  },
  {path :'reservation',component : ReservationComponent}
  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
