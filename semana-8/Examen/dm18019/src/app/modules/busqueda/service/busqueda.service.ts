import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from 'src/app/constants/constants';
import { busqueda } from '../interface/busqueda.interface';

@Injectable({ providedIn: 'root' })
export class BusquedaService {
  listado: busqueda[] = [];
  listadoDatos: string[] = [];
  constructor(private httpClient: HttpClient) {
    console.log('El servicio esta funcionando');
  }

  obtenerFiltro(dato: string) {
    const url = URL;
    if (dato === '') {
      return this.httpClient.get(url);
    }

    const data = this.httpClient.get(
      `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=24&q=${dato}`
    );

    if (!this.listadoDatos.includes(dato)) {
      this.listadoDatos.push(dato);
    }

    if (this.listadoDatos.length > 10) {
      this.listadoDatos.shift();
    }
    return data;
  }
}
