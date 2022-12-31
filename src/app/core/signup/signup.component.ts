import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
 import { FormGroup,FormBuilder, FormControl} from "@angular/forms"
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 signupForm =  new FormGroup({
  fullname : new FormControl(''),
  password : new FormControl(''),
  email : new FormControl(''),
  mobile : new FormControl('')

 })
  constructor(  private service :ServiceService)  { }

  ngOnInit(): void {
    
  }
  signup(){
    let obj ={
      fullname : this.signupForm.value.fullname,
      password : this.signupForm.value.password,
      email : this.signupForm.value.email,
      mobile : this.signupForm.value.mobile,
      id : ''

    }
   this.service.postuser(obj).subscribe(ele =>{
    console.log(ele)
    
    
   })

  }

}
