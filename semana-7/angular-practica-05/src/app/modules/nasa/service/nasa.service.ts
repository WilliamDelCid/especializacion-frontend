import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nasa } from '../interface/nasa.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(private httpCliente: HttpClient) {
    console.log('El servicio esta funcionado');
  }

  get getApi() {
    return this.httpCliente.get<Nasa>(
      `https://api.nasa.gov/planetary/apod?start_date=2023-04-1&api_key=${environment.API_KEY}`
    );
  }
}
