import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './body/body.module#BodyModule'
  },
  {
    path: 'adduser',
    loadChildren: './input-user/input-user.module#InputUserModule'
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
