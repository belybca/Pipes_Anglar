import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent{
 //i18nSelect
  name: string = 'Albelis';
  gender: string = 'femenino';

  innviteMap = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }
//i18nPlural
  // clients: string[] =[]
  // clients: string[] =['Marie']
  clients: string[] =['Marie','Fiona','Diane','Miguel']

  clientsMap={
    '=0': 'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  changePerson(){
    this.name = 'Gonzalo';
    this.gender = 'masculino'
  }

  removeClient(){
    this.clients.shift();
  }

  //Key Value pipe

  persona = {
    name: 'Luisa',
    edad: 44,
    address:'56 rue Liz Quebec'
  }

  heroes=[
    {
    name:'Superman',
    fly: true
    },
    {
    name:'Robin',
    fly: false
    },
    {
    name:'Aquaman',
    fly: false
    }
  ]

  //asyc Pipe      
  //using observable
  myObservable = interval(2000);

  valPromise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
      resolve('End of the promise, t')
    }, 3500);
  });
}
