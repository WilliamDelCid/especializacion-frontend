import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlumnoComponent } from './alumno/alumno.component';

@NgModule({
  //Aqui agregaremos los componentes
  declarations: [AlumnoComponent],
  //Importamos los modulos de Angular que se van a necesitar.
  imports: [CommonModule],
  //Agregamos los componentes que se van a exportar del modulo para ser utlizados
  exports: [AlumnoComponent],
})
export class AlumnoModule {}
