import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MangaService {
  constructor(private httpClient: HttpClient) {
    console.log('Esta funcionando');
  }

  ObtenerManga(nombre: string) {
    return this.httpClient.get(`https://api.jikan.moe/v4/manga?q=${nombre}`);
  }
}
