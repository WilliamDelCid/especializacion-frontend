import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  nombre: string = 'William';
  telefono: string = '43433333';

  //listaClientes: ICliente[] = []; //Ya no se necesita si tiene el mismo nombre en el get

  constructor(private clienteService: ClienteService) {
    // this.listaClientes = clienteService.listaClientes;
  } //Se usa para endpoint

  get listaCliente(): ICliente[] {
    //Se puede modificar lo que trae para entregarlo
    console.log(this.clienteService.listaClientes);

    return this.clienteService.listaClientes;
  }

  nuevoCliente: ICliente = { nombre: '', telefono: '' };
}
