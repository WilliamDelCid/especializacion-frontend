import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { MostrarComponent } from './pages/mostrar/mostrar.component';
import { NgxPaginationModule, PaginationService } from 'ngx-pagination';
import { TablaComponent } from './pages/tabla/tabla.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalComponent } from './pages/modal/modal.component';


@NgModule({
  declarations: [
    MostrarComponent,
    TablaComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    ReactiveFormsModule,
    UIModule, //!Migas
    FormsModule, //!Para el Modal
    NgxPaginationModule, //!Para paginar
    Ng2SearchPipeModule //!Pa buscar
  ],

})
export class EmpleadoModule { }
