import { Component, OnInit } from '@angular/core';
import { RespuestaService } from 'src/app/modules/service/respuesta.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent implements OnInit {
  palabraBuscada: string = '';

  constructor(private service: RespuestaService) {}

  ngOnInit(): void {}

  palabraSearch() {
    this.service.obtenerAleatorio(this.palabraBuscada);
  }
}
