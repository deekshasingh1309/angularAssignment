import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {BodyComponent} from './body.component'
import {BodyRoutes} from './body.routes'


@NgModule({
  declarations: [BodyComponent],
  exports:[BodyComponent],
  imports: [
    RouterModule.forChild(BodyRoutes),
    CommonModule
  ]
})
export class BodyModule { }
