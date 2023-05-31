import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecasRoutingModule } from './bibliotecas-routing.module';
import { ListarBibliotecasComponent } from './pages/listar-bibliotecas/listar-bibliotecas.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIModule } from 'src/app/shared/ui/ui.module';


@NgModule({
  declarations: [
    ListarBibliotecasComponent
  ],
  imports: [
    CommonModule,
    BibliotecasRoutingModule,HttpClientModule
    ,NgbModalModule, //pal modal
    FormsModule,ReactiveFormsModule,UIModule,NgbModule
  ]
})
export class BibliotecasModule { }
