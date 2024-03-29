import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMascota } from '../interface/mascotas.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceMascotaService {
  Mascota!: IMascota;
  private baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {
    // console.log('Esta funcionando');
  }

  get mascotas() {
    return this.httpClient.get<IMascota[]>('http://localhost:3000/mascotas');
  }

  buscarMascota(termino: string): Observable<IMascota[]> {
    if (termino.length > 1) {
      return this.httpClient.get<IMascota[]>(`http://localhost:3000/mascotas/?q=${termino}&_limit=5`);
    } else {
      return this.httpClient.get<IMascota[]>(`http://localhost:3000/mascotas/`);
    }
  }

  buscarMascotaId(id: string): Observable<IMascota> {
    if (id.length > 0) {
      this.httpClient.get<IMascota>(`http://localhost:3000/mascotas/${id}`).subscribe((resp) => {
        this.Mascota = resp;
      });
      return this.httpClient.get<IMascota>(`http://localhost:3000/mascotas/${id}`);
    } else {
      return this.httpClient.get<IMascota>(`http://localhost:3000/mascotas/`);
    }
  }

  obtenerById(id: string): any {
    return new Promise((resolve) => {
      return this.httpClient.get<IMascota>(`${this.baseUrl}/mascotas/${id}`).subscribe((data) => {
        resolve(data);
      });
    });
  }

  obtenerAll(): any {
    return new Promise((resolve) => {
      this.httpClient.get<IMascota[]>(`${this.baseUrl}/mascotas`).subscribe((data) => {
        resolve(data);
        // console.log(data);
      });
    });
  }

  borrarMascota(pet: IMascota): Observable<IMascota> {
    return this.httpClient.delete<IMascota>(`http://localhost:3000/mascotas/${pet.id}`);
  }

  nuevaMascota(pet: IMascota): any {
    const url = `${this.baseUrl}/mascotas/`;
    return this.httpClient.post(url, pet);
  }

  editarMascota(pet: IMascota): any {
    const url = `${this.baseUrl}/mascotas/${pet.id}`;
    return this.httpClient.put(url, pet);
  }

  deleteMascota(id: string): Observable<IMascota> {
    return this.httpClient.delete<IMascota>(`http://localhost:3000/mascotas/${id}`);
  }
}
