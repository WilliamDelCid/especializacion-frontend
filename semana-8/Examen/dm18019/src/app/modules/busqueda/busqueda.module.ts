import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { HistorialComponent } from 'src/app/shared/historial/pages/historial/historial.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BusquedaComponent,HistorialComponent,BuscadorComponent, CardsComponent
  ],
  imports: [
    CommonModule,
    BusquedaRoutingModule,FormsModule
  ]
})
export class BusquedaModule { }
