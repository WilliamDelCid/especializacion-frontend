import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../../service/busqueda.service';
import { busqueda } from '../../interface/busqueda.interface';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent implements OnInit {
  dato: string = '';
  // input: busqueda[] = [];
  vacio: busqueda[] = [];

  constructor(private service: BusquedaService) {}

  ngOnInit(): void {}

  mostrar() {
    this.service.obtenerFiltro(this.dato).subscribe((resp: any) => {
      // this.input = [];
      this.vacio = [];
      this.vacio = resp;
      if (this.vacio.length == 0) {
      } else {
        // this.input = resp;
        this.service.listado = resp;
      }
    });
  }

  get input() {
    return this.service.listado;
  }
}
