import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {
    console.log('Servicio HTTP:');
  }

  getNeko(): any {
    return this.http.get('https://nekos.best/api/v2/neko');
  }
}
