import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionComponent } from './seccion/seccion.component';

@NgModule({
  declarations: [SeccionComponent],
  imports: [CommonModule],
  exports: [SeccionComponent],
})
export class SectionModule {}
