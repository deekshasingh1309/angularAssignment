import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import{ OrdersRoutes} from './orders.routes';
import {OrdersComponent} from './orders.component'


@NgModule({
  declarations: [OrdersComponent],
  exports:[OrdersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(OrdersRoutes)
  ]
})
export class OrdersModule { }
