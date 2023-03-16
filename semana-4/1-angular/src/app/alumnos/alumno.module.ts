import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlumnoComponent } from './alumno/alumno.component';

@NgModule({
  declarations: [AlumnoComponent],
  imports: [CommonModule],
  //Poner para exportar fuera
  exports: [AlumnoComponent],
})
export class AlumnoModule {}
