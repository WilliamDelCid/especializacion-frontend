import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Mi primer Aplicacion';
  numero: number = 100;
  valor: number = 10;
  modificarValor(valor: number) {
    this.numero += valor;
  }
}
