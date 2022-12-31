import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  flightform = new FormGroup({
    from : new FormControl(''),
    to : new FormControl(''),
    departure : new FormControl(''),
    passenger : new FormControl('')
  })
 
  constructor(private service : ServiceService,private route :Router) { }
   data :any
   user : any
  ngOnInit(): void {
  }
  flight(){
  this.service.getflightdetails().subscribe(ele =>{
     const data1 = ele.filter((aa :any)=>{
      return aa.from ==this.flightform.value.from && aa.to ==this.flightform.value.to
     })
     if(data1){
      console.log(data1)
      this.user=JSON.stringify(data1)
       this.route.navigate(['/layout/flight/flightbooking'],{queryParams:{bb:this.user}})
     }
  })
  }
}