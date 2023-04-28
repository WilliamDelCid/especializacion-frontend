import { Component, Input, OnInit } from '@angular/core';
import { BuscadorComponent } from 'src/app/modules/busqueda/pages/buscador/buscador.component';
import { BusquedaService } from 'src/app/modules/busqueda/service/busqueda.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
})
export class HistorialComponent implements OnInit {
  // list: string[] = [];
  constructor(private Service: BusquedaService) {}

  Buscar(item: any) {
    this.Service.obtenerFiltro(item).subscribe((resp: any) => {
      this.Service.listado = resp;
    });
  }

  get list() {
    return this.Service.listadoDatos;
  }

  ngOnInit(): void {}
}
