import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class NouryokuService {
  property: any;

  constructor(private httpClient: HttpClient) {
    console.log('Esta Funcionando');
  }

  get Obtener() {
    return this.httpClient.get('http://localhost:3000/frases');
  }
}
