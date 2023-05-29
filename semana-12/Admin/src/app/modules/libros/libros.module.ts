import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { ModalComponent } from './pages/modal/modal.component';
import { MostrarComponent } from './pages/mostrar/mostrar.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { NgxPaginationModule, PaginationService } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ModalComponent,
    MostrarComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbPaginationModule,
    UIModule, //!Migas
    FormsModule, //!Para el Modal
    NgxPaginationModule, //!Para paginar
    Ng2SearchPipeModule //!Pa buscar
  ]
})
export class LibrosModule { }
