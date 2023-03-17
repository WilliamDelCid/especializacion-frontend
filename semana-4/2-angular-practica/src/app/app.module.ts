import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcumuladorComponent } from './acumulador/acumulador.component';

import { AppComponent } from './app.component';
import { AlumnoModule } from './alumnos/alumnos.module';
import { ClientesModule } from './clientes/clientes.module';

@NgModule({
  declarations: [AppComponent, AcumuladorComponent],
  imports: [BrowserModule, AlumnoModule, ClientesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
