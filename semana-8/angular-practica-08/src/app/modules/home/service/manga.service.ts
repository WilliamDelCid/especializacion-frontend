import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class MangaService {
  url = environment.API_URL;
  constructor(private httpClient: HttpClient) {
    console.log('El servicio esta funcionando');
  }

  obtenerManga() {
    return this.httpClient.get(this.url);
  }

  // update(){
  //   this.httpClient.get<any>(`/api/data?page=${this.currentPage}&per_page=${this.perPage}`)
  //   .subscribe(response => {
  //     // Actualizar los valores de paginación con la respuesta de la API
  //     this.lastVisiblePage = response.pagination.last_visible_page;
  //     this.hasNextPage = response.pagination.has_next_page;
  //     this.totalItems = response.pagination.items.total;
  //     this.data = response.data;
  //   }, error => {
  //     // Manejar errores en la petición a la API
  //     console.error('Error al obtener datos de la API:', error);
  //   });
  // }
}
