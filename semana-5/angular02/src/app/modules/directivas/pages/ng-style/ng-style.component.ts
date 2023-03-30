import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss'],
})
export class NgStyleComponent {
  size: number = 14; //para cambiar el tam;o de la fuente
  bandera: boolean = true; //para activar o desactivar el estilo
  colorEstado: string = '#f00'; //para cambiar el color
  message = 1; //para condicionar el estilo

  get color() {
    return '#00f';
  }
}
