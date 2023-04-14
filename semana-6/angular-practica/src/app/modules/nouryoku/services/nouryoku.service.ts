import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class NouryokuService {
  property: any;

  constructor(private httpClient: HttpClient) {
    console.log('Esta Funcionando');
  }

  get Obtener() {
    return this.httpClient.get(
      'https://api.jsonbin.io/v3/b/6425dea8c0e7653a059a0ef9',
      {
        headers: {
          'X-MASTER-KEY':
            '$2b$10$THKz5626TCbFKoe9VMXyuOrJv/bTvphwkkmmL5NDdhp/9fUlrp3eG',
        },
      }
    );
  }
}
