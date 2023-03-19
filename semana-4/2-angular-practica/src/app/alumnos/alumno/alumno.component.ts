import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: 'alumno.component.html',
})
export class AlumnoComponent {
  nombre: string = 'Kely Mishel <3';
  edad: number = 99;

  mostrarInformacion(): string {
    return this.nombre + ' - ' + this.edad;
  }

  get obtenerCapitalizado() {
    return this.nombre.toLocaleUpperCase();
  }

  cambiarDatos(): void {
    this.nombre = 'Jorge Gonzales';
    this.edad = 99;
  }
}
