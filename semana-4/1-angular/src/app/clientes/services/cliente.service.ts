import { Injectable } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';
//En los Clientes service se puede agragar los metodos de insertar y agragar etc
@Injectable()
export class ClienteService {
  listaClientes: ICliente[] = [
    { nombre: 'Armando Paredes', telefono: '54545454' },
    { nombre: 'Ana Hernández', telefono: '67891234' },
    { nombre: 'Juan Ramírez', telefono: '98765432' },
  ];
  constructor() {
    console.log('Iniciando el servicio');
  }

  agregarCliente(cliente: ICliente) {
    this.listaClientes.push(cliente);
  }
}
