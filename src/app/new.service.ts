import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor( private http :HttpClient) { 

  }
 postdetails(obj:any){
  return this.http.post('http://localhost:3000/bookindetails/',obj)
 }
  getdetails(){
    return this.http.get('http://localhost:3000/bookindetails')
  }

}
