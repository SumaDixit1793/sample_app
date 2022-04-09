import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class UsersService {

  url:string;
  
  constructor(private http:HttpClient) 
  { 

  	this.url = "";
  }
  setParams(graduated:string)
  {
  	this.url = "http://127.0.0.1:5000/post_education?graduated=" + graduated;
  }
  getData()
  {
  	
    // Fake API testing : https://jsonplaceholder.typicode.com/
    const headers = { 'content-type': 'application/json'} 
    return this.http.get(this.url, {'headers':headers});
  }
}
