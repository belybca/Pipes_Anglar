import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit {

  constructor() { }
  toUpper: boolean = false;
  type: string ='';
  heroes: Heroe[] = [
    {
      name:'Superman',
      fly : true,
      color: Color.blue
    },
    {
      name:'Batman',
      fly : false,
      color: Color.black
    },
    {
      name:'Daredevil',
      fly : false,
      color: Color.red
    },
    {
      name:'Robin',
      fly : false,
      color: Color.yellow
    },
    {
      name:'Greenlantern',
      fly : true,
      color: Color.green
    }
  ]

  ngOnInit(): void {
  }

  toggleUpperLower(){
  
    this.toUpper=!this.toUpper;
  }

  changeType(type:string){
    this.type = type;
  }
  
}
