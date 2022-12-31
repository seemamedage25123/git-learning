import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewService } from 'src/app/new.service';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
   
  constructor( private fb :FormBuilder ,private service : NewService,private route :ActivatedRoute) { }
  reservation =this.fb.group({
   book : this.fb.array<any>([
    this.fb.group({
      fullname :[''],
      adharno :[''],

    })
   ]) 
  })
   dd:any
   hello:any
  ngOnInit(): void {
 this.route.queryParamMap.subscribe(ele =>{
   this.dd =ele.get('abc')
   this.hello =JSON.parse(this.dd)
 })
  }
get user(){
return this.reservation.get('book')as FormArray
}
add(){
  let zz =<FormArray> this.reservation.controls['book']
  zz.push(
    this.fb.group({
      fullname :[''],
      adharno :[''],
    })
  )
}
submit(){
  let obj = {
      from : this.hello.from,
      to : this.hello.to,
    userdetails: this.reservation.value.book ,

  }
  this.service.postdetails(obj).subscribe(ele =>{
    console.log(ele)
  })
    
  
    
  
}
}
