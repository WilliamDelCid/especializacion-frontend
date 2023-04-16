import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-else',
  templateUrl: './ng-if-else.component.html',
  styleUrls: ['./ng-if-else.component.scss'],
})
export class NgIfElseComponent implements OnInit {
  lista: string[] | undefined;

  constructor() {}

  ngOnInit(): void {}

  cambio() {
    if (this.lista === undefined) {
      this.lista = [
        '🕷️ Spider-Man',
        '🦇 Batman',
        '⚡ Flash',
        '🇺🇸 Captain America',
        '🦸‍♀️ Wonder Woman',
        '🦸‍♂️ Superman',
        '🕸️ Black Widow',
        '🦹‍♂️ Magneto',
        '🐍 Wolverine',
        '🦸‍♂️ Iron Man',
      ];
    } else {
      this.lista = undefined;
    }
  }
}
