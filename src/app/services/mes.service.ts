import { Month } from './../models/month';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})

export class MesService 
{

  private url = 'http://localhost:3000/items/';

  // private httpOptions = {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // };

  constructor(private http: HttpClient) 
  { 

  }

  getMonths(): Observable<Item[]>
  {    
    
    console.log("entrando a month");
    return this.http.get<Item[]>(this.url)
  }

}
