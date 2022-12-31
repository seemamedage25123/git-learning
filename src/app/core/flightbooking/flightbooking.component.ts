import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flightbooking',
  templateUrl: './flightbooking.component.html',
  styleUrls: ['./flightbooking.component.scss']
})
export class FlightbookingComponent implements OnInit {

  constructor(private active :ActivatedRoute,private route :Router) { }
    hello :any
    xyz :any
    
  ngOnInit(): void {
this.active.queryParamMap.subscribe(value =>{
this.hello =value.get('bb')
this.xyz =JSON.parse(this.hello)
})
  }
  aa:any
  book(item:any){
    this.aa=JSON.stringify(item)
    this.route.navigate(['/layout/reservation'],{queryParams :{abc :this.aa}})
    alert('passenger details save successfully')
  }
}
