import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NekoService {
  constructor(private httpCliente: HttpClient) {
    console.log('El servicio esta funcionando 111');
  }

  get AllNeko() {
    return this.httpCliente.get('https://nekos.best/api/v2/neko?amount=25');
  }
}
