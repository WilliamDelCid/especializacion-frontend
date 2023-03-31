import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiNekosRoutingModule } from './api-nekos-routing.module';
import { NekoComponent } from './pages/neko/neko.component';


@NgModule({
  declarations: [
    NekoComponent
  ],
  imports: [
    CommonModule,
    ApiNekosRoutingModule
  ]
})
export class ApiNekosModule { }
