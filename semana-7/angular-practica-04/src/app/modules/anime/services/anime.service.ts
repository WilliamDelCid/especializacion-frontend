import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AnimeService {
  constructor(private httpClient: HttpClient) {
    console.log('El servicio esta funcionando');
  }

  get FraseAnime() {
    return this.httpClient.get('https://animechan.vercel.app/api/random');
  }
}
