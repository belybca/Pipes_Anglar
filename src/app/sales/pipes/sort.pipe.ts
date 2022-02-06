import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Heroe[], type: string = ''): Heroe[] {
    
   switch (type){
      case 'name':
        value = value.sort((a,b)=>(a.name>b.name)?1:-1);
       return value;

      case 'color':
      value = value.sort((a,b)=>(a.color>b.color)?1:-1);
       return value;

      case 'fly':
        value = value.sort((a,b)=>(a.fly>b.fly)?-1:1);
       return value;

      default:
        return value;

   }
}

}
