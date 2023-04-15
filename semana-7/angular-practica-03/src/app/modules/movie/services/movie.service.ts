import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(private httpClient: HttpClient) {
    console.log('Esta funcionando');
  }

  get Movie() {
    return this.httpClient.get('https://nekos.best/api/v2/neko');
  }
}
