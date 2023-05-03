import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotasRoutingModule } from './mascotas-routing.module';
import { CardComponent } from './components/card/card.component';
import { ListarComponent } from './pages/listar/listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MascotaComponent } from './pages/mascota/mascota.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ImagenempthyPipe } from './pages/pipes/imagenempthy.pipe';

@NgModule({
  declarations: [CardComponent, ListarComponent, MascotaComponent, NuevoComponent, EditarComponent, ImagenempthyPipe],
  imports: [CommonModule, MascotasRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
})
export class MascotasModule {}
