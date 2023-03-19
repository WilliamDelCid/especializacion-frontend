import { Component } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  listaClientes: ICliente[] = [
    { nombre: 'Armando Paredes', telefono: '76543455' },
    { nombre: 'Armando Casas', telefono: '76545676' },
  ];

  nuevoCliente: ICliente = { nombre: '', telefono: '' };
  agregar(): void {
    if (this.nuevoCliente.nombre.trim().length === 0) {
      return;
    }

    this.listaClientes.push(this.nuevoCliente);
    this.nuevoCliente = {
      nombre: '',
      telefono: '',
    };
  }
}
