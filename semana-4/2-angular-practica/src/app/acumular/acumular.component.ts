import { Component } from '@angular/core';

@Component({
  selector: 'app-acumular',
  template: `<h1>✋Hola Angular! desde Class</h1>
    <hr />
    <button (click)="acumulador(valor)">Incrementar</button>
    <button (click)="acumulador(-valor)">Decrementar</button>
    <span>{{ numero }}</span> `,
})
export class AcumuladorComponent {
  title: string = 'Mi primer Aplicacion';
  valor: number = 10;
  numero: number = 100;
  acumulador(valor: number) {
    this.numero += valor;
  }
}
