import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ItemService {


  private url = 'http://localhost:3000/items/';

  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  items: Item[] = [
    {
      id:1,
      title: "manzana",
      price: 200,
      quantity: 3,
      completed: false,
    },
    {
      id:2,
      title: "platano",
      price: 500,
      quantity: 3,
      completed: true,
    },
    {
      id:3,
      title: "durazno",
      price: 200,
      quantity: 3,
      completed: true,
    },
    {
      id:4,
      title: "kiwi",
      price: 800,
      quantity: 10,
      completed: false,
    },
    {
      id:5,
      title: "Mango",
      price: 400,
      quantity: 10,
      completed: false,
    }    
  ];

  constructor(private http: HttpClient) 
  {

  }

  getItems(): Observable<Item[]>
  {    
    return this.http.get<Item[]>(this.url)
  }

  addItem(item: Item): Observable<Item>
  {
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }

  toggleItem(item:Item): Observable<Item>
  {
    return this.http.put<Item>(this.url + item.id, item, this.httpOptions);
  }

  deleteItem(item:Item): Observable<Item>
  {
    return this.http.delete<Item>(this.url + item.id);
  }

}
