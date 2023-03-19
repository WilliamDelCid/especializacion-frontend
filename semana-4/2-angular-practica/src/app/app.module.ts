import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcumuladorComponent } from './acumular/acumular.component';
import { AlumnoModule } from './alumnos/alumno.module';
import { ClientesModule } from './clientes/clientes.module';

@NgModule({
  declarations: [AppComponent, AcumuladorComponent],
  imports: [BrowserModule, AlumnoModule, ClientesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
