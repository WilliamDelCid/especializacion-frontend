import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NouryokuRoutingModule } from './nouryoku-routing.module';
import { NouryokuComponent } from './pages/nouryoku/nouryoku.component';


@NgModule({
  declarations: [
    NouryokuComponent
  ],
  imports: [
    CommonModule,
    NouryokuRoutingModule
  ]
})
export class NouryokuModule { }
