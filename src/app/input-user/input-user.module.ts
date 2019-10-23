import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {InputUserComponent} from './input-user.component'
import {InputUserRoutes} from './input-user.routes'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputUserComponent],
  exports:[InputUserComponent],
  imports: [
    RouterModule.forChild(InputUserRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InputUserModule { }