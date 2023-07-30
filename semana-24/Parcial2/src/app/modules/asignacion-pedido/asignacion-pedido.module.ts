import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignacionPedidoRoutingModule } from './asignacion-pedido-routing.module';
import { AsignacionComponent } from './pages/asignacion/asignacion.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AsignacionComponent
  ],
  imports: [
    CommonModule,
    AsignacionPedidoRoutingModule,FormsModule,NgSelectModule,ReactiveFormsModule
  ]
})
export class AsignacionPedidoModule { }
