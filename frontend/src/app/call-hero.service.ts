import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CallHeroService {

  constructor(private http:HttpClient) { 
  }
   decodeNumber(str){
   return this.http.post(`${environment.baseUrl}/decode`,{data:str})
   }
  }
