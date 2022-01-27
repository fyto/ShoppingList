import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

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

  constructor() { }

  getItems()
  {
    return this.items;
  }

  addItem(item: Item)
  {
    console.log(item);
    this.items.unshift(item);
    console.log(this.items);
  }

}
