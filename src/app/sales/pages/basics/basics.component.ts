import { Component} from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  constructor() { }

  nameLower : string = 'albelis';
  nameUpper : string = 'ALBELIS';
  nameTitle : string = 'aLbElIs';

  date : Date = new Date();
}
