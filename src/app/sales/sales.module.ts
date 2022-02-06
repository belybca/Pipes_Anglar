import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { HeroeFly } from './pipes/heroeFly.pipe';
import { MayusculasPipe } from './pipes/uppercases.pipe';
import { OrderComponent } from './pages/order/order.component';
import { SortPipe } from './pipes/sort.pipe';


@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    HeroeFly,
    MayusculasPipe,
    OrderComponent,
    SortPipe  
    
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    BasicsComponent,
    NoCommonsComponent,
    NumbersComponent,
    OrderComponent
    
  ]
})
export class SalesModule { }
