import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {
  }
  getuser() {
    return this.http.get<any>('http://localhost:3000/login');

  }
  postuser(obj: any) {
    return this.http.post('http://localhost:3000/signup/', obj);
  }
  getflightdetails() {
    return this.http.get<any>('http://localhost:3000/flight');
  }

}
