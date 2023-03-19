import { Component, Input } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Input()
  listaCli: ICliente[] = [{ nombre: 'Casa', telefono: 'Paredes' }];

  nuevoCliente: ICliente = {
    nombre: '',
    telefono: '',
  };

  agregar(): void {
    this.listaCli.push(this.nuevoCliente);
    this.nuevoCliente = {
      nombre: '',
      telefono: '',
    };
  }
}
