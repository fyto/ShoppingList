import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { MesService } from 'src/app/services/mes.service';

@Component({
  selector: 'app-mes',
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.css']
})
export class MesComponent implements OnInit {

  months: Item[] = [];

  // @Input() month: Month = new Month();

  constructor(private monthService: MesService)
  {

  }

  ngOnInit(): void 
  {
    this.monthService.getMonths().subscribe(data => {
      console.log("entrando al componente month");
      this.months = data;
    })   
  }

}
