import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  nombre: string = 'William';
  telefono: string = '43433333';
  listaClientes: ICliente[] = [
    { nombre: 'Armando Paredes', telefono: '54545454' },
    { nombre: 'Ana Hernández', telefono: '67891234' },
    { nombre: 'Juan Ramírez', telefono: '98765432' },
  ];

  nuevoCliente: ICliente = { nombre: '', telefono: '' };
}
