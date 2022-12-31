import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Login = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })
  constructor(private service :ServiceService) { }

  ngOnInit(): void {
  } 
  
  login(){
  this.service.getuser().subscribe(el =>{
    const hi = el.find((a : any)=>{
      return a.email ==this.Login.value.email && a.password == this.Login.value.password

    })
    if (hi){
      alert('login successfully')
      this.Login.reset
    }
    else {
      alert('Invalid')
    }
  })
  }
}
