import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TaylorService {
  constructor(private httpClient: HttpClient) {
    console.log('El servicio esta funcionando');
  }

  get SongTaylor() {
    return this.httpClient.get('https://taylorswiftapi.onrender.com/get');
  }
}
