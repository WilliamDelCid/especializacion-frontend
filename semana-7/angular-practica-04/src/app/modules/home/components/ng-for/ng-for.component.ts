import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent implements OnInit {
  elementoSeleccionado: HTMLElement | undefined;
  elemento: HTMLElement | undefined;
  lista: string[] = [
    '🐶 Perro',
    '🐶 Perro',
    '🐱 Gato',
    '🐻 Oso',
    '🐘 Elefante',
    '🐯 Tigre',
    '🦁 León',
    '🐨 Koala',
    '🦊 Zorro',
    '🐰 Conejo',
    '🐍 Serpiente',
  ];

  constructor() {}

  seleccionarElemento(target: HTMLElement): void {
    this.elementoSeleccionado = target;
  }

  ngOnInit(): void {}
}
