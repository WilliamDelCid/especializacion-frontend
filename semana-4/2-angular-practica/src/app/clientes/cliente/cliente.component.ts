import { Component } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  listaCliente: ICliente[] = [
    {
      nombre: 'Juan',
      telefono: '78080880',
    },
    {
      nombre: 'Zoyla Reyna de Conde',
      telefono: '76543235',
    },
    {
      nombre: 'Roosa',
      telefono: '765467654',
    },
  ];

  nuevoCliente: ICliente = {
    nombre: '',
    telefono: '',
  };

  agregar(): void {
    if (this.nuevoCliente.nombre === '' || this.nuevoCliente.telefono === '') {
      return;
    }
    this.listaCliente.push(this.nuevoCliente);
    this.nuevoCliente = {
      nombre: '',
      telefono: '',
    };
  }
}
