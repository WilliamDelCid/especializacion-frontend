import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss'],
})
export class NgSwitchComponent implements OnInit {
  // pais = 'Francia';

  numero: number = 0;

  constructor() {}

  ngOnInit(): void {}

  buttonMax() {
    if (this.numero === 5) {
      this.numero = 5;
      return;
    }
    this.numero = this.numero + 1;
  }

  buttonMin() {
    if (this.numero === 0) {
      this.numero = 0;
      return;
    }
    this.numero = this.numero - 1;
  }
}
