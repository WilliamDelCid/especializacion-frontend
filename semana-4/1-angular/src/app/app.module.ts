//Primero los de angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { AlumnoModule } from './alumnos/alumno.module';
import { ClientesModule } from './clientes/clientes.module';

@NgModule({
  declarations: [AppComponent, AcumuladorComponent],
  imports: [
    BrowserModule,
    AlumnoModule,
    ClientesModule,
    // Van los modulos que vamos a necesitar
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
