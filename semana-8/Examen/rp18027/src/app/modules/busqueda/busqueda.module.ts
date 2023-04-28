import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent, busquedas } from './components/input/input.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { CardComponent } from './components/card/card.component';
import { PhotoService } from './services/photo.service';
import { FormsModule } from '@angular/forms';
import { listaDesdeSideBar } from '../shared/components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    InputComponent,
    BusquedaComponent,
    ResultadoComponent,
    CardComponent,
    busquedas,
    listaDesdeSideBar,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [InputComponent, BusquedaComponent, busquedas],
  providers: [PhotoService],
})
export class BusquedaModule {}
