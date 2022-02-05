import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NoCommonsComponent } from './sales/pages/no-commons/no-commons.component';
import { OrderComponent } from './sales/pages/order/order.component';


const routes: Routes = [
{
path:'basics',
component:BasicsComponent
},
{
  path:'no-commons',
  component:NoCommonsComponent
},
{
  path:'numbers',
  component:NumbersComponent
},
{
  path:'order',
  component:OrderComponent
},
{
  path:'**',
  redirectTo:''
  //Back to home
}
  
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
