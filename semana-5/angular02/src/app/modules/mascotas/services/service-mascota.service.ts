import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMascota } from '../interface/mascotas.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceMascotaService {
  constructor(private httpClient: HttpClient) {
    console.log('Esta funcionando');
  }

  get mascotas() {
    return this.httpClient.get<IMascota[]>('http://localhost:3000/mascotas');
  }

  buscarMascota(termino: string): Observable<IMascota[]> {
    if (termino.length > 1) {
      return this.httpClient.get<IMascota[]>(
        `http://localhost:3000/mascotas/?q=${termino}&_limit=5`
      );
    } else {
      return this.httpClient.get<IMascota[]>(`http://localhost:3000/mascotas/`);
    }
  }
}
