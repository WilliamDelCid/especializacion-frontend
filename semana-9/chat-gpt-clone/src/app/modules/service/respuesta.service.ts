import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Conver {
  palabra: string;
  resultado: string;
}

@Injectable({
  providedIn: 'root',
})
export class RespuestaService {
  click: boolean = false;
  resultado: string = '';
  palabraBuscada: string[] = [];
  conversacion: Conver[] = [];
  constructor(private httpclient: HttpClient) {}

  obtenerAleatorio(dato: string) {
    this.palabraBuscada.push(dato);
    return this.httpclient
      .get('https://animechan.vercel.app/api/random')
      .subscribe((anime: any) => {
        this.resultado = anime.quote;
        const nuevo: Conver = {
          palabra: dato,
          resultado: this.resultado,
        };
        this.conversacion.push(nuevo);
        console.log(this.conversacion);
      });
  }
}
