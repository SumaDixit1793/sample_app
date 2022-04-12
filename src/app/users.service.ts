import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpParams } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class UsersService {

  url:string;
  education_array:Object[];
  constructor(private http:HttpClient) 
  { 

  	this.url = "http://127.0.0.1:5000/post_education";
  	this.education_array = new Array<Object>(2);
  }

  setParamsEducation(education_array:Object[])
  {
  	for(var i = 0;i<education_array.length;i++)
  	{
  		this.education_array[i] = education_array[i];
  	}
  }
  getData()
  {
  	
    // Fake API testing : https://jsonplaceholder.typicode.com/
    const headers = { 'content-type': 'application/json'} 
    let queryParams = new HttpParams();
    for(var i = 0;i<this.education_array.length;i++)
    {
    	queryParams = queryParams.append("obj_" +(i+1) , JSON.stringify(this.education_array[i]));
    }
    return this.http.get(this.url, {'headers':headers,params:queryParams});
  }
}
